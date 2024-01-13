import RecommendProductItems from "@/components/recommendProductItems/RecommendProductItems";

import jeju1 from "@/assets/img/jeju1.png";
import DestinationSvg from "@/assets/svg/Destination";
import ArrowRight from "@/assets/svg/ArrowRight";
import allTravelImg from "@/assets/img/travel4.png";
import { useEffect, useState } from "react";

import HomeForum from "@/components/home/HomeForum";
import ThemeTravel from "@/components/home/ThemeTravel";
import RegionTravel from "@/components/home/RegionTravel";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

import { homeForumTag } from "@/store/homeForumTagState";
import { ProductInfo } from "./ProductList";
import { useNavigate } from "react-router-dom";
import { menuSelector } from "@/store/menuState";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { tempTags } from "@/store/tagState";
import _ from "lodash";

export default function Home() {
	const sectionTitle = "text-3xl text-center mb-14 font-bold";
	const BASE_URL = import.meta.env.VITE_BASE_URL;
	const forumTags = useRecoilValue(homeForumTag);
	const navigate = useNavigate();
	const setCode = useSetRecoilState(menuSelector);
	const [isBtnOpen, setIsBtnOpen] = useState(false);
	const [homeSearch, setHomeSearch] = useState("서울");
	const setRegion = useSetRecoilState(menuSelector);
	const tagLists = [...tempTags];

	// 동적 화면 사이즈 구하기
	// 근데 바뀔 때마다 함수가 돌아가서 성능면에서 개선이 필요해 보임.
	// 전역에서 관리해야할듯
	const [innerWidth, setInnerWidth] = useState(window.innerWidth);
	//Debounce 활용하여 리사이즈 헨들러 최적화
	const resizeListener = _.debounce(() => {
		setInnerWidth(window.innerWidth);
		// console.log(
		// 	`innerWidth updated: ${innerWidth} at ${new Date().toISOString()}`,
		// );
	}, 100);
	//100ms 동안 디바운스 시간

	useEffect(() => {
		window.addEventListener("resize", resizeListener);

		return () => {
			resizeListener.cancel();
			window.removeEventListener("resize", resizeListener);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	// console.log("innerWidth", innerWidth);

	const recommendProduct = async () => {
		try {
			const res = await axios.get(`${BASE_URL}/api/items?sortCode=2`);
			const num1 = Math.floor(Math.random() * 8);
			let num2;
			do {
				num2 = Math.floor(Math.random() * 9);
			} while (num1 === num2);
			const recommendData = res.data.itemList;
			const forums = recommendData.filter((el: ProductInfo) => {
				if (el.title && el.title.includes(forumTags[0])) {
					return el;
				}
			});
			return [recommendData[num1], recommendData[num2], forums[0], forums[1]];
		} catch (Err) {
			throw new Error(`홈 추천 상품 파트 : ${Err}`);
		}
	};

	const { data } = useQuery({
		queryKey: ["recommendProduct"],
		queryFn: recommendProduct,
	});
	// console.log(data);

	const handleHomeSearch = (tag: string) => {
		setIsBtnOpen(false);
		setHomeSearch(tag);
	};

	return (
		<>
			<div className="flex flex-col w-full gap-20 bg-BASIC_WHITE dark:bg-BASIC_BLACK dark:text-BASIC_WHITE">
				<div className="w-full h-[750px] relative">
					<div>
						<img
							src={jeju1}
							alt="jeju image"
							className="absolute top-0 left-0 w-full h-full opacity-70"
						/>
					</div>
					<img
						src={jeju1}
						alt="jejuImage"
						className="absolute w-4/5 transform -translate-x-1/2 -translate-y-1/2 h-3/4 top-1/2 left-1/2"
					/>
					<div>
						<div className="px-10 bg-[rgba(0,0,0,0.4)] w-full md:w-1/3 h-full z-1 absolute top-0 right-0 flex flex-col justify-center gap-4">
							<h1 className="my-5 text-2xl text-BASIC_WHITE">출발지</h1>
							<div className="relative flex flex-row border-b text-BASIC_WHITE ">
								<span className="inline-block">
									<DestinationSvg
										fillColor="white"
										width="20px"
										height="24px"
									/>
								</span>
								<button
									type="button"
									className="w-full pb-1 pl-3 text-left bg-transparent text-BASIC_WHITE"
									onClick={() => setIsBtnOpen(!isBtnOpen)}
								>
									{homeSearch}
								</button>
								{isBtnOpen && (
									<div
										className="absolute z-10 w-56 mt-2 origin-top-right rounded-md shadow-lg opacity-75 top-6 right-30 bg-zinc-800 ring-1 ring-black ring-opacity-5 focus:outline-none"
										role="menu"
										aria-orientation="vertical"
										aria-labelledby="menu-button"
									>
										<div className="py-1" role="none">
											{tagLists.slice(1, 14).map((tag, idx) => (
												<a
													key={idx}
													className="block px-4 text-sm cursor-pointer text-BASIC_WHITE hover:bg-LINE_POINT_COLOR"
													role="menuitem"
													tabIndex={-1}
													onClick={() => handleHomeSearch(tag)}
												>
													{tag}
												</a>
											))}
										</div>
									</div>
								)}
							</div>

							<div className="text-center">
								<button
									className="w-1/2 h-10 mt-4 rounded-md bg-BASIC_WHITE dark:text-BASIC_BLACK"
									onClick={() => {
										setRegion(homeSearch);
										navigate(`/products`);
									}}
								>
									검색하기
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-col px-10 gap-28">
					<div className="flex flex-col justify-between w-full">
						<h1 className={sectionTitle}>추천 상품</h1>
						{innerWidth > 768 && (
							<div className="h-[230px] w-full flex justify-between">
								{data &&
									data
										.slice(0, 2)
										.map((item, idx: number) => (
											<RecommendProductItems key={idx} data={item} />
										))}
							</div>
						)}
						{innerWidth <= 768 && (
							<div className="h-[230px] w-full flex justify-center">
								<RecommendProductItems data={data && data[0]} />
							</div>
						)}
					</div>
					<div className="flex flex-col justify-between w-full">
						<h1 className={sectionTitle}>지역별 여행</h1>
						<div className="h-[370px] w-full flex flex-col justify-between">
							<RegionTravel />
							<div
								className="relative cursor-pointer"
								onClick={() => {
									navigate("/products");
									setCode("");
								}}
							>
								<div className="w-full h-[100px] bg-BASIC_BLACK md:rounded-md overflow-hidden">
									<img
										src={allTravelImg}
										alt="see all areas of korea"
										className="w-full h-full opacity-70"
									/>
								</div>
								<h2 className="absolute text-lg transform -translate-y-1/2 md:text-2xl top-1/2 left-1/3 md:left-1/2 -translate-x-1/4 md:-translate-x-1/2 text-BASIC_WHITE">
									여행지가 아직 정해지지 않았다면?
								</h2>
								<div className="absolute flex bottom-2 right-2 md:transform md:-translate-y-1/2 md:top-1/2 md:right-5 text-LIGHT_GRAY_COLOR">
									<span>전국보기</span>
									<div>
										<ArrowRight
											fillColor="#aaaaaa"
											width="15px"
											height="24px"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="flex flex-col justify-between w-full">
						<h1 className={sectionTitle}>테마별 여행</h1>
						<ThemeTravel />
					</div>
				</div>
				<HomeForum recommendProduct={data && data} />
			</div>
		</>
	);
}
