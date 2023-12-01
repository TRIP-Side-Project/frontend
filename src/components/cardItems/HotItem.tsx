import Temp from "@/assets/img/temp.png";
import HotBedge from "./HotBedge";

const HotItem = () => {
	return (
		<div className="relative flex flex-col p-3 border w-72 h-fit border-LIGHT_GRAY_COLOR text-BASIC_BLACK bg-BASIC_WHITE">
			<div className="">
				<img src={Temp} alt="temp Image" className="object-cover h-48 w-62" />
			</div>
			<div className="relative flex-1 text-xl font-bold">
				<p className="z-50 my-3"> 최고의 경주 여행!</p>
				<HotBedge />
				<span className="absolute left-0 inline p-2 bottom-1.5 realtive bg-SPECIAL_COLOR z-10"></span>
			</div>
			<div className="text-sm font-light text-right text-BASIC_BLACK">
				작성자
			</div>
		</div>
	);
};

export default HotItem;
