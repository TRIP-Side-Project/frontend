import SeoulImage from "@/assets/img/seoul.png";
import GangreoungImage from "@/assets/img/gangreoung.png";
import BusanImage from "@/assets/img/busan.png";
import JejuImage from "@/assets/img/jeju2.png";
import Gyeongju from "@/assets/img/gyeongju.png";
import Jeonju from "@/assets/img/Jeonju.jpeg";
import Andong from "@/assets/img/Andong.jpeg";
import Daegu from "@/assets/img/Daegu.jpeg";
import Daejeon from "@/assets/img/Daejeon.jpg";
import Mokpo from "@/assets/img/Mokpo.png";
import Yeosu from "@/assets/img/Yeosu.png";
import Namhae from "@/assets/img/Namhae.jpg";

import NextOutline from "@/assets/svg/NextOutline";
import RegionProductTheme from "@/components/regionProductTheme/RegionProductTheme";
import { useState } from "react";

const regionArr = [
	"서울",
	"강원",
	"춘천",
	"경주",
	"전주",
	"안동",
	"대구",
	"대전",
	"목포",
	"여수",
	"경남",
	"부산",
	"제주",
];

const imgArr = [
	SeoulImage,
	GangreoungImage,
	BusanImage,
	Gyeongju,
	Jeonju,
	Andong,
	Daegu,
	Daejeon,
	Mokpo,
	Yeosu,
	Namhae,
	BusanImage,
	JejuImage,
];

const RegionTravel = () => {
	const [num, setNum] = useState(0);
	const itemPerPage = 4;
	// console.log(num);
	const handlePrev = () => {
		setNum((prev) => {
			if (prev === 0) {
				return regionArr.length - 1;
			} else return prev - 1;
		});
	};

	const handleNext = () => {
		setNum((prev) => {
			if (prev === regionArr.length - 1) {
				return 0;
			} else return prev + 1;
		});
	};

	const showCardsSlide = [];
	for (let i = 0; i < itemPerPage; i++) {
		const idx = (num + i) % regionArr.length;
		showCardsSlide.push(
			<RegionProductTheme
				key={idx}
				region={regionArr[idx]}
				regionImgUrl={imgArr[idx]}
			/>,
		);
	}

	return (
		<div className="h-[250px] flex justify-center md:justify-between relative">
			<button
				className="absolute left-0 z-10 transform rotate-180 -translate-y-1/2 cursor-pointer group top-1/2"
				onClick={(e) => {
					e.preventDefault();
					handlePrev();
				}}
			>
				<NextOutline fillColor="#666666" width="40px" height="40px" />
			</button>
			<button
				className="absolute right-0 z-10 transform -translate-y-1/2 cursor-pointer group top-1/2"
				onClick={(e) => {
					e.preventDefault();
					handleNext();
				}}
			>
				<NextOutline fillColor="#666666" width="40px" height="40px" />
			</button>
			{
				innerWidth > 768 && showCardsSlide
				// (
				// 	<>
				// 		{regionArr.slice(num, num + itemPerPage).map((region, idx) => (
				// 			<RegionProductTheme
				// 				key={num + idx}
				// 				region={region}
				// 				regionImgUrl={imgArr[num + idx]}
				// 			/>
				// 		))}
				// 	</>

				// )
			}
			{innerWidth <= 768 && (
				<RegionProductTheme
					key={num}
					region={regionArr[num]}
					regionImgUrl={imgArr[num]}
				/>
			)}
		</div>
	);
};

export default RegionTravel;
