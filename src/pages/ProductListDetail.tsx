import Train from "@/assets/svg/Train";
import Button, { btnAttributes } from "@/common/button/Button";
import Bookmark from "@/components/Bookmark/Bookmark";
import { useState } from "react";

export default function ProductListDetail () {

  const buyBtnInfo: btnAttributes = {
		width: "150px",
		position: "right",
		text: "구매하러 가기",
		type: "circle",
	};

  const searchBtnInfo: btnAttributes = {
    width: "100px",
    position: "center",
    text: "검색",
    type: "square"
  }

  // 달력
  const today = new Date();
  const todayDate = today.toISOString().substring(0,10);

  // 관련상품
  // 상태 타입 지정 해야함

  const [isTrain, setIsTrain] = useState(false);
  const [isBus, setIsBus] = useState(false);
  
  const handleisTrain = (): void => {
    if(!isTrain && !isBus){
      setIsTrain(!isTrain);
    }
    if(isBus && !isTrain){
      setIsBus(!isBus);
      setIsTrain(!isTrain);
    }
    setIsTrain(!isTrain);
  }

  const handleisBus = (): void => {
    if(isTrain && !isBus){
      setIsBus(!isBus);
      setIsTrain(!isTrain);
    }
    if(!isBus && !isTrain){
      setIsBus(!isBus);
    }
    setIsBus(!isBus);
  }
  

    const selectVehicle: string = "w-1/2 px-3 py-1 text-BASIC_WHITE bg-MAIN_COLOR";
    const normalVehicle: string = "w-1/2 px-3 py-1";


  return (
    <>
    <div className="px-28 mt-20">
      <div className="border-b pb-10 border-LIGHT_GRAY_COLOR mb-20 flex h-[400px] align-center relative gap-10">
        <div className="w-[400px] h-[300px] bg-rose-300 rounded-md">
          {/* 이미지 들어갈 자리 */}
        </div>
        <div className="h-full flex flex-col justify-between align-center">
          <div>
            <h1 className="text-3xl font-bold mb-5">여행 상품명</h1>
            <p className="text-2xl mb-5">여행 상품 내용 어쩌구 쿵냐쿵 쿵냐리 쿵쿵</p>
            <div className="text-xl flex gap-5 mb-5">
              <span>#대분류</span>
              <span>#중분류</span>
              <span>#소분류</span>
            </div>
          </div>
          <div className="pb-3 flex flex-col gap-5">
            <div>
              <span className="w-[100px] inline-block">판매자</span>
              <span>노랑풍선</span>
            </div>
            <div>
              <span className="w-[100px] inline-block">상품 가격</span>
              <span>1,000,000원</span>
            </div>
          </div>
          <div className="flex justify-center">
            <Button btnInfo={buyBtnInfo} />
          </div>
        </div>
        <div className="">
        </div>
        <Bookmark />
      </div>
      <div>
        <h1 className="text-3xl font-bold mb-5">관련 교통편</h1>
        <div className="flex justify-between align-center text-lg font-bold">
          <div className="text-center cursor-pointer w-[120px] flex flex-row rounded-md h-fit overflow-hidden bg-LINE_POINT_COLOR">
            <span className={(isTrain ? selectVehicle : normalVehicle)} onClick={handleisTrain}>기차</span>
            <span className={(isBus ? selectVehicle : normalVehicle)} onClick={handleisBus}>버스</span>
          </div>
          <div className="flex flex-col gap-5">
            <div>
              <span>출발</span>
              <input type="text" className="ml-2 bg-LINE_POINT_COLOR rounded-md w-2/3 px-2 py-1 font-light" />
            </div>
            <div>
              <span>도착</span>
              <input type="text" className="ml-2 bg-LINE_POINT_COLOR rounded-md w-2/3 px-2 py-1"/>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div>
              {/* 디테일한 디자인 생각 좀 해보고 구현할게요. */}
              {/* 날짜 선택 스크립트 구현 예정 */}
              <span>날짜</span>
              <input type="date" value={todayDate} className="ml-2 bg-LINE_POINT_COLOR rounded-md w-2/3 px-2 py-1"/>
            </div>
            <div>
              <span>시간</span>
              <input type="text" className="ml-2 bg-LINE_POINT_COLOR rounded-md w-2/3 px-2 py-1"/>
            </div>
          </div>
          <Button btnInfo={searchBtnInfo} />
        </div>
        <div className="w-full h-[200px] bg-LINE_POINT_COLOR rounded-md mb-20 mt-5 flex justify-center align-center">
          <div className="flex flex-col justify-around">
            <h3 className="text-xl font-bold">여행 일정을 공유해주세요!</h3>
            <div className="w-fit mx-auto">
              <Train width="130px" height="130px" />
            </div>
          </div>
        </div>
      </div>
      <div className="text-3xl font-bold mb-5">
        <h1 className="text-3xl font-bold mb-5">관련상품</h1>
        <div className="w-full h-[400px] bg-green-300"></div>
      </div>
    </div>
    </>
  )
}