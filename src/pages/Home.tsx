import jeju1 from "@/assets/jeju1.png";
import DestinationSvg from "@/assets/svg/Destination";
import ArrowRight from "@/assets/svg/ArrowRight";
import SeoulImage from "@/assets/img/seoul.png";
import GangreoungImage from "@/assets/img/gangreoung.png";
import BusanImage from "@/assets/img/busan.png";
import JejuImage from "@/assets/img/jeju2.png";
import AllAreasImage from "@/assets/img/seeallareas.png";
import NextOutline from "@/assets/svg/NextOutline";
export default function Home () {
  return(
    <>
    <div className=" flex flex-col gap-20 ">
      <div className="w-screen h-[750px] bg-cyan-100 relative">
        <img src={jeju1} alt="jejuImage" className="w-4/5 h-3/4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        <div className="">
          <div className="px-10 bg-[rgba(0,0,0,0.4)] w-1/3 h-full z-1 absolute top-0 right-0 flex flex-col justify-center align-center gap-4">
            <h1 className="text-2xl text-BASIC_WHITE my-5">출발지</h1>
            <div className="text-BASIC_WHITE border-b ">
              <span className="inline-block"><DestinationSvg fillColor="white" width="20px" height="24px" /></span>
              <input type="text" value={`서울 | 경기`} className="bg-transparent"></input>
            </div>
            <div className="text-center">
              <button className="bg-BASIC_WHITE rounded-md w-1/2 h-10 mt-4">검색하기</button>
            </div>
          </div>
        </div>
      </div>
      <div className="px-16 flex flex-col gap-28">
        <div className="flex flex-col justify-between align-center w-full">
          <h1 className="text-center text-3xl mb-14">추천 상품</h1>
          <div className="h-[230px] w-full flex justify-between">
            <div className="w-[48%] cursor-pointer shadow-md p-3 overflow-hidden relative bg-ITEM_BG_COLOR rounded-md flex gap-3 align-center">
              <div className="absolute top-0 left-5 bg-red-500 px-2 py-3 text-BASIC_WHITE rounded-b-md">
                <p>HOT</p>
              </div>
              <img src={jeju1} alt="jeju image" className="rounded-lg w-[250px] h-full" />
              <div>
                <h2 className="text-2xl text-BASIC_BLACK">Gyeong-ju</h2>
                  <div className="absolute top-5 right-1">
                    <ArrowRight fillColor="#cccccc" width="20px" height="20px"/>
                  </div>
                <p className="text-sm pt-2 text-LIGHT_GRAY_COLOR">@아리아리랑 투어</p>
              </div>
              <div className="absolute bottom-0 right-0 flex flex-col gap-1">
                <p className="text-right pr-3 text-BASIC_BLACK">₩ 1,000,000원</p>
                <p className="bg-yellow-400 rounded-tl-2xl px-5 py-1 text-2xl text-BASIC_WHITE "># A.K.A 경주</p>
              </div>
            </div>
            <div className="w-[48%] cursor-pointer shadow-md p-3 overflow-hidden relative bg-ITEM_BG_COLOR rounded-md flex gap-3 align-center">
              <div className="absolute top-0 left-5 bg-red-500 px-2 py-3 text-BASIC_WHITE rounded-b-md">
                <p>HOT</p>
              </div>
              <img src={jeju1} alt="jeju image" className="rounded-lg w-[250px] h-full" />
              <div>
                <h2 className="text-2xl text-BASIC_BLACK">Gyeong-ju</h2>
                  <div className="absolute top-5 right-1">
                    <ArrowRight fillColor="#cccccc" width="20px" height="20px"/>
                  </div>
                <p className="text-sm pt-2 text-LIGHT_GRAY_COLOR">@아리아리랑 투어</p>
              </div>
              <div className="absolute bottom-0 right-0 flex flex-col gap-1">
                <p className="text-right pr-3 text-BASIC_BLACK">₩ 1,000,000원</p>
                <p className="bg-yellow-400 rounded-tl-2xl px-5 py-1 text-2xl text-BASIC_WHITE "># A.K.A 경주</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between align-center w-full">
          <h1 className="text-center text-3xl mb-14">지역별 여행</h1>
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
                  <img src={SeoulImage} alt="seoul image" className="w-full h-full opacity-70" />
                </div>
                <h2 className="text-BASIC_WHITE absolute bottom-2 right-2 text-2xl">서울 | 경기</h2>
              </div>
              <div className="w-[22%] h-full rounded-md relative overflow-hidden">
                <div className="w-full h-full bg-BASIC_BLACK">
                  <img src={GangreoungImage} alt="gangreoung image" className="w-full h-full opacity-70 cursor-pointer" />
                </div>
                <h2 className="text-BASIC_WHITE absolute bottom-2 right-2 text-2xl">강릉</h2>
              </div>
              <div className="w-[22%] h-full rounded-md relative overflow-hidden">
                <div className="w-full h-full bg-BASIC_BLACK">
                  <img src={BusanImage} alt="busan image" className="w-full h-full opacity-70 cursor-pointer" />
                </div>
                <h2 className="text-BASIC_WHITE absolute bottom-2 right-2 text-2xl">부산</h2>
              </div>
              <div className="w-[22%] h-full rounded-md relative overflow-hidden">
                <div className="w-full h-full bg-BASIC_BLACK">
                  <img src={JejuImage} alt="jeju image" className="w-full h-full opacity-70 cursor-pointer" />
                </div>
                <h2 className="text-BASIC_WHITE absolute bottom-2 right-2 text-2xl">제주</h2>
              </div>
            </div>
            <div className="relative cursor-pointer">
              <div className="w-full h-[100px] bg-BASIC_BLACK rounded-md overflow-hidden">
                <img src={AllAreasImage} alt="see all areas of korea" className="w-full h-full opacity-70" />
              </div>
              <h2 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-BASIC_WHITE text-2xl">여행지가 아직 정해지지 않았다면?</h2>
              <div className="flex absolute top-1/2 transform -translate-y-1/2 right-5 text-LIGHT_GRAY_COLOR">
                <span>전국보기</span>
                <div className="">
                  <ArrowRight fillColor="#aaaaaa" width="15px" height="24px" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between align-center w-full">
          <h1 className="text-center text-3xl mb-14">테마별 여행</h1>
          <div className="h-[200px] w-full flex justify-between">
            <div className="w-[30%] h-full bg-MAIN_COLOR rounded-md relative">
              <h2 className="text-BASIC_WHITE absolute bottom-2 right-2 text-2xl">눈꽃여행</h2>
            </div>
            <div className="w-[30%] h-full bg-MAIN_COLOR rounded-md relative">
              <h2 className="text-BASIC_WHITE absolute bottom-2 right-2 text-2xl">바닷가여행</h2>
            </div>
            <div className="w-[30%] h-full bg-MAIN_COLOR rounded-md relative">
              <h2 className="text-BASIC_WHITE absolute bottom-2 right-2 text-2xl">산길여행</h2> 
            </div>
          </div>
        </div>   
      </div>
      <div className="px-16 pt-10 pb-16 w-full bg-cyan-100 flex flex-col justify-between align-center w-full">
        <h1 className="text-center text-3xl mb-14">여행후기</h1>
        <div className="flex align-center justify-between">
          <div className="w-2/5">
            <h2 className="text-2xl font-bold">대충여행후기제목</h2>
            <div className="w-full h-0 border border-BASIC_BLACK my-5" />
            <p className="text-xl">대충여행후기내용임 그렇다니까요 반박시 반박 불가 어허</p>
            <div className="text-LIGHT_GRAY_COLOR text-base my-2">
              <span className="mr-2">#제주</span>
              <span className="mr-2">#힐링</span>
            </div>
            <div className="text-LIGHT_GRAY_COLOR mt-5 text-base flex cursor-pointer">
              <p>자세히보기</p>
              <ArrowRight fillColor="#aaaaaa" width="15" height="24" />
            </div>
          </div>
          <div className="w-1/2 flex justify-between align-center">
            <div className="w-[45%] h-[300px] bg-rose-300"></div>
            <div className="w-[45%] h-[300px] bg-rose-300"></div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}