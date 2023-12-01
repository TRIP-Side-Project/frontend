import { useState } from "react";

import DarkToggle from "@/components/header/DarkToggle";
import Topnav from "./Topnav";

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [navType, setNavType] = useState<boolean | undefined>(undefined);
	const onBlur = () => setIsOpen(false);

	const navBtn =
		"h-full hover:bg-BASIC_BLACK hover:text-BASIC_WHITE px-9 focus:bg-BASIC_BLACK focus:text-BASIC_WHITE ";

	const openNav = (trip: null | string) => {
		if (trip === "region") {
			//console.log("지역별 여행");
			setNavType(true);
			setIsOpen(true);
		} else {
			//console.log("테마별 여행");
			setNavType(false);
			setIsOpen(true);
		}
	};

	return (
		<>
			<div className="w-full h-[130px] bg-BASIC_WHITE border-b-2 border-LIGHT_GRAY_COLOR flex flex-col">
				<div className="flex justify-end w-full py-3 border-b-2 border-LIGHT_GRAY_COLOR text-LIGHT_GRAY_COLOR">
					<DarkToggle />{" "}
					<button className="px-9 hover:text-BASIC_BLACK">로그인</button>
					<button className="px-9 hover:text-BASIC_BLACK">회원가입</button>
				</div>
				<div className="flex items-center justify-between text-2xl font-bold grow text-BASIC_BLACK">
					<div className="text-4xl text-MAIN_COLOR px-9 font-bolder">
						TRIPTRIP
					</div>
					<div className="items-center h-full whitespace-nowrap">
						<button
							className={navBtn}
							onBlur={onBlur}
							onMouseEnter={() => {
								setIsOpen(true);
								setNavType(true);
							}}
							onClick={() => openNav("region")}
						>
							지역별 여행
						</button>
						<button
							className={navBtn}
							onBlur={onBlur}
							onMouseEnter={() => {
								setIsOpen(true);
								setNavType(false);
							}}
							onClick={() => openNav(null)}
						>
							테마별 여행
						</button>
						<button className={navBtn}>여행 포럼</button>
					</div>
				</div>
			</div>
			{isOpen && <Topnav trip={navType} />}
		</>
	);
};

export default Header;
