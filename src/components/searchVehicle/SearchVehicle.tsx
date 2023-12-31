import Train from "@/assets/svg/Train";
import Button, { btnAttributes } from "@/common/button/Button";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { ChangeEvent, FormEventHandler, useEffect, useState } from "react";

const SearchVehicle = () => {

  interface locationInfo {
    depature: string;
    arrival: string;
  }

  interface LineListInfo {
    depatureTime: string | null;
    grade: string | null;
    busCorName: string | null;
    remainingSeats: string | null;
  }

  interface LineListData {
    lineData: LineListInfo[]; 
  }

  interface locationNumInfo {
    depatureNum: number | null;
    arrivalNum: number | null;
  }

  const searchBtnInfo: btnAttributes = {
    width: "100px",
    position: "center",
    text: "검색",
    type: "square"
  }
  
  // style
  const locationStyle = "ml-10 md:ml-2 bg-LINE_POINT_COLOR rounded-md w-[190px] px-2 py-1 font-light focus:outline-MAIN_COLOR";
  const selectVehicle = "px-3 py-1 text-BASIC_WHITE bg-MAIN_COLOR w-full text-center";
  
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

  const [location, setLocation] = useState<locationInfo>({
    depature: "",
    arrival: "",
  });

  const [numLocation, setNumLocation] = useState<locationNumInfo>({
    depatureNum: null,
    arrivalNum: null,
  });

  const changeLocationValue = (event:ChangeEvent<HTMLInputElement>) => {
    setLocation({
      ...location,
      [event.target.name]: event.target.value
    })
  }

  // 교통편 조회
  const [lineList, setLineList] = useState(false); // 조회했을때 리스트가 있는지
  const [noLineMessage, setNoLineMessage] = useState(null); // 조회했을때 리스트가 없을 때 안내 문구
  const [lineListData, setLineListData] = useState<LineListData>({lineData: []})


  interface DepatureDataInfo {
    depatureTerminal: string, 
    arrivalTerminal: string, 
  }

  interface DepatureData {
    terminalData: DepatureDataInfo[]; 
  }

  interface ListItem {
    TER_NAM: string;
  }

  interface LineListItem {
    tim_tim: string;
    bus_gra_o: string;
    cor_nam: string;
    rem_cnt: string;
  }

  const [depatureDataArray, setDepatureDataArray] = useState<DepatureData>({terminalData: []});

  const findMutation = useMutation({
    mutationFn: () => {
      return axios.get(
        `/proxy/koLoadInfo/v1/load_info/010`,
        // 개발환경에서는 /proxy 로
        {
          headers: {
            "x-Gateway-APIKey": "d2338a0c-d836-421f-aaa3-0679c3884a4a"
          }
        }
      );
    }
  })

  const findTerNum = async () => {
      try {
        const response = await findMutation.mutateAsync();
        const responseData = response.data.response.ter_list;
        const depatureData = [responseData.filter((item: ListItem) => item.TER_NAM.includes(location.depature))];
        const arrivalData = [responseData.filter((item: ListItem) => item.TER_NAM.includes(location.arrival))];
        // console.log(response.data.response.ter_list);
        const depatureTerminalData = depatureData[0].map((item: ListItem) => ({
          depatureTerminal: item.TER_NAM,
        }));

        const arrivalTerminalData = arrivalData[0].map((item: ListItem) => ({
          arrivalTerminal: item.TER_NAM,
        }));

        // console.log(depatureTerminalData[0]);
        // console.log(arrivalTerminalData[0]);
        setDepatureDataArray(prevState => ({
            ...prevState,
            terminalData: [...depatureTerminalData, ...arrivalTerminalData],
          }));

        setNumLocation({
          ...numLocation,
          depatureNum: depatureData[0][0].TER_COD,
          arrivalNum: arrivalData[0][0].TER_COD
        });
      } catch (error) {
        console.log("Error : " + error);
        // alert("시스템 점검 중 입니다!");
      }
    };
  
  useEffect(() => {
    findTerNum();
  }, [location])
  // 청주가 들어가는 검색어로 입력 *청주* 이런 느낌으로 해야함
  // 검색어 드롭다운으로 미리 보여주고 선택하게 해도 좋을 듯
  // console.log(numLocation);
  // console.log(location);

  const searchMutation = useMutation({
    mutationFn: () => {
      const searchDate = selectedDate.split("-").join("");
      const searchTime = selectedTime.split(":").join("");
      return axios.get(
          `/proxy/koIbtList/v1/ibt_list/${searchDate}/${searchTime}/${numLocation.depatureNum}/${numLocation.arrivalNum}/0/0/9`,
          {
          headers: {
            "x-Gateway-APIKey": "f7f4cfab-c6e5-4c2d-ba83-283349af63e4"
          }
        })
    }
  });

  const handleVehicle:FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    setLineList(false);
      try{
        const searchResponse = await searchMutation.mutateAsync();
        if(searchResponse.data.message === "정상"){
          setLineList(true);
          const data = searchResponse.data.response.line_list;
          setLineListData(prevState => ({
            ...prevState,
            lineData: data.map((item: LineListItem) => ({
              depatureTime: item.tim_tim,
              grade: item.bus_gra_o,
              busCorName: item.cor_nam,
              remainingSeats: item.rem_cnt,
            })),
          }));
        }else {
          setNoLineMessage(searchResponse.data.message);
        }
      } catch (error) {
        console.log("Error : " + error);
      }
    }
    console.log(depatureDataArray);

  return (
    <div className="mb-20">
        <h1 className="text-2xl md:text-3xl font-bold mb-5">관련 교통편</h1>
        <div className="">
          <form onSubmit={handleVehicle} className="flex flex-col md:flex-row gap-10 md:gap-0 justify-between items-start text-lg font-bold">
            <div className="cursor-pointer overflow-hidden rounded-md w-[100px] border flex justify-center items-center">
              <span className={selectVehicle}>버스</span>
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
                <span>날짜</span>
                <input type="date" value={selectedDate} onChange={handleDateChange} className={locationStyle}/>
              </div>
              <div>
                <span>시간</span>
                <input type="time" value={selectedTime} onChange={handleTimeChange} className={locationStyle} />
              </div>
            </div>
            <div className="w-full md:w-fit flex justify-center items-center">
              <Button btnInfo={searchBtnInfo} />
            </div>
          </form>
        </div>
        <div className={`w-full h-[200px] bg-LINE_POINT_COLOR rounded-md mt-5 flex justify-center items-center relatvive ${lineList && "overflow-y-scroll"}`}>
          <div className="w-full h-full">
            {!lineList && noLineMessage && <h3 className="flex justify-center items-center h-full">{noLineMessage}</h3>}
            {!lineList && !noLineMessage && 
              <div className="w-full h-full flex flex-col justify-center items-center">
                <h3 className="text-xl font-bold">여행 일정을 공유해주세요!</h3>
                <div className="w-fit mx-auto">
                  <Train width="130px" height="130px" />
                </div>
              </div>
            }
            {lineList && 
              <table className="table-auto w-full h-full text-center text-sm md:text-base">
                <thead className="sticky top-0 z-1 bg-MAIN_COLOR">
                  <tr className="">
                    <th>고속회사명</th>
                    <th>출발시간</th>
                    <th>좌석등급</th>
                    <th>잔여좌석</th>
                  </tr>
                </thead>
                <tbody>
              {lineListData.lineData.map((item, index) => (
                  <tr key={index}>
                    <td>{item.busCorName}</td>
                    <td>{item.depatureTime?.slice(0, 2) + "시 " + item.depatureTime?.slice(2, 4) + "분"}</td>
                    <td>{(Number(item.grade) === 1 ? "우등" 
                    : (Number(item.grade) === 2 ? "고속" 
                    : (Number(item.grade) === 3 ? "심야우등" 
                    : (Number(item.grade) === 7 ? "프리미엄" 
                    : (Number(item.grade) === 8 ? "심야프리미엄" : "")
                    ))))}</td>
                    <td>{item.remainingSeats + "개"}</td>
                  </tr>
              ))}
              </tbody>
              </table>
            }
          </div>
        </div>
      </div>
  )
}

export default SearchVehicle;