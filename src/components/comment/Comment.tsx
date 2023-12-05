import { useState } from "react";

import Temp from "@/assets/img/temp.png";
import DeleteBtn from "@/common/button/DeleteBtn";
import AmendBtn from "@/common/button/AmendBtn";
import HideComment from "@/components/comment/HideComment";
import EditComment from "./EditComment";
import ArrowComment from "@/assets/svg/ArrowComment";

const Comment = () => {
	const [isHide, setIsHide] = useState(false);
	const [is2CHide, setIs2CHide] = useState(false);
	// const isWrite2C = is2CHide ? "댓글 취소" : "댓글 쓰기";

	const handleHideComment = () => {
		setIsHide(!isHide);
	};

	const handle2CHide = () => {
		setIs2CHide(!is2CHide);
	};

	return (
		<div className="py-5 ">
			{/* 댓글 등록 파트  */}
			<EditComment />
			{/* 댓글 내용 파트 */}
			<div className="py-3 mt-10 border-y-2 border-LIGHT_GRAY_COLOR">
				<div className="flex flex-row justify-between px-2 py-2 ">
					<img src={Temp} alt="userImage" className="rounded-full w-14 h-14" />
					<div className="flex-1 w-9/12 ml-3 text-BASIC_BLACK">
						<div className="text-lg font-semibold">리랑이</div>
						<div className="">본문 내용 섹션 입니다. 라랄랄라랄랄랄랄ㄹ</div>
					</div>
					<div className="flex flex-row ">
						<div className="mx-3 text-sm text-DARK_GRAY_COLOR">2023.11.24</div>
						<AmendBtn />
						<DeleteBtn />
					</div>
				</div>

				<div className="flex flex-row my-3">
					{isHide ? (
						<HideComment type={"hide"} onClick={handleHideComment} />
					) : (
						<HideComment type={"show"} onClick={handleHideComment} />
					)}
					<button
						className="ml-5 text-sm text-LIGHT_GRAY_COLOR hover:text-ETC_COLOR pointer-cursor"
						onClick={handle2CHide}
					>
						{is2CHide ? "댓글 취소" : "댓글 쓰기"}
					</button>
				</div>
				{/* 대댓글 */}
				{isHide ? (
					<div className="ml-10 bg-LINE_POINT_COLOR ">
						{Array.from(Array(2), (_, idx) => (
							<div
								key={idx}
								className="flex flex-row justify-between px-2 py-2 my-1 border-b border-b-LIGHT_GRAY_COLOR"
							>
								<ArrowComment width={"25px"} height={"25px"} />
								<img
									src={Temp}
									alt="userImage"
									className="ml-3 rounded-full w-14 h-14"
								/>
								<div className="flex-1 w-9/12 ml-3 text-BASIC_BLACK">
									<div className="text-lg font-semibold">리랑이</div>
									<div className="">
										본문 내용 섹션 입니다. 라랄랄라랄랄랄랄ㄹ
									</div>
								</div>
								<div className="flex flex-row ">
									<div className="mx-3 text-sm text-DARK_GRAY_COLOR">
										2023.11.24
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
				{is2CHide ? <EditComment /> : <></>}
			</div>
		</div>
	);
};

export default Comment;
