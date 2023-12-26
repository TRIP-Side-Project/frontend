import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

import Pagenation from "@/components/Pagination";
import Button, { btnAttributes } from "@/common/button/Button";
// import HotItem from "@/components/cardItems/HotItem";
import ForumItem, { ForumList } from "@/components/forumItems/ForumItem";
import Search from "@/components/search/Search";
import FindList from "@/assets/svg/FindList";
import { useState } from "react";
import Loading from "@/components/Loading/Loading";
import ErrState from "@/components/Loading/ErrState";

const Forum = () => {
	const BASE_URL = import.meta.env.VITE_BASE_URL;
	const navigate = useNavigate();
	const [activeBtn, setActiveBtn] = useState<number>(1);
	const [search, setSearch] = useState("");
	const [filter, setFilter] = useState("");
	const [category, setCategory] = useState<"EDITOR" | "MEMBER">("MEMBER");

	const navigateNewForum = () => {
		navigate("/forum/edit");
	};

	const btnInfo: btnAttributes = {
		width: "172px",
		position: "right",
		text: "새 글 등록하기",
		type: "square",
		isLogin: window.localStorage.getItem("access_token") ? true : false,
		loginBtnType: true,
		onClick: () => navigateNewForum(),
	};

	//단순 페이지 조회
	const getForumLists = async () => {
		try {
			const response = await axios.get(
				search
					? `${BASE_URL}/api/articles?title=${search}`
					: `${BASE_URL}/api/articles?page=${activeBtn}${filter}`,
			); //category 부분은 어떻게 연계되는지 확인 필요 12/25 혜진 &category=MEMBER&sortCode=2??
			return response.data;
		} catch (err) {
			throw new Error(`게시판 목록 에러 ${err}`);
		}
	};

	const { isPending, isError, data, error } = useQuery({
		queryKey: ["forumLists", activeBtn, search],
		queryFn: getForumLists,
	});

	if (isPending) return <Loading />;
	if (isError) return <ErrState err={error.message} />;
	console.log(data);
	//좋아요 | 인기순 필터링
	const clickStyle = "text-MAIN_COLOR font-semibold";
	const handleFilterClick = (sort: number) => {
		// console.log(sort);
		if (sort === 0) {
			setFilter("");
		} else {
			setFilter(`&sortCode=${sort}`);
		}
	};
	// console.log(filter);
	//에디터 | 여행후기 카테고리 필터링
	const handleCategoryClick = (sort: "MEMBER" | "EDITOR") => {
		setCategory(sort);
	};

	return (
		<div className="flex flex-col w-full px-2 text-BASIC_BLACK dark:bg-BASIC_BLACK dark:text-BASIC_WHITE">
			{/* 상단 인기 여행 아이템 섹션 */}
			<div className="my-5 text-3xl font-bold">여행 후기</div>
			<div className="grid grid-cols-3 m-auto gap-x-36">
				{/* {Array.from(Array(3), (_, index) => (
					<Link to={"/forum/detail"}>
						<HotItem key={`hot-item-${index}`} />
					</Link>
				))} */}
			</div>

			{/* 게시판 목록 및 검색 창 섹션 */}
			<div className="flex flex-col mt-10">
				<div className="mx-auto my-5">
					<Search setSearch={setSearch} />
				</div>
				<div className="">
					<div className="flex flex-row justify-between my-3 text-LIGHT_GRAY_COLOR">
						<div className="divide-x divide-solid divide-BASIC_BLACK">
							<button
								className={`px-3 text-esm sm:text-base ${
									category === "EDITOR" ? clickStyle : ""
								}`}
								onClick={() => handleCategoryClick("EDITOR")}
							>
								에디터 추천
							</button>
							<button
								className={`px-3 text-esm sm:text-base ${
									category === "MEMBER" ? clickStyle : ""
								}`}
								onClick={() => handleCategoryClick("MEMBER")}
							>
								여행 후기
							</button>
						</div>
						<div className="divide-x divide-solidv divide-BASIC_BLACK">
							<button
								className={`px-3 text-esm sm:text-base ${
									filter === "&sortCode=2" ? clickStyle : ""
								}`}
								onClick={() => handleFilterClick(2)}
							>
								인기 높은 순
							</button>
							<button
								className={`px-3 text-esm sm:text-base ${
									filter === "&sortCode=3" ? clickStyle : ""
								}`}
								onClick={() => handleFilterClick(3)}
							>
								인기 낮은 순
							</button>
							<button
								className={`px-3 text-esm sm:text-base ${
									filter === "" ? clickStyle : ""
								}`}
								onClick={() => handleFilterClick(0)}
							>
								최신 순
							</button>
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
					{data.articles ? (
						<div className="flex flex-col min-h-fit bg-ITEM_BG_COLOR">
							{data.articles.map((list: ForumList) => (
								<Link
									to={`/forum/detail/${list.articleId}`}
									key={`link-${list.articleId}`}
								>
									<ForumItem key={list.articleId} data={list} />
								</Link>
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
				<Pagenation
					pageInfo={data.pagination}
					activeBtn={activeBtn}
					setActiveBtn={setActiveBtn}
				/>
			</div>
		</div>
	);
};

export default Forum;
