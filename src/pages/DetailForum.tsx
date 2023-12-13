import Heart from "@/assets/svg/Heart";
import Category from "@/common/category/Category";
import Comment from "@/components/comment/Comment";
import { useNavigate } from "react-router-dom";

const DetailForum = () => {
	const navigator = useNavigate();
	const backButton = () => {
		navigator(-1);
	};
	return (
		// <div className="flex flex-col lg:min-w-[1200px] md:min-w-[900px] text-BASIC_BLACK mb-20">
		<div className="flex flex-col w-full mb-20 text-BASIC_BLACK bg-BASIC_WHITE">
			<div className="flex flex-row justify-between py-2 mt-20 border-b border-BASIC_BLACK">
				<Category isEditor={"editor"} />

				<div className="flex flex-row divide-x divide-LIGHT_GRAY_COLOR">
					<p className="px-5">MD.Ari</p>
					<p className="px-5">2023.11.24</p>
					<p className="pl-5">조회123</p>
				</div>
			</div>
			<div className="flex flex-row items-center justify-between py-2">
				<div
					className="cursor-pointer font-sm text-BASIC_BLACK hover:font-bold"
					onClick={backButton}
				>
					여행 후기 &gt; 에디터 소개하는 강릉 여행
				</div>
				<div className="flex flex-row items-center">
					<Heart width={"42px"} height={"42px"} />
					<span className="ml-2 text-base font-semibold text-BASIC_BLACK">
						1004
					</span>
				</div>
			</div>
			<div className="pt-2 pb-10 border-b-2 bg-LINE_POINT_COLOR h-96 border-BASIC_BLACK">
				본문 내용 입니다.
			</div>
			<Comment />
		</div>
	);
};

export default DetailForum;
