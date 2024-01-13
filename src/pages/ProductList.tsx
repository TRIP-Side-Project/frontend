import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import Search from "@/components/search/Search";
import ProductListItems from "@/components/productListItems/ProductListItems";
import Pagination from "@/components/Pagination";
import Loading from "@/components/Loading/Loading";
import ErrState from "@/components/Loading/ErrState";
import { useRecoilValue } from "recoil";
import { menuState } from "@/store/menuState";

export interface ProductInfo {
	id: number | null;
	maxPrice: number | null;
	minPrice: number | null;
	productId: number | null;
	shopName: string | null;
	title: string | null;
	buyUrl: string | null;
	imageUrl: string | undefined;
}

const ProductList = () => {
	const [innerWidth, setInnerWidth] = useState(window.innerWidth);
	const [search, setSearch] = useState("");
	const [isSort, setIsSort] = useState(false);
	const [currentPage, setCurrentPage] = useState<number>(1);
	const [sort, setSort] = useState("");
	const [, setIsTitleSearch] = useState("title=");
	const code = useRecoilValue(menuState);

	useEffect(() => {
		const resizeListener = () => {
			setInnerWidth(window.innerWidth);
		};
		window.addEventListener("resize", resizeListener);
	});

	// false -> 최신순 true -> 인기순
	const handleSort = () => {
		setIsSort(!isSort);
		setSort("");
	};

	const viewSortClass =
		"cursor-pointer px-2 text-BASIC_BLACK dark:text-BASIC_WHITE";
	const nonViewSortClass = "cursor-pointer px-2 text-LIGHT_GRAY_COLOR";

	// 상품 가져오기
	const BASE_URL = import.meta.env.VITE_BASE_URL;
	const [productItem, setProductItem] = useState([]);

	const getProduct = async () => {
		try {
			const response = await axios.get(
				`${BASE_URL}/api/items?page=${currentPage}&size=5${
					"&title=" + code
				}&sortCode=${isSort ? 2 : 4}`,
			);
			setProductItem(response.data.itemList);
			return response.data;
		} catch (error) {
			console.log("Error: " + error);
		}
	};

	const { isPending, isError, data, error } = useQuery({
		queryKey: ["productLists", currentPage, search, sort, code, isSort],
		queryFn: getProduct,
	});
	// console.log(data.itemList);

	const pageTitle = (code: string) => {
		if (code === "") {
			return "전체";
		} else if (code === "눈꽃") {
			return "눈꽃여행";
		} else if (code === "바다") {
			return "바닷가여행";
		} else if (code === "트레킹") {
			return "산길여행";
		} else {
			return code;
		}
	};
	if (isPending) return <Loading />;
	if (isError) return <ErrState err={error.message} />;

	return (
		<div className="w-full px-10 md:px-28 bg-BASIC_WHITE dark:bg-BASIC_BLACK">
			<div className="md:flex md:justify-between md:items-end my-14 md:py-20">
				<h1 className="text-2xl font-bold my-7 md:my-0 md:text-4xl dark:text-BASIC_WHITE">
					{pageTitle(code)}
				</h1>
				{innerWidth > 768 && (
					<>
						<Search setSearch={setSearch} setIsTitleSearch={setIsTitleSearch} />
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
						<Search setSearch={setSearch} setIsTitleSearch={setIsTitleSearch} />
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
			{productItem.map((item) => (
				<ProductListItems item={item} />
			))}
			<Pagination
				pageInfo={data.pagination}
				activeBtn={currentPage}
				setActiveBtn={setCurrentPage}
			/>
		</div>
	);
};

export default ProductList;
