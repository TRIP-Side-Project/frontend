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

export default function Home() {

	const sectionTitle = "text-3xl text-center mb-14 font-bold";
	
	return (
		<>
			<div className="flex flex-col gap-20 bg-BASIC_WHITE">
				<div className="w-screen h-[750px] relative">
					<div> 
						<img src={jeju1} alt="jeju image" className="absolute top-0 left-0 w-full h-full opacity-70" />
					</div>
					<img
						src={jeju1}
						alt="jejuImage"
						className="absolute w-4/5 transform -translate-x-1/2 -translate-y-1/2 h-3/4 top-1/2 left-1/2"
					/>
					<div className="">
						<div className="px-10 bg-[rgba(0,0,0,0.4)] w-1/3 h-full z-1 absolute top-0 right-0 flex flex-col justify-center gap-4">
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
								<button className="w-1/2 h-10 mt-4 rounded-md bg-BASIC_WHITE">
									검색하기
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-col px-16 gap-28">
					<div className="flex flex-col justify-between w-full">
						<h1 className={sectionTitle}>추천 상품</h1>
						<div className="h-[230px] w-full flex justify-between">
							{Array.from(Array(2), (_, index) => (
								<RecommendProductItems key={index} />
							))}
						</div>
					</div>
					<div className="flex flex-col justify-between w-full">
						<h1 className={sectionTitle}>지역별 여행</h1>
						<div className="h-[370px] w-full flex flex-col justify-between">
							<div className="h-[250px] flex justify-between relative">
								<div className="absolute top-1/2 transform rotate-180 -translate-y-1/2  left-[-4%] z-10 cursor-pointer">
									<NextOutline fillColor="#666666" width="40px" height="40px" />
								</div>
								<div className="absolute top-1/2 transform -translate-y-1/2 right-[-4%] z-10 cursor-pointer">
									<NextOutline fillColor="#666666" width="40px" height="40px" />
								</div>
								<RegionProductTheme region={"서울 | 경기"} regionImgUrl={SeoulImage} />
								<RegionProductTheme region={"강릉"} regionImgUrl={GangreoungImage} />
								<RegionProductTheme region={"부산"} regionImgUrl={BusanImage} />
								<RegionProductTheme region={"제주"} regionImgUrl={JejuImage} />
							</div>
							<div className="relative cursor-pointer">
								<div className="w-full h-[100px] bg-BASIC_BLACK rounded-md overflow-hidden">
									<img
										src={AllAreasImage}
										alt="see all areas of korea"
										className="w-full h-full opacity-70"
									/>
								</div>
								<h2 className="absolute text-2xl transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 text-BASIC_WHITE">
									여행지가 아직 정해지지 않았다면?
								</h2>
								<div className="absolute flex transform -translate-y-1/2 top-1/2 right-5 text-LIGHT_GRAY_COLOR">
									<span>전국보기</span>
									<div className="">
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
						<div className="h-[200px] w-full flex justify-between">
							<div className="w-[30%] h-full bg-MAIN_COLOR rounded-md relative cursor-pointer">
								<h2 className="absolute text-2xl text-BASIC_WHITE bottom-2 right-2">
									눈꽃여행
								</h2>
							</div>
							<div className="w-[30%] h-full bg-MAIN_COLOR rounded-md relative cursor-pointer">
								<h2 className="absolute text-2xl text-BASIC_WHITE bottom-2 right-2">
									바닷가여행
								</h2>
							</div>
							<div className="w-[30%] h-full bg-MAIN_COLOR rounded-md relative cursor-pointer">
								<h2 className="absolute text-2xl text-BASIC_WHITE bottom-2 right-2">
									산길여행
								</h2>
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-col justify-between w-full px-16 pt-10 pb-16 bg-cyan-100">
					<h1 className={sectionTitle}>여행후기</h1>
					<div className="flex justify-between">
						<div className="w-2/5">
							<h2 className="text-2xl font-bold">대충여행후기제목</h2>
							<div className="w-full h-0 my-5 border border-BASIC_BLACK" />
							<p className="text-xl">
								대충여행후기내용임 그렇다니까요 반박시 반박 불가 어허
							</p>
							<div className="my-2 text-base text-LIGHT_GRAY_COLOR">
								<span className="mr-2">#제주</span>
								<span className="mr-2">#힐링</span>
							</div>
							<div className="flex mt-5 text-base cursor-pointer text-LIGHT_GRAY_COLOR">
								<p>자세히보기</p>
								<ArrowRight fillColor="#aaaaaa" width="15" height="24" />
							</div>
						</div>
						<div className="flex justify-between w-[500px] gap-2">
							{Array.from(Array(2), (_, index) => (
								<ProductCardItems key={index} />
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
