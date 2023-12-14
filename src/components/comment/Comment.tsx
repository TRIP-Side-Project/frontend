/* eslint-disable no-mixed-spaces-and-tabs */
import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import EditComment from "./EditComment";
import CommentItem from "./CommentItem";

import ArrowComment from "@/assets/svg/ArrowComment";

export interface CommentReTypes {
	articleId: number;
	children: null;
	commentId: number;
	content: string;
	createdAt: string;
	parentId: number;
	writerId: number;
	writerNickname: string;
}

export interface CommentTypes {
	articleId: number;
	children: CommentReTypes[] | null;
	commentId: number;
	content: string;
	createdAt: string;
	parentId: null | number;
	writerId: number;
	writerNickname: string;
}

const Comment = () => {
	const [isHide, setIsHide] = useState<boolean>(false);
	//props로 articleId 넘겨 받아야 함
	const TarticleId = 1;

	//대댓글 숨김 관리 -> Props -> CommentItem
	const handleHideComment = () => {
		setIsHide(!isHide);
	};

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

	//중복 데이터 메모이제이션
	const memoizedData = useMemo(() => data, [data]);

	if (isPending)
		return (
			<span className="h-full mx-auto mt-5 text-xl font-semibol">
				데이터를 불러오는 중입니다. 잠시만요!
			</span>
		);
	if (isError) return <span>Error: {error.message}</span>;

	return (
		<div className="py-5 ">
			{/* 새 댓글 등록 파트  */}
			<EditComment parentInfo={[TarticleId, null, null]} />
			{/* 댓글 내용 파트 */}
			<div className="py-3 mt-10 border-y-2 border-LIGHT_GRAY_COLOR">
				{memoizedData &&
					memoizedData.map((comment: CommentTypes) => (
						<>
							<CommentItem
								datas={comment}
								key={comment.commentId}
								isHide={isHide}
								setIsHide={handleHideComment}
								type={"origin"}
							/>
							{isHide && comment.children !== null
								? comment.children.map((childComment: CommentTypes) => (
										<div
											key={`child-comment-${childComment.commentId}`}
											className="flex flex-row justify-between px-2 ml-10 "
										>
											<ArrowComment width={"25px"} height={"25px"} />
											<CommentItem datas={childComment} type={"child"} />
										</div>
								  ))
								: null}
						</>
					))}
			</div>
		</div>
	);
};

export default Comment;
