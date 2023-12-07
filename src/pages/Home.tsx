import jeju1 from "@/assets/img/jeju1.png";
import DestinationSvg from "@/assets/svg/Destination";
import ArrowRight from "@/assets/svg/ArrowRight";
import SeoulImage from "@/assets/img/seoul.png";
import GangreoungImage from "@/assets/img/gangreoung.png";
import BusanImage from "@/assets/img/busan.png";
import JejuImage from "@/assets/img/jeju2.png";
import AllAreasImage from "@/assets/img/seeallareas.png";
import NextOutline from "@/assets/svg/NextOutline";
export default function Home() {
	return (
		<>
			<div className="flex flex-col gap-20 ">
				<div className="w-screen h-[750px] bg-cyan-100 relative">
					<img
						src={jeju1}
						alt="jejuImage"
						className="absolute w-4/5 transform -translate-x-1/2 -translate-y-1/2 h-3/4 top-1/2 left-1/2"
					/>
					<div className="">
						<div className="px-10 bg-[rgba(0,0,0,0.4)] w-1/3 h-full z-1 absolute top-0 right-0 flex flex-col justify-center align-center gap-4">
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
					<div className="flex flex-col justify-between w-full align-center">
						<h1 className="text-3xl text-center mb-14">추천 상품</h1>
						<div className="h-[230px] w-full flex justify-between">
							<div className="w-[48%] cursor-pointer shadow-md p-3 overflow-hidden relative bg-ITEM_BG_COLOR rounded-md flex gap-3 align-center">
								<div className="absolute top-0 px-2 py-3 bg-red-500 left-5 text-BASIC_WHITE rounded-b-md">
									<p>HOT</p>
								</div>
								<img
									src={jeju1}
									alt="jeju image"
									className="rounded-lg w-[250px] h-full"
								/>
								<div>
									<h2 className="text-2xl text-BASIC_BLACK">Gyeong-ju</h2>
									<div className="absolute top-5 right-1">
										<ArrowRight
											fillColor="#cccccc"
											width="20px"
											height="20px"
										/>
									</div>
									<p className="pt-2 text-sm text-LIGHT_GRAY_COLOR">
										@아리아리랑 투어
									</p>
								</div>
								<div className="absolute bottom-0 right-0 flex flex-col gap-1">
									<p className="pr-3 text-right text-BASIC_BLACK">
										₩ 1,000,000원
									</p>
									<p className="px-5 py-1 text-2xl bg-yellow-400 rounded-tl-2xl text-BASIC_WHITE ">
										# A.K.A 경주
									</p>
								</div>
							</div>
							<div className="w-[48%] cursor-pointer shadow-md p-3 overflow-hidden relative bg-ITEM_BG_COLOR rounded-md flex gap-3 align-center">
								<div className="absolute top-0 px-2 py-3 bg-red-500 left-5 text-BASIC_WHITE rounded-b-md">
									<p>HOT</p>
								</div>
								<img
									src={jeju1}
									alt="jeju image"
									className="rounded-lg w-[250px] h-full"
								/>
								<div>
									<h2 className="text-2xl text-BASIC_BLACK">Gyeong-ju</h2>
									<div className="absolute top-5 right-1">
										<ArrowRight
											fillColor="#cccccc"
											width="20px"
											height="20px"
										/>
									</div>
									<p className="pt-2 text-sm text-LIGHT_GRAY_COLOR">
										@아리아리랑 투어
									</p>
								</div>
								<div className="absolute bottom-0 right-0 flex flex-col gap-1">
									<p className="pr-3 text-right text-BASIC_BLACK">
										₩ 1,000,000원
									</p>
									<p className="px-5 py-1 text-2xl bg-yellow-400 rounded-tl-2xl text-BASIC_WHITE ">
										# A.K.A 경주
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="flex flex-col justify-between w-full align-center">
						<h1 className="text-3xl text-center mb-14">지역별 여행</h1>
						<div className="h-[370px] w-full flex flex-col justify-between align-center">
							<div className="h-[250px] flex justify-between relative">
								<div className="absolute top-1/2 transform rotate-180 -translate-y-1/2  left-[-5%] z-10 cursor-pointer">
									<NextOutline fillColor="#666666" width="40px" height="40px" />
								</div>
								<div className="absolute top-1/2 transform -translate-y-1/2 right-[-5%] z-10 cursor-pointer">
									<NextOutline fillColor="#666666" width="40px" height="40px" />
								</div>
								<div className="w-[22%] h-full rounded-md relative overflow-hidden cursor-pointer">
									<div className="w-full h-full bg-BASIC_BLACK">
										<img
											src={SeoulImage}
											alt="seoul image"
											className="w-full h-full opacity-70"
										/>
									</div>
									<h2 className="absolute text-2xl text-BASIC_WHITE bottom-2 right-2">
										서울 | 경기
									</h2>
								</div>
								<div className="w-[22%] h-full rounded-md relative overflow-hidden">
									<div className="w-full h-full bg-BASIC_BLACK">
										<img
											src={GangreoungImage}
											alt="gangreoung image"
											className="w-full h-full cursor-pointer opacity-70"
										/>
									</div>
									<h2 className="absolute text-2xl text-BASIC_WHITE bottom-2 right-2">
										강릉
									</h2>
								</div>
								<div className="w-[22%] h-full rounded-md relative overflow-hidden">
									<div className="w-full h-full bg-BASIC_BLACK">
										<img
											src={BusanImage}
											alt="busan image"
											className="w-full h-full cursor-pointer opacity-70"
										/>
									</div>
									<h2 className="absolute text-2xl text-BASIC_WHITE bottom-2 right-2">
										부산
									</h2>
								</div>
								<div className="w-[22%] h-full rounded-md relative overflow-hidden">
									<div className="w-full h-full bg-BASIC_BLACK">
										<img
											src={JejuImage}
											alt="jeju image"
											className="w-full h-full cursor-pointer opacity-70"
										/>
									</div>
									<h2 className="absolute text-2xl text-BASIC_WHITE bottom-2 right-2">
										제주
									</h2>
								</div>
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
					<div className="flex flex-col justify-between w-full align-center">
						<h1 className="text-3xl text-center mb-14">테마별 여행</h1>
						<div className="h-[200px] w-full flex justify-between">
							<div className="w-[30%] h-full bg-MAIN_COLOR rounded-md relative">
								<h2 className="absolute text-2xl text-BASIC_WHITE bottom-2 right-2">
									눈꽃여행
								</h2>
							</div>
							<div className="w-[30%] h-full bg-MAIN_COLOR rounded-md relative">
								<h2 className="absolute text-2xl text-BASIC_WHITE bottom-2 right-2">
									바닷가여행
								</h2>
							</div>
							<div className="w-[30%] h-full bg-MAIN_COLOR rounded-md relative">
								<h2 className="absolute text-2xl text-BASIC_WHITE bottom-2 right-2">
									산길여행
								</h2>
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-col justify-between w-full px-16 pt-10 pb-16 bg-cyan-100 align-center">
					<h1 className="text-3xl text-center mb-14">여행후기</h1>
					<div className="flex justify-between align-center">
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
						<div className="flex justify-between w-1/2 align-center">
							<div className="w-[45%] h-[300px] bg-rose-300"></div>
							<div className="w-[45%] h-[300px] bg-rose-300"></div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
