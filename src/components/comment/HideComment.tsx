import ArrowDown from "@/assets/svg/ArrowDown";
import ArrowUp from "@/assets/svg/ArrowUp";

export interface hideTypes {
	type: "hide" | "show";
	onClick: () => void;
}

const HideComment = ({ type, onClick }: hideTypes) => {
	const textStyle =
		"text-sm text-ETC_COLOR hover:font-semibold cursor-pointer flex flex-row items-center";
	const commentLength = 3;

	if (type === "hide") {
		return (
			<button className={textStyle} onClick={onClick}>
				<ArrowUp width={"12px"} height={"12px"} />
				댓글 숨기기
			</button>
		);
	}

	if (type === "show") {
		return (
			<button className={textStyle} onClick={onClick}>
				<ArrowDown width={"12px"} height={"12px"} />
				{`댓글 ${commentLength}개 보기`}
			</button>
		);
	}
};

export default HideComment;
