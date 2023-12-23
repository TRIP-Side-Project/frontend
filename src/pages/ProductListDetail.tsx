import BackToList from "@/assets/svg/BackToList";
import Train from "@/assets/svg/Train";
import Button, { btnAttributes } from "@/common/button/Button";
import Bookmark from "@/components/Bookmark/Bookmark";
import ProductCardItems from "@/components/productCardItems/ProductCardItems";
import axios from "axios";
import { ChangeEvent, FormEventHandler, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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

  // style
  const locationStyle = " ml-10 md:ml-2 bg-LINE_POINT_COLOR rounded-md w-2/3 px-2 py-1 font-light focus:outline-MAIN_COLOR";

  // 달력
  const today = new Date();
  const todayDate = today.toISOString().substring(0, 10);
  const todayTime = today.toTimeString().substring(0, 5);
  const [selectedDate, setSelectedDate] = useState(todayDate);
  const [selectedTime, setSelectedTime] = useState(todayTime);
  const handleDateChange = (event:ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(event.target.value)
  }
  const handleTimeChange = (event:ChangeEvent<HTMLInputElement>) => {
    setSelectedTime(event.target.value)
  }

  // 관련상품
  // 상태 타입 지정 해야함

  const [isTrain, setIsTrain] = useState(true);
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
  
  interface locationInfo {
    depature: string;
    arrival: string;
  }

  const [location, setLocation] = useState<locationInfo>({
    depature: "",
    arrival: "",
  });

  interface locationNumInfo {
    depature: number | null;
    arrival: number | null;
  }

  const [numLocation, setNumLocation] = useState<locationNumInfo>({
    depature: null,
    arrival: null,
  });

  const changeLocationValue = (event:ChangeEvent<HTMLInputElement>) => {
    setLocation({
      ...location,
      [event.target.name]: event.target.value
    })
  }

  // 시간
  // const [selectedTime, setSelectedTime] = useState<string>('');

  // 뒤로가기 버튼
  const navigate = useNavigate();
  const backButton = () => {
    navigate(-1);
  }

  const selectVehicle: string = "w-1/2 px-3 py-1 text-BASIC_WHITE bg-MAIN_COLOR";
  const normalVehicle: string = "w-1/2 px-3 py-1";

  // 교통편 조회

  interface LineListInfo {
    depatureTime: string | null,
    grade: string | null,
    busCorName: string | null,
    remainingSeats: string | null,
  }

  const [lineList, setLineList] = useState(false); // 조회했을때 리스트가 있는지
  const [noLineMessage, setNoLineMessage] = useState(""); // 조회했을때 리스트가 없을 때 안내 문구
  const [lineListData, setLineListData] = useState<LineListInfo>({
    depatureTime: null,
    grade: null,
    busCorName: null,
    remainingSeats: null,

  })

  const findTerNum = () => {
    const fetchData = async () => {
      try{
        const ter_numResponse = await axios.get(          
          `/proxy/koLoadInfo/v1/load_info/010`,
          {
            headers: {
              "x-Gateway-APIKey": "d2338a0c-d836-421f-aaa3-0679c3884a4a"
            }
          }
        )
        // 터미널 번호 찾아오는 과정
        const listData = ter_numResponse.data.response.ter_list;
        const depatureData = listData.filter((item) => item.TER_NAM.includes(location.depature));
        const arrivalData = listData.filter((item) => item.TER_NAM.includes(location.arrival));
        console.log(depatureData);
        console.log(arrivalData);
        setNumLocation({
          ...numLocation,
          depature: depatureData[0].TER_COD,
          arrival: arrivalData[0].TER_COD
        })
      } catch (error) {
        console.log("Error : " + error);
      }
    }
    fetchData();
  }

  useEffect(() => {
    findTerNum();
  }, [location.arrival])
  // 청주가 들어가는 검색어로 입력 *청주* 이런 느낌으로 해야함
  // 검색어 드롭다운으로 미리 보여주고 선택하게 해도 좋을 듯

  const handleVehicle:FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const fetchData = async () => {
      try{
        const searchDate = selectedDate.split("-").join("");
        const searchTime = selectedTime.split(":").join("");
        console.log(numLocation);
        const searchResponse = await axios.get(
          `/proxy/koIbtList/v1/ibt_list/${searchDate}/${searchTime}/${numLocation.depature}/${numLocation.arrival}/0/0/9`,
          {
          headers: {
            "x-Gateway-APIKey": "f7f4cfab-c6e5-4c2d-ba83-283349af63e4"
          }
        })
        if(searchResponse.data.message === "정상"){
          setLineList(true);
          const data = searchResponse.data.response.line_list;
          data.map((item) => {
            setLineListData({
              ...lineListData,
              depatureTime: item.tim_tim,
              grade: item.bus_gra_o,
              busCorName: item.cor_nam,
              remainingSeats: item.rem_cnt,
            })
          })
        }else {
          setNoLineMessage(searchResponse.data.message);
        }

        console.log(searchResponse.data);
      } catch (error) {
        console.log("Error : " + error);
      }
    }
    fetchData();
  }
  console.log(lineList);
  console.log(noLineMessage);
  console.log(lineListData);


  return (
    <>
    <div className="px-10 md:px-28 pt-20 bg-BASIC_WHITE w-full dark:bg-BASIC_BLACK dark:text-BASIC_WHITE">
      <div className="flex gap-1 mb-5 cursor-pointer items-top" onClick={backButton}>
        <p>목록 돌아가기</p>
        <BackToList fillColor="#333333" width="20px" height="20px" />
      </div>
      <div className="border-b pb-10 border-LIGHT_GRAY_COLOR mb-20 flex flex-col md:flex-row md:h-[400px] items-start md:items-center relative gap-10">
        <div className="w-full md:w-[400px] h-[300px] bg-rose-300 rounded-md relative">
          {/* 이미지 들어갈 자리 */}
          <div className="absolute top-3 right-3">
            <Bookmark />
          </div>
        </div>
        <div className="w-full h-full flex flex-col gap-5 md:gap-0 justify-between md:items-center">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold mb-5">여행 상품명</h1>
            <p className="text-lg md:text-2xl mb-5">여행 상품 내용 어쩌구 쿵냐쿵 쿵냐리 쿵쿵</p>
            <div className="text-lg md:text-xl flex gap-5 mb-5">
              <span>#대분류</span>
              <span>#중분류</span>
              <span>#소분류</span>
            </div>
          </div>
          <div className="pb-3 flex flex-col gap-3 md:gap-5">
            <div>
              <span className="w-[100px] inline-block">판매자</span>
              <span>노랑풍선</span>
            </div>
            <div>
              <span className="w-[100px] inline-block">상품 가격</span>
              <span>1,000,000원</span>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <Button btnInfo={buyBtnInfo} />
          </div>
        </div>
        <div className="">
        </div>
      </div>
      <div className="mb-20">
        <h1 className="text-2xl md:text-3xl font-bold mb-5">관련 교통편</h1>
        <div className="">
          <form onSubmit={handleVehicle} className="flex flex-col md:flex-row gap-10 md:gap-0 justify-between items-start text-lg font-bold">
            <div className="text-center cursor-pointer w-[120px] flex flex-row rounded-md h-fit overflow-hidden bg-LINE_POINT_COLOR">
              <span className={(isTrain ? selectVehicle : normalVehicle)} onClick={handleisTrain}>기차</span>
              <span className={(isBus ? selectVehicle : normalVehicle)} onClick={handleisBus}>버스</span>
            </div>
            <div className="flex flex-col gap-5">
              <div>
                <span>출발</span>
                <input type="text" name="depature" value={location.depature} onChange={changeLocationValue} className={locationStyle} />
              </div>
              <div>
                <span>도착</span>
                <input type="text" name="arrival" value={location.arrival} onChange={changeLocationValue} className={locationStyle} />
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div>
                {/* 디테일한 디자인 생각 좀 해보고 구현할게요. */}
                {/* 날짜 선택 스크립트 구현 예정 */}
                <span>날짜</span>
                <input type="date" value={selectedDate} onChange={handleDateChange} className={locationStyle}/>
              </div>
              <div>
                <span>시간</span>
                {/*  */}
                <input type="time" value={selectedTime} onChange={handleTimeChange} className={locationStyle} />
              </div>
            </div>
            <div className="w-full md:w-fit flex justify-center items-center">
              <Button btnInfo={searchBtnInfo} />
            </div>
          </form>
        </div>
        <div className="w-full h-[200px] bg-LINE_POINT_COLOR rounded-md mt-5 flex justify-center items-center">
          <div className="flex flex-col justify-around">
            <h3 className="text-xl font-bold">여행 일정을 공유해주세요!</h3>
            <div className="w-fit mx-auto">
              <Train width="130px" height="130px" />
            </div>
          </div>
        </div>
      </div>
      <div className="pb-20">
        <h1 className="text-2xl md:text-3xl font-bold mb-5">관련상품</h1>
        <div className="w-full flex flex-col gap-10 md:gap-10 md:flex-row justify-between items-center">
          {Array.from(Array(3), (_, index) => (
            <ProductCardItems key={index} />
          ))}
        </div>
      </div>
    </div>
    </>
  )
}