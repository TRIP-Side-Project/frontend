import BackToList from "@/assets/svg/BackToList";
import Button, { btnAttributes } from "@/common/button/Button";
import Bookmark from "@/components/Bookmark/Bookmark";
import ProductCardItems from "@/components/productCardItems/ProductCardItems";
import SearchVehicle from "@/components/searchVehicle/SearchVehicle";
import { useNavigate } from "react-router-dom";

export default function ProductListDetail () {

  const buyBtnInfo: btnAttributes = {
		width: "150px",
		position: "right",
		text: "구매하러 가기",
		type: "circle",
	};
  
  // 뒤로가기 버튼
  const navigate = useNavigate();
  const backButton = () => {
    navigate(-1);
  }

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
      <SearchVehicle />
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