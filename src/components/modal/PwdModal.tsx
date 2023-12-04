import Close from "@/assets/svg/Close";
import { ToggleTypes } from "@/types/toggle";

const PwdModal = ({ isClick }: ToggleTypes) => {
	const name = "아리";
	const introduce = "Ari35304";
	const inputStyle =
		"rounded-lg border border-BASIC_BLACK px-2 py-1 mt-2 mb-5 w-full";
	const titleStyle = "text-BASIC_BLACK font-bold text-lg mt-5";
	return (
		<div className="fixed inset-0 z-10 flex items-end justify-center w-screen min-h-full p-4 overflow-y-auto text-center transition-opacity bg-gray-500 bg-opacity-75 sm:items-center sm:p-0">
			<div className="relative px-10 overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl w-[560px]">
				<button className="float-right px-3 py-2 bg-red-300" onClick={isClick}>
					<Close fillColor={"#333333"} width={"18px"} height={"18px"} />
				</button>
				<form className="my-10 bg-yellow-300">
					<div className={titleStyle}> 현재 비밀번호</div>
					<input className={inputStyle} type="text" value={name} />
					<div className={titleStyle}>변경 비밀번호</div>
					<input className={inputStyle} type="text" value={name} />
					<div className={titleStyle}>비밀번호 확인</div>
					<input className={inputStyle} type="text" value={introduce} />
				</form>
			</div>
		</div>
	);
};

export default PwdModal;
