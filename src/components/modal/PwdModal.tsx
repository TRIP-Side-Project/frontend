import { useEffect, useState } from "react";
// import { useMutation } from "@tanstack/react-query";
// import axios from "axios";

import Close from "@/assets/svg/Close";
import { ToggleTypes } from "@/types/toggle";

const PwdModal = ({ isClick }: ToggleTypes) => {
	// const BASE_URL = import.meta.env.VITE_BASE_URL;
	// const ACCESS_TOKEN = "Bearer TempToken";
	const tempOriginPwd = "hima19185!"; //기존 비밀번호

	const [checkOriginPwd, setCheckOriginPwd] = useState("");
	const [amendPwd, setAmendPwd] = useState(""); // 변경 비밀번호
	const [spanText, setSpanText] = useState(""); // 변경 비밀번호 내부 경고 문구
	const [reAmendPwd, setReAmendPwd] = useState(""); // 변경 비밀번호 확인용

	const isOriginValid = tempOriginPwd === checkOriginPwd;
	const isSamePwd = tempOriginPwd === amendPwd;
	const isRePwdValid = amendPwd === reAmendPwd;
	console.log(`변경 뉴 비번 : ${amendPwd}`);
	console.log(isSamePwd);

	////^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;
	const [isAmendValid, setISAmendValid] = useState(true);

	//Origin 비밀번호 확인 유효성 검사
	const handleOriginValidPwd:
		| React.ChangeEventHandler<HTMLInputElement>
		| undefined = (e) => {
		const inputData = e.target.value;
		console.log(`원래 비번 : ${inputData}`);
		setCheckOriginPwd(inputData);
		if (tempOriginPwd === checkOriginPwd) {
			console.log("Origin 비밀번호와 일치합니다. ");
		} else {
			console.log("Origin 비밀번호와 틀립니다. ");
		}
	};

	//변경 비밀번호 유효성 검사
	const handleAmendValidPwd:
		| React.ChangeEventHandler<HTMLInputElement>
		| undefined = (e) => {
		const inputData = e.target.value;
		// console.log(`변경 뉴 비번 : ${inputData}`);
		setAmendPwd(inputData);
	};

	useEffect(() => {
		let message = "";
		const regex = /^(?=.*[a-zA-Z])(?=.*\d)(?!.*\s).{8,}$/;
		if (regex.test(amendPwd)) {
			//변경 비밀번호 조건 유효한 경우
			setISAmendValid(true);
		} else {
			//그 외 비밀번호 조건 유효하지 않은 경우
			setISAmendValid(false);
			message =
				"* 비밀번호는 최소 8자 이상, 영문과 숫자를 포함해야 하며 공백이 없어야 합니다.";
		}

		if (isSamePwd) {
			//기존 비밀번호와 동일한 경우 isSamePwd - true 에러
			setISAmendValid(false);
			message = "* 기존 비밀번호를 사용하실 수 없습니다.";
		}

		setSpanText(message);
	}, [amendPwd, isSamePwd]);

	//변경 비밀번호 재확인 유효성 검사
	const handleReAmendValidPwd:
		| React.ChangeEventHandler<HTMLInputElement>
		| undefined = (e) => {
		const inputData = e.target.value;
		setReAmendPwd(inputData);
		console.log(`비밀번호 변경: ${amendPwd} : 재확인 ${reAmendPwd}`);
		if (amendPwd === reAmendPwd) {
			console.log("변경 비번 재확인 일치");
		} else {
			console.log("변경 비번 불일치!!!");
		}
	};

	//최종 비밀번호 변경 요청
	// const mutation = useMutation({
	// 	mutationFn: () => {
	// 		return axios.patch(`${BASE_URL}/api/members/password`, {
	// 			data: {currentPassword: checkOriginPwd,
	// 			newPassword: amendPwd,
	// 			newPasswordConfirm: reAmendPwd},
	// 			headers: {accessToken: ACCESS_TOKEN}
	// 		});
	// 	},
	// });

	const sendChangePwd = async () => {
		if (isOriginValid && isOriginValid && !isSamePwd) {
			// await mutation.mutateAsync();
			console.log("비밀번호 변경 성공 가능 ");
			isClick();
		} else {
			console.log("비밀번호 변경 불가능 ");
		}
	};

	const inputStyle =
		"rounded-lg border border-BASIC_BLACK px-2 py-1 mt-2 mb-5 w-full";
	const titleStyle = "text-BASIC_BLACK font-bold text-lg mt-5";

	return (
		<div className="fixed inset-0 z-50 flex items-end justify-center w-screen min-h-full p-4 overflow-y-auto text-center transition-opacity bg-gray-500 bg-opacity-75 sm:items-center sm:p-0">
			<div className="relative px-10 py-5 overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl w-[560px]">
				<button className="float-right px-3 pb-2 mt-2" onClick={isClick}>
					<Close fillColor={"#333333"} width={"18px"} height={"18px"} />
				</button>
				<form className="my-10">
					<div className={titleStyle}>
						현재 비밀번호
						{checkOriginPwd ? (
							<span
								className={`ml-2 font-normal text-ETC_COLOR text-[14px] ${
									isOriginValid ? "text-ETC_COLOR" : "text-POINT_COLOR"
								}`}
							>
								{isOriginValid
									? "* 비밀번호를 맞게 입력했습니다. "
									: "* 비밀번호가 일치하지 않습니다. "}
							</span>
						) : null}
					</div>
					<input
						className={inputStyle}
						type="password"
						onChange={handleOriginValidPwd}
					/>
					<div className={titleStyle}>
						변경 비밀번호
						{amendPwd && isAmendValid === false ? (
							<span className="ml-2 font-normal text-[14px] text-POINT_COLOR">
								{spanText}
							</span>
						) : null}
					</div>
					<input
						className={inputStyle}
						type="password"
						onChange={handleAmendValidPwd}
					/>
					<div className={titleStyle}>
						비밀번호 확인
						{reAmendPwd ? (
							<span
								className={`ml-2 font-normal text-ETC_COLOR text-[14px] ${
									isRePwdValid ? "text-ETC_COLOR" : "text-POINT_COLOR"
								}`}
							>
								{isRePwdValid
									? "* 변경 비밀번호 일치"
									: "* 변경 비밀번호 불.일.치"}
							</span>
						) : null}
					</div>
					<input
						className={inputStyle}
						type="password"
						onChange={handleReAmendValidPwd}
					/>
				</form>
				<div className="flex justify-center">
					<button
						className="blue_squareBtn w-[178px]"
						onClick={sendChangePwd}
						disabled={!isOriginValid || !isRePwdValid || isSamePwd}
					>
						비밀번호 변경
					</button>
				</div>
			</div>
		</div>
	);
};

export default PwdModal;
