import ArrowLeft from "@/assets/svg/ArrowLeft";
import ArrowRight from "@/assets/svg/ArrowRight";
import { useEffect, useState } from "react";

type PaginationTypes = {
	pageInfo: {
		articleSize: number;
		hasNext: boolean;
		hasPrevious: boolean;
		page: number;
		requestSize: number;
		totalElement: number;
		totalPages: number;
	};
	activeBtn: number;
	setActiveBtn: React.Dispatch<React.SetStateAction<number>>;
};

const Pagination = ({ pageInfo, activeBtn, setActiveBtn }: PaginationTypes) => {
	const [currPageArr, setCurrPageArr] = useState<number[]>([]);
	const page = pageInfo.page; // 현재 페이지 ex. 1
	const totalPages = pageInfo.totalPages; //18
	const limit = 5; // 한번에 표시할 버튼의 갯수

	const sliceArrayByLimit = (totalPage: number, limit: number) => {
		// 0부터 시작하는 페이지 번호 배열 생성
		const totalPageArray = Array.from(
			{ length: totalPage },
			(_, idx) => idx + 1,
		);

		// totalPageArray를 limit 크기의 하위 배열로 분할
		return Array.from({ length: Math.ceil(totalPage / limit) }, () =>
			totalPageArray.splice(0, limit),
		);
	};

	//페이지 버튼 배열 생성
	useEffect(() => {
		const slicedPage = sliceArrayByLimit(totalPages, limit);
		setCurrPageArr(slicedPage[Math.floor((page - 1) / limit)]);
	}, [page, activeBtn, totalPages, limit]);
	const handlePrev = () => {
		if (pageInfo.hasPrevious === false) {
			return null;
		}
		const newPage = activeBtn - 1;
		setActiveBtn(newPage);
	};

	const handleNext = () => {
		if (pageInfo.hasNext === false) {
			return null;
		}
		const newPage = activeBtn + 1;
		setActiveBtn(newPage);
	};

	return (
		<div className="flex flex-row justify-center my-5 text-sm font-bold sm:text-xl text-BASIC_BLACK dark:text-BASIC_WHITE">
			<button
				className="mr-2 rounded-md dark:bg-MAIN_COLOR bg-LINE_POINT_COLOR"
				onClick={handlePrev}
			>
				<ArrowLeft fillColor={""} width={"20px"} height={"20px"} />
			</button>
			{currPageArr &&
				currPageArr.map((pageNum, idx) => (
					<button
						key={idx}
						className={`mx-2 ${
							activeBtn === pageNum ? "font-bold text-BTN_HOVER_COLOR" : ""
						}`}
						onClick={() => setActiveBtn(pageNum)}
					>
						{pageNum}
					</button>
				))}
			<button
				className="ml-2 rounded-md dark:bg-MAIN_COLOR bg-LINE_POINT_COLOR"
				onClick={handleNext}
			>
				<ArrowRight fillColor={""} width={"20px"} height={"20px"} />
			</button>
		</div>
	);
};

export default Pagination;
