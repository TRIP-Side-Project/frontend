import { useState } from "react";
import Hamburger from "@/assets/svg/Hamburger";
import Close from "@/assets/svg/Close";
import { useNavigate } from "react-router-dom";

type NavTypes = {
	openNav: (trip: null | string) => void;
	onSubMenuClose: () => void;
};

const Mmenu = ({ openNav, onSubMenuClose }: NavTypes) => {
	const [isOpen, setIsOpen] = useState(false);
	
	const navigator = useNavigate();
	const moveToForum = () => {
		navigator('/forum');
	}

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
				<div className="z-10 absolute left-0 flex flex-col w-screen shadow-md bg-BASIC_WHITE top-32">
					<button
						className="py-8 border-b font-xl border-LIGHT_GRAY_COLOR"
						onClick={() => {
							openNav("region");
							setIsOpen(!isOpen);
						}}
					>
						지역별 여행
					</button>
					<button
						className="py-8 border-b font-xl border-LIGHT_GRAY_COLOR"
						onClick={() => {
							openNav(null);
							setIsOpen(!isOpen);
						}}
					>
						테마별 여행
					</button>
					<button
						className="py-8 font-xl" 
						onClick={() => {
							// openNav("/forum");
							setIsOpen(!isOpen);
							onSubMenuClose();
							moveToForum();
						}}>
						여행 포럼
					</button>
				</div>
			)}
		</div>
	);
};

export default Mmenu;
