// import { ParentInfo } from "@/components/comment/EditComment"; extends delete

interface AmendCommentTypes {
	onClick: () => void;
}

const AmendBtn = ({ onClick }: AmendCommentTypes) => {
	//본인 확인 여부
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
