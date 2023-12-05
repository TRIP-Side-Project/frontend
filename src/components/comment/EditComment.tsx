import { useState } from "react";

import Temp2 from "@/assets/img/seeallareas.png";
import Button, { btnAttributes } from "@/common/button/Button";

const EditComment = () => {
	const [isComment, setIsComment] = useState(
		"댓글을 작성하고 있는 상황입니다. ",
	);
	const btnInfo: btnAttributes = {
		text: "등록하기",
		type: "square",
		width: "172px",
		position: "end",
	};

	return (
		<div className="flex flex-row items-center justify-between h-32 px-2 py-5 my-2 border-2 rounded-lg border-MAIN_COLOR">
			<img src={Temp2} alt="userImage" className="rounded-full w-14 h-14" />

			<form className="flex items-center justify-center flex-1 h-full my-2 ml-3">
				<textarea
					name="comment"
					className="w-full h-full px-2 py-2 min-h-18 bg-zinc-100"
					value={isComment}
					onChange={(e) => setIsComment(e.target.value)}
				/>
			</form>
			<Button btnInfo={btnInfo} />
		</div>
	);
};

export default EditComment;
