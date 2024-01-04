import { useEffect, useState } from "react";

import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useRecoilValue } from "recoil";
import { myPageState } from "@/store/mypageState";

import FindList from "@/assets/svg/FindList";
import WroteForum from "../mineItems/WroteForum";
import Likeitem from "../mineItems/LikeItem";
import WroteComment from "../mineItems/WroteComment";
import LikeForum from "../mineItems/LikeForum";
import Loading from "../Loading/Loading";
import ErrState from "../Loading/ErrState";

import {
	LikeForumTypes,
	LikeMerchanTypes,
	MyCommentTypes,
	WroteForumTypes,
} from "@/types/myProfile";

const Mine = () => {
	const BASER_URL = import.meta.env.VITE_BASE_URL;
	const ACCESS_TOKEN = window.localStorage.getItem("access_token");
	const selectedTab = useRecoilValue(myPageState);
	//요청 url 변경
	// const [URL, setURL] = useState(`${BASER_URL}/api/interest-items`);
	//데이터 없을 경우 본문 변경
	const [noDataText, setNoDataText] = useState(
		"가고 싶은 여행 상품을 모아보세요!",
	);
	//Tab 변경에 따른 데이터 컴포넌트
	const [mineContent, setMineContent] = useState();

	const getMineDatas = async () => {
		try {
			let URL;

			switch (selectedTab) {
				case "likeMerchan":
					URL = `${BASER_URL}/api/interest-items`;
					break;
				case "wroteForum":
					URL = `${BASER_URL}/api/articles/me`;
					break;
				case "wroteComment":
					URL = `${BASER_URL}/api/comments/me`;
					break;
				case "likeForum":
					URL = `${BASER_URL}/api/interest-articles/me`;
					break;
			}

			const response = await axios.get(`${URL}`, {
				headers: {
					accessToken: `Bearer ${ACCESS_TOKEN}`,
				},
			});

			const getData = response.data;

			if (selectedTab === "likeMerchan") return getData.itemList;
			if (selectedTab === "wroteForum") return getData.articles;
			if (selectedTab === "wroteComment") return getData.comments;
			if (selectedTab === "likeForum") return getData.articles;
		} catch (err) {
			throw new Error(`마이저장 데이터 파트 ${err}`);
		}
	};

	const { isPending, isError, data, error } = useQuery({
		queryKey: ["mineDatas", selectedTab, URL],
		queryFn: getMineDatas,
	});

	useEffect(() => {
		if (data && selectedTab === "likeMerchan") {
			setNoDataText("가고 싶은 여행 상품을 모아보세요!");
			// setURL(`${BASER_URL}/api/interest-items`);
			setMineContent(
				data.map((el: LikeMerchanTypes, idx: number) => (
					<Likeitem key={idx} data={el} />
				)),
			);
		} else if (data && selectedTab === "wroteForum") {
			setNoDataText("새로운 글을 작성해보세요!");
			// setURL(`${BASER_URL}/api/articles/me`);
			setMineContent(
				data.map((el: WroteForumTypes, idx: number) => (
					<WroteForum key={idx} data={el} />
				)),
			);
		} else if (data && selectedTab === "wroteComment") {
			setNoDataText("새로운 댓글을 작성해보세요!");
			// setURL(`${BASER_URL}/api/comments/me`);
			setMineContent(
				data.map((el: MyCommentTypes, idx: number) => (
					<WroteComment key={idx} data={el} />
				)),
			);
		} else if (data && selectedTab === "likeForum") {
			setNoDataText("재미있는 게시글을 모아보세요!");
			setMineContent(
				data.map((el: LikeForumTypes, idx: number) => (
					<LikeForum key={idx} data={el} />
				)),
			);
			// setURL(`${BASER_URL}/api/interest-articles/me`);
		}
	}, [BASER_URL, data, selectedTab]);

	if (isPending) return <Loading />;
	if (isError) return <ErrState err={error.message} />;

	return (
		<div className="w-full p-2 text-lg font-semibold border sm:text-2xl h-fit border-BASIC_BLACK bg-BASIC_WHITE">
			{data.length === 0 ? (
				<div className="flex flex-col items-center px-10 pt-3 pb-5 sm:pb-10">
					<div className="mt-5 sm:my-10 whitespace-nowrap">{noDataText}</div>
					<FindList width={"100px"} height={"100px"} />
				</div>
			) : (
				<div className="flex flex-col w-full gap-3">{mineContent}</div>
			)}
		</div>
	);
};

export default Mine;
