import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import Temp from "@/assets/img/temp.png";
import DeleteBtn from "@/common/button/DeleteBtn";
import AmendBtn from "@/common/button/AmendBtn";
import HideComment from "@/components/comment/HideComment";
import EditComment from "./EditComment";
import ArrowComment from "@/assets/svg/ArrowComment";
import axios from "axios";

interface CommentReTypes {
	articleId: number;
	children: null;
	commentId: number;
	content: string;
	createdAt: string;
	parentId: number;
	writeId: number;
	writerNickname: string;
}

interface CommentTypes {
	articleId: number;
	children: CommentReTypes[];
	commentId: number;
	content: string;
	createdAt: string;
	parendId: null;
	writerId: number;
	writerNickname: string;
}

const Comment = () => {
	const [isHide, setIsHide] = useState(false);
	const [is2CHide, setIs2CHide] = useState(false);
	const [editCommitId, setEditCommentId] = useState<number | null>(null);
	//여기 하던 중 isLenth 여부 설정
	const isLength = 3;
	// const [commentData, setCommentData] = useState<null | CommentTypes[]>(null);
	const getComments = async () => {
		try {
			const response = await axios.get("http://localhost:5000/comments");
			// setCommentData(response.data);
			return response.data;
		} catch (err) {
			throw new Error(`Err getComments ${err}`);
		}
	};
	const { isPending, isError, data, error } = useQuery({
		queryKey: ["comments"],
		queryFn: getComments,
	});
	console.log(data);

	const handleHideComment = () => {
		setIsHide(!isHide);
	};

	const handle2CHide = (commentId: number) => {
		setEditCommentId(commentId);
		setIs2CHide(!is2CHide);
	};

	if (isPending) return <span>Loading...</span>;
	if (isError) return <span>Error: {error.message}</span>;

	return (
		<div className="py-5 ">
			{/* 댓글 등록 파트  */}
			<EditComment />
			{/* 댓글 내용 파트 */}
			<div className="py-3 mt-10 border-y-2 border-LIGHT_GRAY_COLOR">
				{data &&
					data.map((comment: CommentTypes) => (
						<div key={comment.commentId}>
							<div
								key={`comment-actions-${comment.commentId}`}
								className="flex flex-row justify-between px-2 py-2 "
							>
								<img
									src={Temp}
									alt="userImage"
									className="rounded-full w-14 h-14"
								/>
								<div className="flex-1 w-9/12 ml-3 text-BASIC_BLACK">
									<div className="text-lg font-semibold">
										{comment.writerNickname}
									</div>
									<div className="">{comment.content}</div>
								</div>
								<div className="flex flex-row ">
									<div className="mx-3 text-sm text-DARK_GRAY_COLOR">
										{comment.createdAt}
									</div>
									<AmendBtn />
									<DeleteBtn />
								</div>
							</div>
							{/* 대댓글 - 숨김- */}
							<div className="flex flex-row my-3">
								{comment.children.length !== 0 ? (
									<HideComment
										isHide={isHide}
										onClick={handleHideComment}
										isLength={isLength}
									/>
								) : (
									<></>
								)}
								<button
									key={`comment-button-${comment.commentId}`}
									className="ml-5 text-sm text-LIGHT_GRAY_COLOR hover:text-ETC_COLOR pointer-cursor"
									onClick={() => handle2CHide(comment.commentId)}
								>
									{is2CHide && editCommitId === comment.commentId
										? "댓글 취소"
										: "댓글 쓰기"}
								</button>
							</div>

							{/* 대댓글 */}
							{isHide ? (
								<div className="ml-10 bg-LINE_POINT_COLOR ">
									{comment.children.length !== 0 &&
										comment.children.map((el: CommentReTypes) => (
											<div
												key={el.commentId}
												className="flex flex-row justify-between px-2 py-2 my-1 border-b border-b-LIGHT_GRAY_COLOR"
											>
												<ArrowComment width={"25px"} height={"25px"} />
												<img
													src={Temp}
													alt="userImage"
													className="ml-3 rounded-full w-14 h-14"
												/>
												<div className="flex-1 w-9/12 ml-3 text-BASIC_BLACK">
													<div className="text-lg font-semibold">
														{el.writeId}
													</div>
													<div className="">{el.content}</div>
												</div>
												<div className="flex flex-row ">
													<div className="mx-3 text-sm text-DARK_GRAY_COLOR">
														{el.createdAt}
													</div>
													<AmendBtn />
													<DeleteBtn />
												</div>
											</div>
										))}
								</div>
							) : (
								<></>
							)}

							{/* 댓글 등록 파트  */}
							{is2CHide && editCommitId === comment.commentId ? (
								<EditComment />
							) : (
								<></>
							)}
						</div>
					))}
			</div>
		</div>
	);
};

export default Comment;
