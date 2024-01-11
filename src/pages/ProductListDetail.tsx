import BackToList from "@/assets/svg/BackToList";
import Button, { btnAttributes } from "@/common/button/Button";
import Bookmark from "@/components/Bookmark/Bookmark";
// import ProductCardItems from "@/components/productCardItems/ProductCardItems";
import SearchVehicle from "@/components/searchVehicle/SearchVehicle";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProductInfo } from "./ProductList";
import { tempTags } from "@/store/tagState";
import ProductCardItems from "@/components/productCardItems/ProductCardItems";
import DOMPurify from "dompurify";

export default function ProductListDetail() {
	const buyBtnInfo: btnAttributes = {
		width: "150px",
		position: "right",
		text: "구매하러 가기",
		type: "circle",
	};
	const tagList = [...tempTags];
	const [category, setCategory] = useState<string[]>([]);

	// 뒤로가기 버튼
	const navigate = useNavigate();
	const backButton = () => {
		navigate(-1);
	};

	// 상품 Id 별 데이터 요청
	const BASE_URL = import.meta.env.VITE_BASE_URL;
	const productId = useParams();
	// console.log(productId.id);

	const [productItem, setProductItem] = useState<ProductInfo>({
		id: null,
		maxPrice: null,
		minPrice: null,
		productId: null,
		shopName: null,
		title: null,
		buyUrl: null,
		imageUrl: undefined,
	});

	const productMutation = useMutation({
		mutationFn: () => {
			return axios.get(`${BASE_URL}/api/items/${productId.id}`);
		},
	});

	const getProduct = async () => {
		try {
			const response = await productMutation.mutateAsync();
			setProductItem(response.data);
			const tagKey = tagList.filter((el) => {
				if (response.data.title?.includes(el)) {
					return el;
				}
			});
			setCategory(tagKey);
		} catch (error) {
			console.log("Error: " + error);
		}
	};

	//추천 상품
	const recommendProduct = async () => {
		try {
			const res = await axios.get(
				`${BASE_URL}/api/items?title=${category}&sortCode=2`,
			);

			const recommendData = res.data.itemList;
			return [recommendData[0], recommendData[1]];
		} catch (Err) {
			throw new Error(`홈 추천 상품 파트 : ${Err}`);
		}
	};

	const { data } = useQuery({
		queryKey: ["detailRecommendItem"],
		queryFn: recommendProduct,
	});

	useEffect(() => {
		getProduct();
		window.scrollTo(0, 0);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<div className="w-full px-10 pt-20 md:px-28 bg-BASIC_WHITE dark:bg-BASIC_BLACK dark:text-BASIC_WHITE">
				<div
					className="flex gap-1 mb-5 cursor-pointer items-top"
					onClick={backButton}
				>
					<p>목록 돌아가기</p>
					<BackToList fillColor="#333333" width="20px" height="20px" />
				</div>
				<div className="border-b pb-10 border-LIGHT_GRAY_COLOR mb-20 flex flex-col md:flex-row md:h-[400px] items-start md:items-center relative gap-10">
					<div className="md:w-[400px] h-[300px] bg-rose-300 overflow-hidden rounded-md relative">
						<div className="w-full h-full">
							<img
								src={productItem.imageUrl}
								alt="Product image"
								className="w-full h-full"
							/>
						</div>
						<div className="absolute top-3 right-3">
							{productItem.id ? <Bookmark itemId={productItem.id} /> : ""}
						</div>
					</div>
					<div className="flex flex-col justify-between w-full h-full gap-5 md:gap-0">
						<div>
							<h1
								className="mb-5 text-2xl font-bold md:text-3xl dark:text-BASIC_WHITE"
								dangerouslySetInnerHTML={{
									__html: DOMPurify.sanitize(
										String(productItem && productItem.title),
									),
								}}
							></h1>
							<div className="flex gap-5 mb-5 text-lg md:text-xl">
								<span># {category && category}</span>
							</div>
						</div>
						<div className="flex flex-col gap-3 pb-3 md:gap-5">
							<div>
								<span className="w-[100px] inline-block">판매자</span>
								<span>{productItem.shopName}</span>
							</div>
							<div>
								<span className="w-[100px] inline-block">상품 가격</span>
								<span>
									{String(productItem.minPrice).replace(
										/\B(?=(\d{3})+(?!\d))/g,
										",",
									)}
									원
								</span>
							</div>
						</div>
						<div className="flex items-center justify-center">
							<a href={`${productItem.buyUrl}`}>
								<Button btnInfo={buyBtnInfo} />
							</a>
						</div>
					</div>
					<div className=""></div>
				</div>
				<SearchVehicle />
				<div className="pb-20">
					<h1 className="mb-5 text-2xl font-bold md:text-3xl">관련상품</h1>
					<div className="flex flex-col items-center justify-between w-full gap-10 md:gap-10 md:flex-row">
						{data &&
							data.map((item, idx) => (
								<ProductCardItems key={idx} item={item} />
							))}
					</div>
				</div>
			</div>
		</>
	);
}
