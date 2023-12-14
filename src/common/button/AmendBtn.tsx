import { ParentInfo } from "@/components/comment/EditComment";

interface AmendCommentTypes extends ParentInfo {
	onClick: () => void;
	parentInfo: [number, number | null, number | null];
}

const AmendBtn = ({ onClick, parentInfo }: AmendCommentTypes) => {
	//본인 확인 여부
	console.log(`${parentInfo}`);
	return (
		<div
			className="mx-2 text-sm cursor-pointer text-DARK_GRAY_COLOR"
			onClick={onClick}
		>
			수정
		</div>
	);
};

export default AmendBtn;
