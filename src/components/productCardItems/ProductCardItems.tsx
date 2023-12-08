import jeju from "@/assets/img/jeju1.png";

export default function ProductCardItems () {
  return (
    <>
      <div className="bg-ITEM_BG_COLOR w-72 h-[360px] p-3 rounded-md shadow-md cursor-pointer">
        <div className="w-full h-[220px] relative bg-rose-100 rounded-md overflow-hidden">
          <div className="w-full h-full">
            <img src={jeju} alt="jeju image" className="w-full h-full"/>
          </div>
          <p className="absolute bottom-0 right-0 bg-BASIC_BLACK text-BASIC_WHITE font-medium rounded-tl-md text-sm px-5 py-1">4박 5일패키지</p>
        </div>
        <div className="w-full pt-3 text-BASIC_BLACK">
          <h3 className="text-2xl mb-2">Gyeong-ju</h3>
          <p className="text-LIGHT_GRAY_COLOR">@아리아리랑 투어</p>
          <span className="float-right mt-3">₩ 1,000,000원</span>
        </div>
      </div>
    </>
  )
}