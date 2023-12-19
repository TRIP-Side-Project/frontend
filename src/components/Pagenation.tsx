import { useState } from "react";
import ArrowLeft from "@/assets/svg/ArrowLeft";
import ArrowRight from "@/assets/svg/ArrowRight";

const Pagenation = () => {
	const [activeBtn, setActiveBtn] = useState<number>(1);
	// const activeBtn = isClick ? "font-bold text-BTN_HOVER_COLOR" : "";
	// const numBtn = `mx-2 ${activeBtn}`;

	const handleClick = (index: number) => {
		setActiveBtn(index);
	};
	return (
		<div className="flex flex-row justify-center my-5 text-sm font-bold sm:text-xl text-BASIC_BLACK dark:text-BASIC_WHITE">
			<button className="mr-2 rounded-md dark:bg-MAIN_COLOR bg-LINE_POINT_COLOR">
				<ArrowLeft fillColor={""} width={"20px"} height={"20px"} />
			</button>
			{Array.from(Array(5), (_, index) => (
				<button
					key={index + 1}
					className={`mx-2 ${
						activeBtn === index + 1 ? "font-bold text-BTN_HOVER_COLOR" : ""
					}`}
					onClick={() => handleClick(index + 1)}
				>
					{index + 1}
				</button>
			))}
			<button className="ml-2 rounded-md dark:bg-MAIN_COLOR bg-LINE_POINT_COLOR">
				<ArrowRight fillColor={""} width={"20px"} height={"20px"} />
			</button>
		</div>
	);
};

export default Pagenation;
