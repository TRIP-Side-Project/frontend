import ProductCardItems from "@/components/productCardItems/ProductCardItems";
import RecommendProductItems from "@/components/recommendProductItems/RecommendProductItems";

import jeju1 from "@/assets/img/jeju1.png";
import DestinationSvg from "@/assets/svg/Destination";
import ArrowRight from "@/assets/svg/ArrowRight";
import SeoulImage from "@/assets/img/seoul.png";
import GangreoungImage from "@/assets/img/gangreoung.png";
import BusanImage from "@/assets/img/busan.png";
import JejuImage from "@/assets/img/jeju2.png";
import AllAreasImage from "@/assets/img/seeallareas.png";
import NextOutline from "@/assets/svg/NextOutline";
import RegionProductTheme from "@/components/regionProductTheme/RegionProductTheme";
import { useEffect, useState } from "react";

export default function Home() {
	const sectionTitle = "text-3xl text-center mb-14 font-bold";
	const themeTitleStyle = "absolute text-xl md:text-2xl text-BASIC_WHITE bottom-2 right-2";

	// 동적 화면 사이즈 구하기
	// 근데 바뀔 때마다 함수가 돌아가서 성능면에서 개선이 필요해 보임.
	// 전역에서 관리해야할듯
	const [innerWidth, setInnerWidth] = useState(window.innerWidth);
	useEffect(() => {
    const resizeListener = () => {
      setInnerWidth(window.innerWidth);
    };
    window.addEventListener("resize", resizeListener);
  });

  // console.log("innerWidth", innerWidth);

	return (
		<>
			<div className="flex flex-col w-full gap-20 bg-BASIC_WHITE dark:bg-BASIC_BLACK  dark:text-BASIC_WHITE">
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
							<div className="border-b text-BASIC_WHITE ">
								<span className="inline-block">
									<DestinationSvg
										fillColor="white"
										width="20px"
										height="24px"
									/>
								</span>
								<input
									type="text"
									value={`서울 | 경기`}
									className="bg-transparent"
								></input>
							</div>
							<div className="text-center">
								<button className="w-1/2 h-10 mt-4 rounded-md bg-BASIC_WHITE dark:text-BASIC_BLACK">
									검색하기
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-col gap-28">
					<div className="flex flex-col justify-between w-full">
						<h1 className={sectionTitle}>추천 상품</h1>
						{innerWidth > 768 &&
							<div className="h-[230px] w-full flex justify-between">
							{Array.from(Array(2), (_, index) => (
								<RecommendProductItems key={index} />
							))}
						</div>
						}
						{innerWidth <= 768 &&
							<div className="h-[230px] w-full flex justify-center">
								<RecommendProductItems />
							</div>
						}
					</div>
					<div className="flex flex-col justify-between w-full">
						<h1 className={sectionTitle}>지역별 여행</h1>
						<div className="h-[370px] w-full flex flex-col justify-between">
							<div className="h-[250px] flex justify-center md:justify-between relative">
								<div className="absolute top-1/2 transform rotate-180 -translate-y-1/2 left-0 z-10 cursor-pointer">
									<NextOutline fillColor="#666666" width="40px" height="40px" />
								</div>
								<div className="absolute top-1/2 transform -translate-y-1/2 right-0 z-10 cursor-pointer">
									<NextOutline fillColor="#666666" width="40px" height="40px" />
								</div>
								{innerWidth > 768 &&
								<>
									<RegionProductTheme region={"서울 | 경기"} regionImgUrl={SeoulImage} />
									<RegionProductTheme	region={"강릉"}	regionImgUrl={GangreoungImage} />
									<RegionProductTheme region={"부산"} regionImgUrl={BusanImage} />
									<RegionProductTheme region={"제주"} regionImgUrl={JejuImage} />
								</>
								}
								{innerWidth <= 768 &&
								<>
									<RegionProductTheme region={"서울 | 경기"} regionImgUrl={SeoulImage} />
								</>
								}
							</div>
							<div className="relative cursor-pointer">
								<div className="w-full h-[100px] bg-BASIC_BLACK md:rounded-md overflow-hidden">
									<img
										src={AllAreasImage}
										alt="see all areas of korea"
										className="w-full h-full opacity-70"
									/>
								</div>
								<h2 className="text-lg md:text-2xl absolute top-1/2 left-1/3 md:left-1/2 transform -translate-y-1/2 -translate-x-1/4 md:-translate-x-1/2 text-BASIC_WHITE">
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
						{innerWidth > 768 &&
							<div className="h-[200px] w-full flex justify-between">
								<div className="w-[30%] h-full bg-MAIN_COLOR rounded-md relative cursor-pointer">
									<h2 className={themeTitleStyle}>
										눈꽃여행
									</h2>
								</div>
								<div className="w-[30%] h-full bg-MAIN_COLOR rounded-md relative cursor-pointer">
									<h2 className={themeTitleStyle}>
										바닷가여행
									</h2>
								</div>
								<div className="w-[30%] h-full bg-MAIN_COLOR rounded-md relative cursor-pointer">
									<h2 className={themeTitleStyle}>
										산길여행
									</h2>
								</div>
							</div>
						}
						{innerWidth <= 768 &&
							<div className="relative h-[200px] w-full flex justify-center md:justify-between">
								<div className="absolute top-1/2 transform rotate-180 -translate-y-1/2 left-0 z-10 cursor-pointer">
									<NextOutline fillColor="#666666" width="40px" height="40px" />
								</div>
								<div className="absolute top-1/2 transform -translate-y-1/2 right-0 z-10 cursor-pointer">
									<NextOutline fillColor="#666666" width="40px" height="40px" />
								</div>
								<div className="w-[250px] md:w-[30%] h-full bg-MAIN_COLOR rounded-md relative cursor-pointer">
									<h2 className={themeTitleStyle}>
										눈꽃여행
									</h2>
								</div>
							</div>
						}
					</div>
				</div>
				<div className="flex flex-col justify-between w-full px-16 pt-10 pb-16 mb-10 bg-cyan-100 dark:bg-LINE_POINT_COLOR">
					<h1 className={sectionTitle}>여행후기</h1>
					<div className="md:flex md:justify-between">
						<div className="w-full md:w-2/5">
							<h2 className="text-2xl font-bold">대충여행후기제목</h2>
							<div className="w-full h-0 my-5 border border-BASIC_BLACK" />
							<p className="text-xl">
								대충여행후기내용임 그렇다니까요 반박시 반박 불가 어허
							</p>
							<div className="my-2 text-base text-LIGHT_GRAY_COLOR">
								<span className="mr-2">#제주</span>
								<span className="mr-2">#힐링</span>
							</div>
							<div className="flex justify-end md:justify-start mt-5 text-base cursor-pointer text-LIGHT_GRAY_COLOR">
								<p>자세히보기</p>
								<ArrowRight fillColor="#aaaaaa" width="15" height="24" />
							</div>
						</div>
						<div className="mt-10 md:ml-10 flex justify-center md:justify-between md:w-[500px] md:gap-2">
							{innerWidth > 768 &&
								<>
									{Array.from(Array(2), (_, index) => (
										<ProductCardItems key={index} />
									))}
								</>
							}
							{innerWidth <= 768 &&
									<ProductCardItems />
							}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
