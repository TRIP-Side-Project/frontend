import Bookmark from "../Bookmark/Bookmark";

export default function ProductListItems () {
  
  return (
    <>
    <div className="flex align-center relative my-24 cursor-pointer">
      <div className="w-1/3 h-[250px] bg-rose-300 rounded-md"></div>
      <div className="pl-5 flex flex-col justify-between align-center">
        <div>
          <h2 className="text-3xl mb-5 font-bold">여행 상품명</h2>
          <div className="text-xl flex gap-5 mb-5">
            <span>#대분류</span>
            <span>#중분류</span>
            <span>#소분류</span>
          </div>
        </div>
        <div className="pb-3">
          <div>
            <span className="w-[100px] inline-block">판매자</span>
            <span>노랑풍선</span>
          </div>
          <div>
            <span className="w-[100px] inline-block">상품 가격</span>
            <span>1,000,000원</span>
          </div>
        </div>
      </div>
      <Bookmark />
    </div>
    </>
  )
}