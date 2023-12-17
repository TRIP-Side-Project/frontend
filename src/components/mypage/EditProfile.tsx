import MyPageModal from "@/components/modal/MypageModal";
import { useState } from "react";
import Temp from "@/assets/img/temp.png";
import Setting from "@/assets/svg/Setting";

const EditProfile = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [activeBtn, setActiveBtn] = useState("merchan");
	const summaryTitle = "mx-5";
	const navWrapStyle = "relative mr-10 inline-block";
	const clickStyle =
		"absolute w-full left-0 top-4 p-1 h-2 opacity-75 bg-[#A3CCA2] ";

	const handleClick = () => {
		setIsOpen(!isOpen);
		// console.log("클릭");
	};

	//마이프로필 관심 상품 선택
	const handleMineItems = (item: string) => {
		setActiveBtn(item);
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
					<button
						className={navWrapStyle}
						onClick={() => handleMineItems("merchan")}
					>
						<p className="relative z-20 ">관심 상품</p>
						<span className={activeBtn === "merchan" ? clickStyle : ""}></span>
					</button>
					<button
						className={navWrapStyle}
						onClick={() => handleMineItems("forum")}
					>
						<p className="relative z-20 ">작성 글</p>
						<span className={activeBtn === "forum" ? clickStyle : ""}></span>
					</button>
					<button
						className={navWrapStyle}
						onClick={() => handleMineItems("comment")}
					>
						<p className="relative z-20 ">작성 댓글</p>
						<span className={activeBtn === "comment" ? clickStyle : ""}></span>
					</button>
					<button
						className={navWrapStyle}
						onClick={() => handleMineItems("alram")}
					>
						<p className="relative z-20 ">알림함</p>
						<span className={activeBtn === "alram" ? clickStyle : ""}></span>
					</button>
				</div>
			</div>

			{isOpen && <MyPageModal isClick={handleClick} />}
		</>
	);
};

export default EditProfile;
