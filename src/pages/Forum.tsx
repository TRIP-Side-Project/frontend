import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

import Pagenation from "@/components/Pagenation";
import Button, { btnAttributes } from "@/common/button/Button";
import HotItem from "@/components/cardItems/HotItem";
import ForumItem, { ForumList } from "@/components/forumItems/ForumItem";
import Search from "@/components/search/Search";
import FindList from "@/assets/svg/FindList";
import { useMemo } from "react";

const Forum = () => {
	const BASE_URL = import.meta.env.VITE_BASE_URL;
	const navigate = useNavigate();
	//새 글 등록하기 버튼 navigator 연결
	const navigateNewForum = () => {
		navigate("/forum/edit");
	};

	const btnInfo: btnAttributes = {
		width: "172px",
		// height: "50px",
		position: "right",
		text: "새 글 등록하기",
		type: "square",
		isLogin: false,
		loginBtnType: true,
		onClick: () => navigateNewForum,
	};

	const getForumLists = async () => {
		try {
			const response = await axios.get(`${BASE_URL}/api/articles`);
			return response.data;
		} catch (err) {
			throw new Error(`게시판 목록 에러 ${err}`);
		}
	};

	const { isPending, isError, data, error } = useQuery({
		queryKey: ["forumLists"],
		queryFn: getForumLists,
	});

	const memoizedForumData = useMemo(() => data, [data]);
	//console.log(memoizedForumData);

	if (isPending) return <span>데이터를 불러오는 중!</span>;
	if (isError) return <span>Error: {error.message}</span>;

	return (
		<div className="flex flex-col w-full px-2 text-BASIC_BLACK dark:bg-BASIC_BLACK dark:text-BASIC_WHITE">
			{/* 상단 인기 여행 아이템 섹션 */}
			<div className="my-5 text-3xl font-bold">여행 후기</div>
			<div className="grid grid-cols-3 m-auto gap-x-36">
				{Array.from(Array(3), (_, index) => (
					<Link to={"/forum/detail"}>
						<HotItem key={`hot-item-${index}`} />
					</Link>
				))}
			</div>

			{/* 게시판 목록 및 검색 창 섹션 */}
			<div className="flex flex-col mt-10">
				<div className="mx-auto my-5">
					<Search />
				</div>
				<div className="">
					<div className="flex flex-row justify-between my-3 text-LIGHT_GRAY_COLOR">
						<div className="divide-x divide-solid divide-BASIC_BLACK">
							<button className="pr-3 text-esm sm:text-base ">
								에디터 추천
							</button>
							<button className="px-3 text-esm sm:text-base ">여행 후기</button>
						</div>
						<div className="divide-x divide-solidv divide-BASIC_BLACK">
							<button className="px-3 text-esm sm:text-base ">좋아요 순</button>
							<button className="pl-3 text-esm sm:text-base ">최신 순</button>
						</div>
					</div>
					<ul className="flex flex-row justify-between w-full py-1 font-semibold text-esm sm:text-sm text-BASIC_BLACK bg-MAIN_COLOR">
						<li className="text-center basis-1/6">카테고리</li>
						<li className="px-3 basis-3/6">제목</li>
						<li className="basis-1/6">작성자</li>
						<li className="basis-1/6">작성일</li>
						<li className="basis-1/6">조회수</li>
						<li className="basis-1/6">좋아요</li>
					</ul>
					{memoizedForumData.articles.length !== 0 ? (
						<div className="flex flex-col items-center justify-center h-24 bg-ITEM_BG_COLOR">
							{memoizedForumData.articles.map((list: ForumList) => (
								<ForumItem key={list.articleId} data={list} />
							))}
						</div>
					) : (
						<div className="flex items-center justify-center h-56 bg-ITEM_BG_COLOR">
							<FindList width={"90px"} height={"90px"} />
							<div className="text-xl font-bold text-BASIC_BLACK">
								I am not 데이터예요.
							</div>
						</div>
					)}
				</div>
				<Button btnInfo={btnInfo} />
				<Pagenation />
			</div>
		</div>
	);
};

export default Forum;
