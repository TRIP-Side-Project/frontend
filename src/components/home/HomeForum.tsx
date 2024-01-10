import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import ProductCardItems from "@/components/productCardItems/ProductCardItems";
import ArrowRight from "@/assets/svg/ArrowRight";
import ErrState from "../Loading/ErrState";
import { homeForumTag } from "@/store/homeForumTagState";
import { useRecoilState } from "recoil";
import { ProductInfo } from "@/pages/ProductList";
// import Loading from "../Loading/Loading";

interface TextNode {
	text: string;
	type: "text";
}

interface ElementNode {
	children: Node[];
	type: string;
}

type Node = TextNode | ElementNode;

interface ForumItemTypes {
	articleId: number;
	content: string;
	cretedAt: string;
	interestArticleId: string;
	likeCount: number;
	tags: string[];
	title: string;
	viewcount: number;
	writerId: number;
	writerIntro: string;
	writerNickname: string;
	writerProfileImg: string;
	writerRole: string;
}

interface RecommendProductTypes {
	recommendProduct: ProductInfo[] | undefined;
}

const HomeForum = ({ recommendProduct }: RecommendProductTypes) => {
	const sectionTitle = "text-3xl text-center mb-14 font-bold";
	// const BASE_URL = import.meta.env.VITE_BASE_URL;
	const [hotForum, setHorForum] = useState<number | null>(null);
	const [homeData, setHomeData] = useState<ForumItemTypes>();
	const [content, setContent] = useState("");
	const [, setRelatedTag] = useRecoilState(homeForumTag);
	const forumRelatedDatas = [recommendProduct?.[2], recommendProduct?.[3]];

	const getHotForumData = async () => {
		try {
			console.log("1번 목록 조회 ");
			const response = await axios.get(
				`https://server.triptrip.site/api/articles?sortCode=2`,
			);
			const hotRes = response.data.articles[0];
			setHorForum(hotRes.articleId);
			return hotRes;
			// setHorForum(hotRes.articleId);
		} catch (err) {
			throw new Error(`홈 - 여행 후기 에러 ${err}`);
		}
	};

	const { isError, data, error } = useQuery({
		queryKey: ["hotForum"],
		queryFn: getHotForumData,
	});

	const getHotDetailData = async (articleId: number) => {
		try {
			const response = await axios.get(
				`https://server.triptrip.site/api/articles/${articleId}`,
			);
			console.log("2번 상세 조회");
			return response.data;
		} catch (Err) {
			throw new Error(`홈 - 여행 상세 데이터 에러 ${Err}`);
		}
	};

	useEffect(() => {
		const extractTextNode = (node: Node, texts: string[] = []): string[] => {
			if (node.type === "text") {
				texts.push((node as TextNode).text);
			}

			if ("children" in node && node.children) {
				node.children.forEach((child) => extractTextNode(child, texts));
			}

			return texts;
		};

		if (hotForum && data) {
			const forumData = async () => {
				try {
					const res = await getHotDetailData(data.articleId);
					setHomeData(res);
					setRelatedTag(res.tags);
					const json = JSON.parse(res.content);
					const textNode = extractTextNode(json.root).join("");
					setContent(textNode);
				} catch (Err) {
					console.log("본문 포매팅 중 에러 ", Err);
				}
			};

			forumData();
		}
	}, [content, data, hotForum, setRelatedTag]);

	if (isError) return <ErrState err={error.message} />;
	// if (isPending) return <Loading />;

	return (
		<div className="flex flex-col justify-between w-full px-16 pt-10 pb-16 mb-10 bg-LINE_POINT_COLOR dark:bg-LINE_POINT_COLOR">
			<h1 className={sectionTitle}>여행후기</h1>
			<div className="md:flex md:justify-between">
				<div className="w-full md:w-2/5">
					<h2 className="text-2xl font-bold">{homeData && homeData.title}</h2>
					<div className="w-full h-0 my-5 border border-BASIC_BLACK" />
					<p className="text-xl">{content && content.slice(0, 40)}</p>
					<div className="my-2 text-base text-LIGHT_GRAY_COLOR">
						{homeData &&
							homeData.tags.map((tag: string, idx: number) => (
								<span key={idx} className="mr-2">
									# {tag}
								</span>
							))}
					</div>
					<div className="flex justify-end mt-5 text-base cursor-pointer md:justify-start text-LIGHT_GRAY_COLOR">
						<Link to={`/forum/detail/${data && data.articleId}`}>
							<p>자세히보기</p>
						</Link>
						<ArrowRight fillColor="#aaaaaa" width="15" height="24" />
					</div>
				</div>
				<div className="mt-10 md:ml-10 flex justify-center md:justify-between md:w-[500px] md:gap-2">
					{innerWidth > 768 && (
						<>
							{forumRelatedDatas &&
								forumRelatedDatas.map(
									(item, idx) =>
										item && (
											<ProductCardItems key={idx} item={item as ProductInfo} />
										),
								)}
						</>
					)}
					{innerWidth <= 768 && forumRelatedDatas && forumRelatedDatas[2] && (
						<ProductCardItems
							item={forumRelatedDatas && (forumRelatedDatas[2] as ProductInfo)}
						/>
					)}
				</div>
			</div>
		</div>
	);
};

export default HomeForum;
