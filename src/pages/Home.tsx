import jeju1 from "@/assets/jeju1.png";
import DestinationSvg from "@/assets/Destination";
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
        <div className="border flex flex-col justify-between align-center w-full h-[350px]">
          <h1 className="text-center text-3xl">추천 상품</h1>
          <div className="h-[250px] w-full bg-slate-400 flex justify-between">
            <div className="w-[45%] bg-blue-300 rounded-md"></div>
            <div className="w-[45%] bg-blue-300 rounded-md"></div>
          </div>
        </div>
        <div className="border flex flex-col justify-between align-center w-full h-[470px]">
          <h1 className="text-center text-3xl">지역별 여행</h1>
          <div className="h-[370px] w-full flex flex-col justify-between align-center">
            <div className="h-[250px] bg-slate-400 flex justify-between">
              <div className="w-1/5 bg-purple-100 h-full"></div>
              <div className="w-1/5 bg-purple-100 h-full"></div>
              <div className="w-1/5 bg-purple-100 h-full"></div>
              <div className="w-1/5 bg-purple-100 h-full"></div>

            </div>
            <div className="h-[100px] bg-slate-700">d</div>
          </div>
        </div>
        <div className="border flex flex-col justify-between align-center w-full h-[300px]">
          <h1 className="text-center text-3xl">테마별 여행</h1>
          <div className="h-[200px] w-full bg-slate-400 flex justify-between">
            <div className="w-[30%] h-full bg-rose-300"></div>
            <div className="w-[30%] h-full bg-rose-300"></div>
            <div className="w-[30%] h-full bg-rose-300"></div>
          </div>
        </div>
        <div className="w-full h-[500px] bg-emerald-400 flex flex-col justify-between align-center w-full h-[350px]">
          <h1 className="text-center text-3xl">여행후기</h1>
          <div className="border w-2/5 h-[400px]">내용</div>
        </div>
      </div>
    </div>
    </>
  )
}