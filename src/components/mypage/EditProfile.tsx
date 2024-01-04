import MyPageModal from "@/components/modal/MypageModal";
import { useState } from "react";
// import Temp from "@/assets/img/temp.png";
import Setting from "@/assets/svg/Setting";
import { MyDataProps } from "@/types/myProfile";
import { myPageSelector } from "@/store/mypageState";
import { useSetRecoilState } from "recoil";
import Pencil from "@/assets/svg/Pencil";

const EditProfile = ({ data }: MyDataProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const [activeBtn, setActiveBtn] = useState("likeMerchan");
	// const [selectedTab, setSelectedTab] = useRecoilState(myPageSelector);
	const setSelectedTab = useSetRecoilState(myPageSelector);

	const handleClick = () => {
		setIsOpen(!isOpen);
		// console.log("클릭");
	};

	//마이프로필 관심 상품 선택
	const handleMineItems = (item: string) => {
		setActiveBtn(item);
	};

	//style
	const summaryTitle =
		"mr-1.5 sm:mx-5 text-[11px] sm:text-sm rounded-lg bg-zinc-200 p-1 sm:bg-inherit";
	const navWrapStyle = "relative sm:mr-10 inline-block";
	const clickStyle =
		"absolute w-full left-0 top-4 p-1 h-2 opacity-75 bg-[#A3CCA2] ";

	return (
		<>
			<button
				onClick={handleClick}
				className="flex flex-row px-2 py-1 mt-5 text-xs font-semibold text-center border rounded-lg w-fit sm:hidden bg-BASIC_WHITE border-LIGHT_GRAY_COLOR hover:bg-LINE_POINT_COLOR"
			>
				<p className="mr-2 dark:text-BASIC_BLACK">프로필 수정</p>
				<Setting width={"15px"} height={"15px"} />
			</button>
			<div className="p-3 mt-3 font-bold border sm:mt-10 border-BASIC_BLACK dark:border-BASIC_WHITE">
				<div className="flex flex-row justify-between">
					<div>
						{data.intro === null ? (
							<span className="flex flex-row items-center text-sm font-light text-zinc-500">
								<Pencil fillColor={"#71717A"} width={"15px"} height={"15px"} />
								자기소개 글을 작성해주세요.
							</span>
						) : (
							data.intro
						)}
					</div>

					<button
						onClick={handleClick}
						className="flex-row hidden p-1 px-4 py-1 text-sm font-semibold border rounded-lg sm:flex bg-BASIC_WHITE border-LIGHT_GRAY_COLOR hover:bg-LINE_POINT_COLOR"
					>
						<p className="mr-2 dark:text-BASIC_BLACK">프로필 수정</p>
						<Setting width={"20px"} height={"20px"} />
					</button>
				</div>
				<div className="flex flex-row items-center justify-start my-3 text-center">
					<img
						src={data.profileImg}
						className="w-20 h-20 mr-3 rounded-full sm:w-32 sm:h-32 "
					/>
					<div className={summaryTitle}>
						<div>작성 게시글</div>
						<div>{data.articleCount}</div>
					</div>
					<div className={summaryTitle}>
						<div>작성 댓글</div>
						<div>{data.commentCount}</div>
					</div>
					<div className={summaryTitle}>
						<div>보관 상품</div>
						<div>{data.likeItemCount}</div>
					</div>
					<div className={summaryTitle}>
						<div>보관 게시글</div>
						<div>{data.likeArticleCount}</div>
					</div>
				</div>
				<div className="flex flex-row justify-between sm:block">
					<button
						className={navWrapStyle}
						onClick={() => {
							handleMineItems("likeMerchan");
							setSelectedTab("likeMerchan");
						}}
					>
						<p className="relative z-20 ">관심 상품</p>
						<span
							className={activeBtn === "likeMerchan" ? clickStyle : ""}
						></span>
					</button>
					<button
						className={navWrapStyle}
						onClick={() => {
							handleMineItems("wroteForum");
							setSelectedTab("wroteForum");
						}}
					>
						<p className="relative z-20 ">작성 글</p>
						<span
							className={activeBtn === "wroteForum" ? clickStyle : ""}
						></span>
					</button>
					<button
						className={navWrapStyle}
						onClick={() => {
							handleMineItems("wroteComment");
							setSelectedTab("wroteComment");
						}}
					>
						<p className="relative z-20 ">작성 댓글</p>
						<span
							className={activeBtn === "wroteComment" ? clickStyle : ""}
						></span>
					</button>
					<button
						className={navWrapStyle}
						onClick={() => {
							handleMineItems("likeForum");
							setSelectedTab("likeForum");
						}}
					>
						<p className="relative z-20 ">관심 게시글</p>
						<span
							className={activeBtn === "likeForum" ? clickStyle : ""}
						></span>
					</button>
				</div>
			</div>

			{isOpen && (
				<MyPageModal isClick={handleClick} data={data} setIsOpen={setIsOpen} />
			)}
		</>
	);
};

export default EditProfile;
