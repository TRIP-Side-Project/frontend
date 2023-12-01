import Sun from "@/assets/Sun";
import Moon from "@/assets/Moon";

const DarkToggle = () => {
	return (
		<div className="w-[77px] h-[29px] rounded-full bg-LINE_POINT_COLOR flex-row flex items-center">
			<div className="w-[38px] rounded-full h-full p-auto bg-MAIN_COLOR drop-shadow-toggle flex items-center justify-center">
				<Sun fillColor={"#FAFAFA"} width={"18px"} height={"18px"} />
			</div>
			<div className="w-[38px] p-auto flex items-center justify-center">
				<Moon fillColor={"#333333"} width={"18px"} height={"18px"} />
			</div>
		</div>
	);
};

export default DarkToggle;
