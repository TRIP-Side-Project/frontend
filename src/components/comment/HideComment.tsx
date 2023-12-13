import ArrowDown from "@/assets/svg/ArrowDown";
import ArrowUp from "@/assets/svg/ArrowUp";

export interface hideTypes {
	isHide: boolean;
	onClick: () => void;
	isLength?: null | number;
}

const HideComment = ({ isHide, onClick, isLength }: hideTypes) => {
	const textStyle =
		"text-sm text-ETC_COLOR hover:font-semibold cursor-pointer flex flex-row items-center";
	// const commentLength = 3;

	if (isHide === true) {
		return (
			<button className={textStyle} onClick={onClick}>
				<ArrowUp width={"12px"} height={"12px"} />
				댓글 숨기기
			</button>
		);
	}

	if (isHide === false) {
		return (
			<button className={textStyle} onClick={onClick}>
				<ArrowDown width={"12px"} height={"12px"} />
				{`댓글 ${isLength}개 보기`}
			</button>
		);
	}
};

export default HideComment;
