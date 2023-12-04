// import MyPageModal from "@/components/modal/MypageModal";
import BasicModal, { ModalAttributes } from "../modal/BasicModal";
import { useState } from "react";
import Temp from "@/assets/img/temp.png";
import Setting from "@/assets/svg/Setting";

const EditProfile = () => {
	const [isClick, setIsClick] = useState(false);
	const summaryTitle = "mx-5";
	const navWrapStyle = "mr-10";

	const handleClick = () => {
		setIsClick(!isClick);
		// console.log("클릭");
	};

	const modal: ModalAttributes = {
		content: "게시글을 삭제하시겠습니까",
		isClick: handleClick,
	};

	return (
		<>
			<div className="p-3 mt-10 font-bold border border-BASIC_BLACK border_LIGHT_GRAY_COLOR">
				<div className="flex flex-row justify-between">
					<div>여행을 좋아하는 에디터 아리입니다.</div>

					<button
						onClick={handleClick}
						className="flex flex-row px-4 py-1 text-sm font-semibold border rounded-lg bg-BASIC_WHITE border-LIGHT_GRAY_COLOR hover:bg-LINE_POINT_COLOR"
					>
						<p className="mr-2">프로필 수정</p>
						<Setting width={"20px"} height={"20px"} />
					</button>
				</div>
				<div className="flex flex-row items-center justify-start my-3 text-center">
					<img src={Temp} className="w-32 h-32 mr-5 rounded-full" />
					<div className={summaryTitle}>
						<div>게시글</div>
						<div>100</div>
					</div>
					<div className={summaryTitle}>
						<div>게시글</div>
						<div>100</div>
					</div>
					<div className={summaryTitle}>
						<div>게시글</div>
						<div>100</div>
					</div>
				</div>
				<div className="">
					<button className={navWrapStyle}>관심 상품</button>
					<button className={navWrapStyle}>작성 글</button>
					<button className={navWrapStyle}>작성 댓글</button>
					<button className={navWrapStyle}>알림함</button>
				</div>
			</div>

			{/* {isClick && <MyPageModal isClick={handleClick} />} */}
			{isClick && <BasicModal modal={modal} />}
		</>
	);
};

export default EditProfile;
