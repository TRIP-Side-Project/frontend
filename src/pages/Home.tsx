import jeju1 from "@/assets/jeju1.png";
import DestinationSvg from "@/assets/Destination";
import ArrowRight from "@/assets/svg/ArrowRight";
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
      <div className="px-16 flex flex-col gap-20">
        <div className="border flex flex-col justify-between align-center w-full">
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
        <div className="border flex flex-col justify-between align-center w-full">
          <h1 className="text-center text-3xl mb-14">지역별 여행</h1>
          <div className="h-[370px] w-full flex flex-col justify-between align-center">
            <div className="h-[250px] bg-slate-400 flex justify-between">
              <div className="w-[22%] bg-purple-100 h-full"></div>
              <div className="w-[22%] bg-purple-100 h-full"></div>
              <div className="w-[22%] bg-purple-100 h-full"></div>
              <div className="w-[22%] bg-purple-100 h-full"></div>

            </div>
            <div className="h-[100px] bg-slate-700">d</div>
          </div>
        </div>
        <div className="border flex flex-col justify-between align-center w-full">
          <h1 className="text-center text-3xl mb-14">테마별 여행</h1>
          <div className="h-[200px] w-full bg-slate-400 flex justify-between">
            <div className="w-[30%] h-full bg-rose-300"></div>
            <div className="w-[30%] h-full bg-rose-300"></div>
            <div className="w-[30%] h-full bg-rose-300"></div>
          </div>
        </div>
        <div className="w-full h-[500px] bg-emerald-400 flex flex-col justify-between align-center w-full">
          <h1 className="text-center text-3xl mb-14">여행후기</h1>
          <div className="border w-2/5 h-[400px]">내용</div>
        </div>
      </div>
    </div>
    </>
  )
}