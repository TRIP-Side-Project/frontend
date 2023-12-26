import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";

type DeleteCommentTypes = {
	itemId: number;
	type: "comment" | "forum";
};

const DeleteBtn = ({ itemId, type }: DeleteCommentTypes) => {
	const ACCESS_TOLEN = window.localStorage.getItem("access_token");
	const BASE_URL = import.meta.env.VITE_BASE_URL;
	const navigation = useNavigate();

	//댓글 삭제
	const deleteCommentMutation = useMutation({
		mutationFn: () => {
			return axios.delete(`${BASE_URL}/api/comments/${itemId}`, {
				headers: {
					"Content-Type": "application/json",
					accessToken: `Bearer ${ACCESS_TOLEN}`, //쿠키나 전역에서 가져올 예정
				},
			});
		},
	});

	//게시글 삭제
	const deleteForumMutation = useMutation({
		mutationFn: () => {
			return axios.delete(`${BASE_URL}/api/articles/${itemId}`, {
				headers: {
					"Content-Type": "application/json",
					accessToken: `Bearer ${ACCESS_TOLEN}`, //쿠키나 전역에서 가져올 예정
				},
			});
		},
	});

	//댓글 삭제 버튼
	const handleDeleteComment = async () => {
		try {
			await deleteCommentMutation.mutateAsync();
			console.log(`댓글 삭제 버튼 작동 ${itemId}`);
		} catch (error) {
			throw new Error(`댓글 삭제 파트 ${error}`);
		}
	};

	//게시글 삭제 버튼
	const handleDeleteForum = async () => {
		try {
			await deleteForumMutation.mutateAsync();
			console.log("게시글 삭제 버튼 작동");
			navigation("/forum");
		} catch (error) {
			throw new Error(`게시글 삭제 파트 ${error}`);
		}
	};

	return (
		<div
			className="mx-2 text-sm cursor-pointer text-DARK_GRAY_COLOR"
			onClick={type === "comment" ? handleDeleteComment : handleDeleteForum}
		>
			삭제
		</div>
	);
};

export default DeleteBtn;
