import Close from "@/assets/svg/Close";
import Button, { btnAttributes } from "@/common/button/Button";
import { ToggleTypes } from "@/types/toggle";

const MyPageModal = ({ isClick }: ToggleTypes) => {
	const name = "아리";
	const introduce = "여행을 좋아하는 에디터 아리입니다.";
	const inputStyle =
		"rounded-lg border border-BASIC_BLACK px-2 py-1 mt-2 mb-5 w-full";
	const titleStyle = "text-BASIC_BLACK font-bold text-lg mt-5";
	const btnInfo: btnAttributes = {
		width: "178px",
		text: "프로필 수정 완료",
		type: "square",
		position: "center",
	};

	return (
		<div className="fixed inset-0 z-50 flex items-end justify-center w-screen min-h-full p-4 overflow-y-auto text-center transition-opacity bg-gray-500 bg-opacity-75 sm:items-center sm:p-0">
			<div className="relative px-10 py-5 overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl w-[560px]">
				<button className="float-right px-3 pb-2 mt-2" onClick={isClick}>
					<Close fillColor={"#333333"} width={"18px"} height={"18px"} />
				</button>
				<form className="my-10">
					<div className={titleStyle}> 프로필 이미지</div>
					<div className="w-full h-32 p-5 rounded-lg bg-LIGHT_GRAY_COLOR"></div>
					<div className={titleStyle}>이름</div>
					<input className={inputStyle} type="text" value={name} />
					<div className={titleStyle}>자기소개 한 줄</div>
					<input className={inputStyle} type="text" value={introduce} />
					<div className={titleStyle}> 관심태그</div>
					<input className={inputStyle} type="text" />
				</form>
				<Button btnInfo={btnInfo} />
			</div>
		</div>
	);
};

export default MyPageModal;
