import slider1 from "@/assets/img/slider/slider1.png";
import slider2 from "@/assets/img/slider/slider2.png";
import slider3 from "@/assets/img/slider/slider3.png";
import slider4 from "@/assets/img/slider/slider4.png";
import slider5 from "@/assets/img/slider/slider5.png";
import slider6 from "@/assets/img/slider/slider6.png";
import slider7 from "@/assets/img/slider/slider7.png";
import slider8 from "@/assets/img/slider/slider8.png";
import slider9 from "@/assets/img/slider/slider9.png";
import slider10 from "@/assets/img/slider/slider10.png";
import slider11 from "@/assets/img/slider/slider11.png";
import slider12 from "@/assets/img/slider/slider12.png";
import slider13 from "@/assets/img/slider/slider13.png";
import { useEffect, useState } from "react";
const Slider2 = () => {
	const imgArr = [
		slider1,
		slider2,
		slider3,
		slider4,
		slider5,
		slider6,
		slider7,
		slider8,
		slider9,
		slider10,
		slider11,
		slider12,
		slider13,
	];

	const [currentIndex, setCurrentIndex] = useState(0);

	const prevImage = () => {
		setCurrentIndex((prev) => (prev === 0 ? imgArr.length - 1 : prev - 1));
	};

	const nextImage = () => {
		setCurrentIndex((prev) => (prev === imgArr.length - 1 ? 0 : prev + 1));
	};

	useEffect(() => {
		// 이미지를 자동으로 변경하기 위한 타이머 설정
		const intervalId = setInterval(() => {
			// 다음 이미지로 넘기기
			setCurrentIndex((prevIndex) =>
				prevIndex === imgArr.length - 1 ? 0 : prevIndex + 1,
			);
		}, 3000); // 3초마다 이미지 변경

		// 컴포넌트가 언마운트될 때 타이머 해제
		return () => clearInterval(intervalId);
	}, []); // 빈 배열을 전달하여 컴포넌트가 처음 렌더링될 때만 실행

	return (
		<div className="relative w-full ">
			<div className="relative h-80 overflow-hidden rounded-lg md:h-[420px] ">
				{imgArr.map((img, idx) => (
					<div className="" key={idx}>
						{/* 첫 번째 이미지에 대한 배경 처리 */}
						<img
							src={img}
							alt={`Image ${idx}`}
							className="absolute top-0 left-0 w-full h-full "
							style={{
								transition: "opacity 0.7s ease-in-out",
								opacity: idx === currentIndex ? 0.6 : 0, // 현재 이미지면 투명도 1, 아니면 0
							}}
						/>
						{/* 주 이미지 처리 */}
						<img
							src={img}
							alt={`Image ${idx}`}
							className="absolute w-4/5 transform -translate-x-1/2 -translate-y-1/2 h-3/4 top-1/2 left-1/2"
							style={{
								transition: "opacity 0.7s ease-in-out",
								opacity: idx === currentIndex ? 1 : 0, // 현재 이미지면 투명도 1, 아니면 0
							}}
						/>
					</div>
				))}
			</div>
			<button
				type="button"
				className="absolute top-0 z-30 items-center justify-center hidden h-full px-4 cursor-pointer md:flex start-0 group focus:outline-none"
				onClick={prevImage}
			>
				<span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
					<svg
						className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 6 10"
					>
						<path
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M5 1 1 5l4 4"
						/>
					</svg>
					<span className="sr-only">Previous</span>
				</span>
			</button>
			<button
				type="button"
				className="absolute top-0 z-30 items-center justify-center hidden h-full px-4 cursor-pointer md:flex end-0 group focus:outline-none"
				onClick={nextImage}
			>
				<span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
					<svg
						className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 6 10"
					>
						<path
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="m1 9 4-4-4-4"
						/>
					</svg>
					<span className="sr-only">Next</span>
				</span>
			</button>
		</div>
	);
};

export default Slider2;
