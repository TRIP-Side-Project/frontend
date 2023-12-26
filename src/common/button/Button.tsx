import BasicModal, { ModalAttributes } from "@/components/modal/BasicModal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export interface btnAttributes {
	width: string;
	// height: string;
	text: string;
	bgColor?: string;
	textColor?: string;
	border?: string;
	position?: string;
	type: "circle" | "square";
	//로그인 상태 일 때 실행되어야 할 함수
	onClick?: (() => void) | void | undefined;
	//현재 로그인 상태 여부 확인
	isLogin?: boolean;
	//로그인 버튼으로 사용할 거니 여부
	loginBtnType?: true;
	modal?: ModalAttributes | undefined;
}

interface btnTypes {
	btnInfo: btnAttributes;
}

const Button = ({ btnInfo }: btnTypes) => {
	const [isOpen, setIsOpen] = useState(false);

	const {
		width,
		bgColor,
		textColor,
		border,
		position,
		text,
		type,
		onClick,
		isLogin,
		loginBtnType,
	} = btnInfo;
	let { modal } = btnInfo;

	// console.log(btnInfo);
	const basicStyle = type === "circle" ? "blue_circleBtn" : `blue_squareBtn`;
	const bg = bgColor ? `bg-${bgColor}` : "";
	const borderStyle = border ? `border border-${border}` : "";
	const float = position ? `float-${position}` : "";
	const tColor = textColor ? `text-${textColor}` : "";
	const btnStyle = `${basicStyle} w-[${width}] ${float} ${bg} ${borderStyle} ${tColor} `;
	const navigate = useNavigate();
	const linkLogin = () => {
		navigate("/login");
	};
	const loginModal = {
		content: "로그인 한 사용자만 사용할 수 있습니다. 로그인 하시겠습니까?",
		noClick: () => setIsOpen(false),
		yesClick: () => {
			linkLogin(), console.log("로그인 페이지로 이동");
		},
	};
	//입력 받는 모달이 있으면 해당 modal 속성 사용
	modal = modal ? modal : loginModal;

	//noClick : 모달 닫는 함수 추가
	const modifiedModal: ModalAttributes = {
		// 타입 강제 할당
		// ...(modal as ModalAttributes),
		...modal!,
		noClick: () => setIsOpen(false),
	};
	// console.log(modifiedModal);
	const checkLogin = () => {
		if (isLogin) {
			//로그인 상태였을 때 실행하기를 원하는 함수 설정
			console.log("로그인 된 상태로 함수 실행!");
			onClick?.();
		} else {
			// 알림 모달 오픈
			setIsOpen(true);
			console.log("모달 버튼 오픈 실행 !");
		}
	};

	const handleButtonClick = () => {
		if (loginBtnType && modal) {
			// 로그인 확인용 버튼으로 설정했을 경우
			console.log("로그인 확인용 버튼 클릭 ");
			checkLogin();
		} else {
			// 별도의 클릭 버튼으로 설정했을 경우
			onClick?.();
			console.log("일반 버튼 클릭  ");
		}
	};

	return (
		<div>
			<button className={btnStyle} onClick={handleButtonClick}>
				{text}
			</button>
			{isOpen && modal ? <BasicModal modal={modifiedModal} /> : null}
		</div>
	);
};

export default Button;
