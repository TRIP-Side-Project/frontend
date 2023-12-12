import { useState } from "react";
import Hamburger from "@/assets/svg/Hamburger";
import Close from "@/assets/svg/Close";

type NavTypes = {
	openNav: (trip: null | string) => void;
};

const Mmenu = ({ openNav }: NavTypes) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="md:hidden">
			<div className="pr-5">
				<button onClick={() => setIsOpen(!isOpen)}>
					{isOpen ? (
						<Close width={"38px"} height={"38px"} />
					) : (
						<Hamburger width={"42px"} height={"42px"} />
					)}
				</button>
			</div>
			{isOpen && (
				<div className="absolute left-0 flex flex-col w-screen shadow-md bg-BASIC_WHITE top-32">
					<button
						className="py-8 border-b font-xl border-LIGHT_GRAY_COLOR"
						onClick={() => openNav("region")}
					>
						지역별 여행
					</button>
					<button
						className="py-8 border-b font-xl border-LIGHT_GRAY_COLOR"
						onClick={() => openNav(null)}
					>
						테마별 여행
					</button>
					<button className="py-8 font-xl" onClick={() => openNav("/forum")}>
						여행 포럼
					</button>
				</div>
			)}
		</div>
	);
};

export default Mmenu;
