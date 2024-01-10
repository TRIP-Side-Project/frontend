import NextOutline from "@/assets/svg/NextOutline";

import snowTheme from "@/assets/img/snowTheme.jpg";
import beachTheme from "@/assets/img/beachTheme.jpg";
import mountainTheme from "@/assets/img/mountainTheme.jpg";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { menuSelector } from "@/store/menuState";
import { useNavigate } from "react-router-dom";

const themeArr = [
	{
		img: snowTheme,
		title: "눈꽃여행",
	},
	{
		img: beachTheme,
		title: "바닷가여행",
	},
	{
		img: mountainTheme,
		title: "산길여행",
	},
];

interface ThemeTypes {
	img: string;
	title: string;
}

const ThemeTravel = () => {
	const themeTitleStyle =
		"absolute text-xl md:text-2xl text-BASIC_WHITE bottom-2 right-2";
	const [themeNum, setThemeNum] = useState(0);
	const setRegion = useSetRecoilState(menuSelector);
	const navigation = useNavigate();

	const handlePrev = () => {
		setThemeNum((prev) => {
			if (prev === 0) {
				return 2;
			} else return prev - 1;
		});
	};

	const handleNext = () => {
		setThemeNum((prev) => {
			if (prev === 2) {
				return 0;
			} else return prev + 1;
		});
	};

	const handleRegion = (code: string) => {
		if (code === "눈꽃여행") {
			setRegion("눈꽃");
		} else if (code === "바닷가여행") {
			setRegion("바다");
		} else {
			setRegion("트레킹");
		}

		navigation("/products");
	};

	return (
		<>
			{innerWidth > 768 && (
				<div className="h-[200px] w-full flex justify-between">
					{themeArr &&
						themeArr.map((el: ThemeTypes, idx: number) => (
							<div
								key={idx}
								className="group w-[30%] h-full  overflow-hidden rounded-md relative cursor-pointer"
								onClick={() => handleRegion(el.title)}
							>
								<img
									src={el.img}
									alt="snowTheme"
									className="object-cover w-full h-full "
								/>
								<h2 className={`${themeTitleStyle} z-30`}>{el.title}</h2>
								<div className="absolute top-0 left-0 flex flex-col items-center justify-center w-full duration-300 group-hover:bg-black group-hover:h-full group-hover:opacity-50"></div>
							</div>
						))}
					{/* <div className="group w-[30%] h-full bg-MAIN_COLOR overflow-hidden rounded-md relative cursor-pointer">
						<img
							src={snowTheme}
							alt="snowTheme"
							className="object-cover w-full h-full "
						/>
						<h2 className={`${themeTitleStyle} z-30`}>눈꽃여행</h2>
						<div className="absolute top-0 left-0 flex flex-col items-center justify-center w-full duration-300 group-hover:bg-black group-hover:h-full group-hover:opacity-50"></div>
					</div>

					<div className="group w-[30%] h-full overflow-hidden  bg-MAIN_COLOR rounded-md relative cursor-pointer">
						<img
							src={beachTheme}
							alt="beach Theme"
							className="object-cover w-full h-full"
						/>
						<h2 className={`${themeTitleStyle} z-30`}>바닷가여행</h2>
						<div className="absolute top-0 left-0 flex flex-col items-center justify-center w-full duration-300 group-hover:bg-black group-hover:h-full group-hover:opacity-50"></div>
					</div>
					<div className="group w-[30%] h-full overflow-hidden  bg-MAIN_COLOR rounded-md relative cursor-pointer">
						<img
							src={mountainTheme}
							alt="mountainTheme"
							className="object-cover w-full h-full"
						/>
						<h2 className={`${themeTitleStyle} z-30`}>산길여행</h2>
						<div className="absolute top-0 left-0 flex flex-col items-center justify-center w-full duration-300 group-hover:bg-black group-hover:h-full group-hover:opacity-50"></div>
					</div> */}
				</div>
			)}
			{innerWidth <= 768 && (
				<div className="relative h-[200px] w-full flex justify-center md:justify-between">
					<button
						className="absolute left-0 z-10 transform rotate-180 -translate-y-1/2 cursor-pointer top-1/2"
						onClick={(e) => {
							e.preventDefault();
							handlePrev();
						}}
					>
						<NextOutline fillColor="#666666" width="40px" height="40px" />
					</button>
					<button
						className="absolute right-0 z-10 transform -translate-y-1/2 cursor-pointer top-1/2"
						onClick={(e) => {
							e.preventDefault();
							handleNext();
						}}
					>
						<NextOutline fillColor="#666666" width="40px" height="40px" />
					</button>
					<div className="group w-[250px] md:w-[30%] h-full overflow-hidden rounded-md relative cursor-pointer">
						<div className="absolute top-0 left-0 flex flex-col items-center justify-center w-full duration-300 group-hover:bg-black group-hover:h-full group-hover:opacity-50"></div>

						<img
							key={`m-theme${themeNum}`}
							src={themeArr[themeNum].img}
							alt="snowTheme"
							className="object-cover w-full h-full "
						/>
						<h2 className={`${themeTitleStyle} z-30`}>
							{themeArr[themeNum].title}
						</h2>
					</div>
				</div>
			)}
		</>
	);
};

export default ThemeTravel;
