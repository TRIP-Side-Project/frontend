import HotItem from "@/components/cardItems/HotItem";
import ForumItem from "@/components/forumItems/ForumItem";
import Search from "@/components/search/Search";

const Forum = () => {
	return (
		<div className="flex flex-col text-BASIC_BLACK max-w-[1200px]">
			{/* 상단 인기 여행 아이템 섹션 */}
			<div className="my-5 text-3xl font-bold">여행 후기</div>
			<div className="grid grid-cols-3 m-auto gap-x-36">
				{Array.from(Array(3), (_, index) => (
					<HotItem key={index} />
				))}
			</div>

			{/* 게시판 목록 및 검색 창 섹션 */}
			<div className="flex flex-col mt-10">
				<Search />
				<div className="">
					<div className="flex flex-row justify-between my-3 text-LIGHT_GRAY_COLOR">
						<div className="divide-x divide-solid divide-BASIC_BLACK">
							<button className="pr-3">에디터 추천</button>
							<button className="px-3">여행 후기</button>
						</div>
						<div className="divide-x divide-solidv divide-BASIC_BLACK">
							<button className="px-3">좋아요 순</button>
							<button className="pl-3">최신 순</button>
						</div>
					</div>
					<ul className="flex flex-row justify-between w-full py-1 text-sm font-semibold text-BASIC_BLACK bg-MAIN_COLOR">
						<li className="text-center basis-1/6">카테고리</li>
						<li className="px-3 basis-3/6">제목</li>
						<li className="basis-1/6">작성자</li>
						<li className="basis-1/6">작성일</li>
						<li className="basis-1/6">조회수</li>
						<li className="basis-1/6">좋아요</li>
					</ul>
					{Array.from(Array(8), (_, index) => (
						<ForumItem key={index} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Forum;