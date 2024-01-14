import ArrowDown from "@/assets/svg/ArrowDown";
import ArrowUp from "@/assets/svg/ArrowUp";

export interface hideTypes {
	isHide: boolean;
	setIsHide: () => void;
	showComment: number | null;
	isLength?: null | number;
	curId: number | null;
}

const HideComment = ({
	isHide,
	setIsHide,
	isLength,
	showComment,
	curId,
}: hideTypes) => {
	// console.log(`HideComment ${curId}`);

	const textStyle =
		"text-sm text-ETC_COLOR hover:font-semibold cursor-pointer flex flex-row items-center";

	return (
		<button className={textStyle} onClick={setIsHide}>
			{isHide && curId === showComment ? (
				<>
					<ArrowUp width={"12px"} height={"12px"} />
					댓글 숨기기
				</>
			) : (
				<>
					<ArrowDown width={"12px"} height={"12px"} />
					{`댓글 ${isLength}개 보기`}
				</>
			)}
		</button>
	);
};

export default HideComment;
