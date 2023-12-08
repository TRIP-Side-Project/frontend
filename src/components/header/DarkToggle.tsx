import { useState } from "react";
import Sun from "@/assets/svg/Sun";
import Moon from "@/assets/svg/Moon";

const DarkToggle = () => {
	const [isDark, setIsDark] = useState(false);

	const handleDarkToggle = () => {
		setIsDark(!isDark);
	};

	const toggleX = isDark ? `translate-x-11` : "after:-translate-x-10";
	const moonColor = isDark ? "#FAFAFA" : "#1C274C";
	const sunColor = isDark ? "#1C274C" : "#FAFAFA";

	return (
		<div className="relative w-[77px] h-[29px] rounded-full bg-LINE_POINT_COLOR flex-row flex items-center justify-between ">
			<span
				className={`transition duration-300 absolute z-10 w-[32px] p-auto h-full bg-MAIN_COLOR flex items-center justify-center rounded-full drop-shadow-toggle ${toggleX}`}
			></span>

			<div
				className="z-30 flex items-center justify-center px-1.5 "
				onClick={handleDarkToggle}
			>
				<Sun fillColor={sunColor} width={"20px"} height={"20px"} />
			</div>

			<div
				className="z-30 flex items-center justify-center px-1.5"
				onClick={handleDarkToggle}
			>
				<Moon fillColor={moonColor} width={"20px"} height={"20px"} />
			</div>
		</div>
	);
};

export default DarkToggle;
