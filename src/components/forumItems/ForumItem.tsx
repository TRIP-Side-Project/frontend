// import Editor from "@/assets/svg/Editor";
import { useState } from "react";

const ForumItem = () => {
	const propsBg = "BAISC_WHITE";
	const itemWrapper = `w-full whitespace-nowrap h-[70px] py-3 items-center flex flex-row 
	justify-between text-lg font-base text-BASIC_BLACK border-b border-LIGHT_GRAY_COLOR bg-${propsBg} 
	hover:font-bold hover:cursor-pointer`;
	const [isEditor] = useState("user");
	//bg-LINE_POINT_COLOR
	//bg-BASIC_WHITE

	return (
		<div className={itemWrapper}>
			<div className="grid place-items-center basis-1/6 bg-text-POINT_COLOR">
				{isEditor === "editor" ? (
					<div className="w-24 px-3 py-1 text-sm text-center rounded-2xl bg-SPECIAL_COLOR">
						에디터 추천
					</div>
				) : (
					<div className="w-24 px-3 py-1 text-sm text-center border-2 rounded-2xl border-MAIN_COLOR">
						여행 후기
					</div>
				)}
			</div>
			<div className="px-3 basis-3/6">
				에디터 소개하는 강릉 여행 ~ <span className="text-sm">(5)</span>
			</div>
			<div className="basis-1/6 ">
				{/* <Editor fillColor={""} width={"5px"} height={"5px"} /> */}
				MD.Ari
			</div>
			<div className="basis-1/6 ">2023.11.24</div>
			<div className="basis-1/6 ">123</div>
			<div className="basis-1/6 ">1004</div>
		</div>
	);
};

export default ForumItem;
