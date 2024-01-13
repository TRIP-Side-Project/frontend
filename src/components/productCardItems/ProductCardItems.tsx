import { ProductInfo } from "@/pages/ProductList";
import { useNavigate } from "react-router-dom";

interface ProductCardItmesTypes {
	item: ProductInfo;
}

export default function ProductCardItems({ item }: ProductCardItmesTypes) {
	const navigation = useNavigate();
	console.log(item);
	const handleLink = (id: number | null) => {
		navigation(`/products/detail/${id}`);
		console.log("클릭", id);
	};

	return (
		<>
			<div
				className="bg-ITEM_BG_COLOR w-72 h-[360px] p-3 rounded-md shadow-md cursor-pointer"
				onClick={() => handleLink(item.id)}
			>
				<div className="w-full h-[220px] relative bg-rose-100 rounded-md overflow-hidden">
					<div className="w-full h-full">
						<img
							src={item && item.imageUrl}
							alt="jeju image"
							className="w-full h-full"
						/>
					</div>
					{/* <p className="absolute bottom-0 right-0 px-5 py-1 text-sm font-medium bg-BASIC_BLACK text-BASIC_WHITE rounded-tl-md">
						4박 5일패키지
					</p> */}
				</div>
				<div className="w-full pt-3 text-BASIC_BLACK">
					<h3 className="mb-2 text-md">
						{item && item.title?.slice(0, 35)}...
					</h3>
					<p className="text-LIGHT_GRAY_COLOR">@{item && item.shopName}</p>
					<span className="float-right mt-1">
						₩{" "}
						{item &&
							String(item.minPrice).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
						원
					</span>
				</div>
			</div>
		</>
	);
}
