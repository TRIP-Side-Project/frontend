import Temp from "@/assets/img/temp.png";

const CardItem = () => {
	return (
		<div className="w-[348px] h-[360px] bg-BASIC_WHITE text-BASIC_BLACK rounded-lg flex flex-col">
			<div className="m-3 rounded-lg">
				<img src={Temp} alt="tempImage" />
			</div>
			<div className="text-xl font-medium">경주 여행 첨성대</div>
			<div className="text-sm font-light text-LIGHT_GRAY_COLOR">
				@아리아리랑 투어
			</div>
			<div className="font-medium text-right">₩ 1,000,000원</div>
		</div>
	);
};

export default CardItem;
