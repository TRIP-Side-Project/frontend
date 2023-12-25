import { useEffect, useState } from "react";

import Search from "@/components/search/Search";
import ProductListItems from "@/components/productListItems/ProductListItems";
// import Pagination from "@/components/Pagination";

const ProductList = () => {
	// 동적 화면 상태
	const [innerWidth, setInnerWidth] = useState(window.innerWidth);
	useEffect(() => {
		const resizeListener = () => {
			setInnerWidth(window.innerWidth);
		};
		window.addEventListener("resize", resizeListener);
	});

	// false -> 최신순 true -> 인기순
	// 아무거나 눌러도 바뀌는 걸 만들어버렸다..
	const [isSort, setIsSort] = useState(false);

	const handleSort = () => {
		setIsSort(!isSort);
	};

	const viewSortClass =
		"cursor-pointer px-2 text-BASIC_BLACK dark:text-BASIC_WHITE";
	const nonViewSortClass = "cursor-pointer px-2 text-LIGHT_GRAY_COLOR";

	return (
		//md:px-0
		<div className="w-full px-10 md:px-28 bg-BASIC_WHITE dark:bg-BASIC_BLACK">
			<div className="md:flex md:justify-between md:items-end my-14 md:py-20">
				<h1 className="text-2xl font-bold my-7 md:my-0 md:text-4xl dark:text-BASIC_WHITE">
					눈꽃여행
				</h1>
				{innerWidth > 768 && (
					<>
						<Search />
						<div className="flex gap-2 px-3 pb-1 text-base border-b border-DARK_GRAY_COLOR">
							<span
								className={isSort ? viewSortClass : nonViewSortClass}
								onClick={handleSort}
							>
								인기순
							</span>
							<span
								className={!isSort ? viewSortClass : nonViewSortClass}
								onClick={handleSort}
							>
								최신순
							</span>
						</div>
					</>
				)}
				{innerWidth <= 768 && (
					<div className="flex items-center justify-between">
						<Search />
						<div className="flex pb-1 text-sm border-b border-DARK_GRAY_COLOR">
							<span
								className={isSort ? viewSortClass : nonViewSortClass}
								onClick={handleSort}
							>
								인기순
							</span>
							<span
								className={!isSort ? viewSortClass : nonViewSortClass}
								onClick={handleSort}
							>
								최신순
							</span>
						</div>
					</div>
				)}
			</div>
			{Array.from(Array(5), (_, index) => (
				<ProductListItems key={index} />
			))}
			{/* <Pagination  /> */}
		</div>
	);
};

export default ProductList;
