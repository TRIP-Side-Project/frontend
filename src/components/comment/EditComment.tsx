import { useState } from "react";
import axios from "axios";

import Temp2 from "@/assets/img/seeallareas.png";
import Button, { btnAttributes } from "@/common/button/Button";

export interface ParentInfo {
	// articleId: number;
	// parentId: number | null;
	//  - null이면 오리진 , - number이면 대댓글
	// commentId: number;
	parentInfo: [number, number | null, number | null];
	editData?: string;
	isEditMode?: boolean;
}

const EditComment = ({ parentInfo, editData, isEditMode }: ParentInfo) => {
	const [isComment, setIsComment] = useState(editData ? editData : "");
	const BASE_URL = import.meta.env.VITE_BASE_URL;
	const ACCESS_TOKEN = window.localStorage.getItem("access_token");
	const tempLogin = true; //임시 전역 로그인 상태
	console.log(parentInfo[0], parentInfo[1], parentInfo[2]);
	console.log(editData);
	console.log(isComment);

	//새 댓글 등록하는 함수
	const sendNewComment = async () => {
		try {
			axios.post(
				`${BASE_URL}/api/comments`,
				{
					articleId: parentInfo[0],
					parentId: parentInfo[1],
					content: isComment,
				},
				{
					headers: {
						"Content-Type": "application/json",
						accessToken: `Bearer ${ACCESS_TOKEN}`,
					},
				},
			);
			console.log("새 댓글 등록 기능 작동!");
			console.log(`등록 : ${isComment}`);
			setIsComment("");
		} catch (err) {
			throw new Error(`Err ${err}`);
		}
	};

	//댓글 수정 전달하는 함수
	const amendComment = async () => {
		try {
			axios.patch(
				`${BASE_URL}/api/comments/${parentInfo[2]}`,
				{ content: isComment },
				{
					headers: {
						"Content-Type": "application/json",
						accessToken: `Bearer ${ACCESS_TOKEN}`,
					},
				},
			);
			console.log("댓글 수정하는 기능 작동!");
			console.log(`수정 : ${isComment}`);
			//페이지 리랜덜이 확인 필요
		} catch (err) {
			throw new Error(`댓글 수정 버튼 에러 ${err}`);
		}
	};

	//버튼에 필요한 props
	const btnInfo: btnAttributes = {
		text: "등록하기",
		type: "square",
		width: "172px",
		position: "end",

		isLogin: tempLogin,
		loginBtnType: true,
		onClick: isEditMode ? amendComment : sendNewComment,
	};

	return (
		<div className="flex flex-row items-center justify-between flex-1 h-32 px-2 py-5 my-2 border-2 rounded-lg border-MAIN_COLOR">
			<img src={Temp2} alt="userImage" className="rounded-full w-14 h-14" />

			<form className="flex items-center justify-center flex-1 h-full my-2 ml-3">
				<textarea
					name="comment"
					className="w-full h-full px-2 py-2 min-h-18 bg-zinc-100"
					value={isComment}
					placeholder={"댓글을 등록 해 주세요."}
					onChange={(e) => setIsComment(e.target.value)}
				/>
			</form>
			<Button btnInfo={btnInfo} />
		</div>
	);
};

export default EditComment;
