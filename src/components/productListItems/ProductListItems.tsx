import Bookmark from "../Bookmark/Bookmark";

export default function ProductListItems () {

  
  return (
    <>
    <div className=" mx-10 md:mx-0 flex flex-col justify-start items-start md:justify-normal md:items-stretch md:flex-row relative my-24 cursor-pointer">
      <div className="w-full md:w-1/3 h-[250px] bg-rose-300 rounded-md"></div>
      <div className="md:pl-5 flex flex-col md:justify-between">
        <div>
          <h2 className="text-2xl md:text-3xl mb-5 mt-5 md:mt-0 font-bold">여행 상품명</h2>
          <div className="text-base md:text-xl flex gap-5 mb-5">
            <span>#대분류</span>
            <span>#중분류</span>
            <span>#소분류</span>
          </div>
        </div>
        <div className="md:pb-3">
          <div>
            <span className="w-[100px] inline-block font-bold">판매자</span>
            <span>노랑풍선</span>
          </div>
          <div>
            <span className="w-[100px] inline-block font-bold">상품 가격</span>
            <span>1,000,000원</span>
          </div>
        </div>
      </div>
      <Bookmark />
    </div>
    </>
  )
}