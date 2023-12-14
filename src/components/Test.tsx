import { useState } from "react";
import axios from "axios";

const Test = () => {
	const [data, setData] = useState("데이터 나오는 곳");
	// , {
	// 	eamil: "kwondongwook1@gmail.com",
	// 	password: "1234",
	// 	// nickname: "emma",
	// }

	const getTempData = () => {
		axios
			.get("https://triptrip.site/api/articles")
			.then((res) => {
				console.log(res);
				setData(res.data);
			})
			.catch((err) => console.log(err));
	};
	console.log(data);
	const handleStartBtn = () => {
		console.log("버튼 클릭");
		getTempData();
	};

	return (
		<div className="flex flex-col items-center justify-center my-10 font-semibold">
			<button
				className="px-3 py-3 mb-10 text-xl font-semibold border-2 bg-MAIN-COLOR border-BASIC_BLACK"
				onClick={handleStartBtn}
			>
				데이터 테스트 클릭
			</button>
			<div className="px-3 py-1 text-xl font-semibold bg-pink-200 border-b-2">
				{data}
			</div>
		</div>
	);
};

export default Test;
