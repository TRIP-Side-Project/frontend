import { useMutation } from "@tanstack/react-query";
import axios from "axios";

type DeleteCommentTypes = {
	commentId: number;
};

const DeleteBtn = ({ commentId }: DeleteCommentTypes) => {
	const ACCESS_TOLEN = window.localStorage.getItem("access_token");
	const BASE_URL = import.meta.env.VITE_BASE_URL;
	const mutation = useMutation({
		mutationFn: () => {
			return axios.delete(`${BASE_URL}/api/comments/${commentId}`, {
				headers: {
					"Content-Type": "application/json",
					accessToken: `Bearer ${ACCESS_TOLEN}`, //쿠키나 전역에서 가져올 예정
				},
			});
		},
	});

	//댓글 삭제 버튼
	const handleDelete = async () => {
		try {
			await mutation.mutateAsync();
			console.log(`댓글 삭제 버튼 작덩 ${commentId}`);
		} catch (error) {
			throw new Error(`댓글 삭제 파트 ${error}`);
		}
	};

	return (
		<div
			className="mx-2 text-sm cursor-pointer text-DARK_GRAY_COLOR"
			onClick={handleDelete}
		>
			삭제
		</div>
	);
};

export default DeleteBtn;
