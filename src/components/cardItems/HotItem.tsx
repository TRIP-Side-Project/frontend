import Temp from "@/assets/img/temp.png";
import HotBedge from "./HotBedge";

const HotItem = () => {
	return (
		<div className="relative flex flex-col p-3 border w-72 h-fit border-LIGHT_GRAY_COLOR text-BASIC_BLACK bg-BASIC_WHITE">
			<div className="">
				<img src={Temp} alt="temp Image" className="object-cover h-48 w-62" />
			</div>
			<div className="flex-1 text-xl font-bold">
				<div className="relative inline-block my-3">
					<p className="relative z-50">최고의 경주 여행!</p>
					<span className="absolute bottom-0 left-0 w-full p-2 opacity-75 realtive bg-SPECIAL_COLOR"></span>
					<HotBedge />
				</div>
			</div>

			<div className="text-sm font-light text-right text-BASIC_BLACK">
				작성자
			</div>
		</div>
	);
};

export default HotItem;
