// const [isHide, setIsHide] = useState(false);
// const [is2CHide, setIs2CHide] = useState(false);
// const [editCommitId, setEditCommentId] = useState<number | null>(null);

// const handleHideComment = () => {
// 	setIsHide(!isHide);
// };

// const handle2CHide = (commentId: number) => {
// 	setEditCommentId(commentId);
// 	setIs2CHide(!is2CHide);
// };

{
	/* 대댓글 - 숨김-
			<div className="flex flex-row my-3 bg-yellow-300">
				{datas.children.length !== 0 ? (
					<HideComment
						isHide={isHide}
						onClick={handleHideComment}
						isLength={datas.children.length}
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
			</div> */
}

// <div key={comment.commentId}>

{
	/* <div
								key={`comment-actions-${comment.commentId}`}
								className="flex flex-row justify-between px-2 py-2 bg-yellow-200"
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
									<AmendBtn
										onClick={handleAmend}
										parentInfo={[
											comment.articleId,
											comment.parentId,
											comment.commentId,
										]}
									/>
									<DeleteBtn commentId={comment.commentId} />
								</div>
							</div> */
}

{
	/* 대댓글 - 숨김-
							<div className="flex flex-row my-3 bg-yellow-300">
								{comment.children.length !== 0 ? (
									<HideComment
										isHide={isHide}
										onClick={handleHideComment}
										isLength={comment.children.length}
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
							</div> */
}

{
	/* 대댓글 */
}
{
	/* {isHide ? (
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
													<AmendBtn
														onClick={handleAmend}
														parentInfo={[
															el.articleId,
															el.parentId,
															el.commentId,
														]}
													/>
													<DeleteBtn commentId={el.commentId} />
												</div>
											</div>
										))}
								</div>
							) : (
								<></>
							)} */
}

{
	/* 댓글 등록 파트 
							{is2CHide && editCommitId === comment.commentId ? (
								<EditComment
									parentInfo={[
										comment.articleId,
										comment.parentId,
										comment.commentId,
									]}
								/>
							) : (
								<></>
							)} */
}
// </div>
