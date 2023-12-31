import jeju1 from "@/assets/img/jeju1.png";
import ArrowRight from "@/assets/svg/ArrowRight";

const recommendProductItems = () => {
  return (
    <>
      <div className="w-4/5 md:w-[48%] cursor-pointer shadow-md p-3 overflow-hidden relative bg-ITEM_BG_COLOR rounded-md flex gap-3 align-center">
        <div className= "z-10 absolute top-0 px-2 py-3 bg-red-500 left-5 text-BASIC_WHITE rounded-b-md">
          <p>HOT</p>
        </div>
        <div className="w-1/2 md:w-[250px] h-full overflow-hidden rounded-lg">
          <img
            src={jeju1}
            alt="jeju image"
            className="scale-x-125 w-full h-full"
          />
        </div>
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-BASIC_BLACK">Gyeong-ju</h2>
          <div className="absolute top-4 md:top-5 right-1">
            <ArrowRight
              fillColor="#cccccc"
              width="20px"
              height="20px"
            />
          </div>
          <p className="pt-2 text-xs md:text-sm text-LIGHT_GRAY_COLOR">
            @아리아리랑 투어
          </p>
        </div>
        <div className="absolute bottom-0 right-0 flex flex-col gap-1">
          <p className="pr-3 text-right text-sm md:text-base text-BASIC_BLACK">₩ 1,000,000원</p>
          <p className="px-5 py-1 text-lg md:text-2xl bg-yellow-400 rounded-tl-2xl text-BASIC_WHITE "># A.K.A 경주</p>
        </div>
			</div>
    </>
  )
}

export default recommendProductItems;