import { useState } from "react";
// import axios from "axios";
// import { useMutation } from "@tanstack/react-query";
import { ToggleTypes } from "@/types/toggle";
import Close from "@/assets/svg/Close";
// import { useNavigate } from "react-router-dom";
// import Button, { btnAttributes } from "@/common/button/Button";

// interface FormDataTypes {
// 	password: string;
// }

const DeleteMemModal = ({ isClick }: ToggleTypes) => {
	// const [isValid, setIsValid] = useState(false);
	const [pwd, setIsPwd] = useState("");

	const tempPwd = "hima19185!";
	// const navigate = useNavigate();
	const inputStyle =
		"rounded-lg border border-BASIC_BLACK px-2 py-1 h-10 mt-2 mb-10 w-full";
	const denyBtnStyle =
		"w-[178px] px-3 py-3 text-md font-semibold rounded-lg text-BASIC_BLACK border-2 border-POINT_COLOR mx-5 bg-red-300";
	const btnStyle =
		"w-[178px] px-3 py-3 text-md font-semibold rounded-lg text-BASIC_BLACK border border-BAISC_BLACK mx-5 bg-LINE_POINT_COLOR hover:bg-MAIN_COLOR hover:text-BASIC_WHITE";
	const [btnCss, setBtnCss] = useState(btnStyle); // 동작 안함

	// const BASE_URL = import.meta.env.BASE_URL;
	// const ACCESS_TOKEN = "Bearer TempToken";

	//회원 탈퇴
	// const mutation = useMutation<void, Error, FormDataTypes>({
	// 	mutationFn: (formData) => {
	// 		return axios.delete(`${BASE_URL}/api/members/me`, {
	// 			data: { password: formData.password },
	// 			headers: { accessToken: ACCESS_TOKEN },
	// 		});
	// 	},
	// });

	//비밀번호 재확인 유효성 검사
	const handleValidPwd:
		| React.ChangeEventHandler<HTMLInputElement>
		| undefined = (e) => {
		const inputData = e.target.value;
		console.log(inputData);
		setIsPwd(inputData);
	};

	const isPwdValid = pwd === tempPwd;

	const deleteMember = () => {
		if (isPwdValid) {
			// await mutation.mutateAsync();
			console.log("회원 탈퇴 완료");
			// navigate("/");
		} else {
			setBtnCss(denyBtnStyle);
			console.log("비밀번호가 틀려서 회원 탈퇴 버튼 클릭 불가능 ");
		}
	};
	console.log(isPwdValid);
	return (
		<div className="fixed inset-0 z-50 flex items-end justify-center w-screen min-h-full p-4 overflow-y-auto text-center transition-opacity bg-gray-500 bg-opacity-75 sm:items-center sm:p-0">
			<div className="relative px-10 py-5 overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl w-[560px]">
				<button className="float-right px-3 pb-2 mt-2" onClick={isClick}>
					<Close fillColor={"#333333"} width={"18px"} height={"18px"} />
				</button>
				<form className="my-10">
					<div className="mt-5 text-lg font-bold text-center text-BASIC_BLACK">
						정말 탈퇴 하시겠습니까?
					</div>
					<p className="mt-5 mb-10 text-center">
						TRIPTRIP 웹 사이트에서 회원님의 계정이 삭제됩니다.
						<br />
						탈퇴 시 개인 정보 및 이용정보가 삭제되며 복구할 수 없습니다. <br />
						회원 탈퇴를 위해 본인 확인을 위한 비밀번호를 입력 해주세요.
					</p>
					<div className="mt-5 font-bold text-md text-BASIC_BLACK ">
						비밀번호 확인
						{pwd ? (
							<span
								className={`ml-2 font-normal text-ETC_COLOR font-xs ${
									isPwdValid ? "text-ETC_COLOR" : "text-POINT_COLOR"
								}`}
							>
								{isPwdValid
									? "* 비밀번호가 일치 합니다. "
									: "* 비밀번호가 틀립니다. "}
							</span>
						) : null}
					</div>

					<input
						className={inputStyle}
						type="password"
						onChange={handleValidPwd}
					/>

					<div className="flex flex-row justify-around">
						<button className={btnStyle}>아니요</button>
						<button
							className={btnCss}
							onClick={deleteMember}
							disabled={!isPwdValid}
						>
							예, 탈퇴 하겠습니다.
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default DeleteMemModal;
