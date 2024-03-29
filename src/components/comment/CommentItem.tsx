import { useState } from "react";
import AmendBtn from "@/common/button/AmendBtn";
import { CommentTypes } from "./Comment";
import DeleteBtn from "@/common/button/DeleteBtn";

import EditComment from "./EditComment";
import HideComment from "./HideComment";
import useFormatDate from "@/hooks/useFormatDate";

interface CommentItems {
	datas: CommentTypes;
	isHide?: boolean;
	setIsHide?: () => void;
	showComment: number | null;
	type: "origin" | "child";
}

const CommentItem = ({
	datas,
	isHide,
	setIsHide,
	type,
	showComment,
}: CommentItems) => {
	const [isEdit, setIsEdit] = useState(false);
	const [is2CHide, setIs2CHide] = useState(false);
	const [editCommitId, setEditCommentId] = useState<number | null>(null);
	// const [reHcommentId, setReHcommentId] = useState<number | null>(null);
	const MEMBER_ID = window.localStorage.getItem("memberId"); //임시
	// console.log(datas);
	const formattedDate = useFormatDate(datas.createdAt);

	const handle2CHide = (commentId: number) => {
		setEditCommentId(commentId);
		setIs2CHide(!is2CHide);
	};
	// const handleReCHide = (reCommentId: number) => {
	// 	setReHcommentId(reCommentId)
	// }

	//css
	const bgClass =
		type === "child"
			? "bg-LINE_POINT_COLOR flex-1 border-b border-b-LIGHT_GRAY_COLOR"
			: "";

	return (
		<>
			{isEdit ? (
				<EditComment
					parentInfo={[datas.articleId, datas.parentId, datas.commentId]}
					editData={datas.content}
					isEditMode={true}
					setIsEdit={setIsEdit}
				/>
			) : (
				<div className={bgClass}>
					<div
						key={`comment-actions-${datas.commentId}`}
						className="flex flex-row justify-between px-2 py-3"
					>
						<img
							src={datas.writerProfileImg}
							alt="userImage"
							className="rounded-full w-14 h-14"
						/>
						<div className="flex-1 w-9/12 ml-3 text-BASIC_BLACK">
							<div className="text-lg font-semibold">
								{datas.writerNickname}
							</div>
							<div className="">{datas.content}</div>
						</div>
						<div className="flex flex-row ">
							<div className="mx-3 text-sm text-DARK_GRAY_COLOR">
								{formattedDate}
							</div>
							{datas && datas.writerId === Number(MEMBER_ID) ? (
								<>
									<AmendBtn
										onClick={() => {
											setIsEdit(!isEdit), console.log("수정 버튼 클릭");
										}}
										// parentInfo={[
										// 	datas.articleId,
										// 	datas.parentId,
										// 	datas.commentId,
										// ]}
									/>
									<DeleteBtn itemId={datas.commentId} type={"comment"} />
								</>
							) : null}
						</div>
					</div>

					{/* 댓글 하단 부 댓글 보기 | 댓글 쓰기 색션 */}
					{type === "origin" ? (
						<div className="flex flex-row mt-3 mb-1">
							{datas.children !== null && datas.children.length !== 0 ? (
								<HideComment
									isHide={isHide as boolean}
									setIsHide={setIsHide as () => void}
									showComment={showComment}
									isLength={datas.children.length}
									key={`comment-showComment-${datas.commentId}`}
									curId={datas.commentId}
								/>
							) : (
								<></>
							)}
							<button
								key={`comment-button-${datas.commentId}`}
								className="ml-5 text-sm text-LIGHT_GRAY_COLOR hover:text-ETC_COLOR pointer-cursor"
								onClick={() => handle2CHide(datas.commentId)}
							>
								{is2CHide && editCommitId === datas.commentId
									? "댓글 취소"
									: "댓글 쓰기"}
							</button>
						</div>
					) : null}
					{is2CHide && editCommitId === datas.commentId ? (
						<EditComment
							parentInfo={[datas.articleId, editCommitId, datas.commentId]}
							setIsEdit={setIsEdit}
						/>
					) : (
						<></>
					)}
				</div>
			)}
		</>
	);
};

export default CommentItem;
