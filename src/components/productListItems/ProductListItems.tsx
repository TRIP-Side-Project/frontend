import { Link } from "react-router-dom";
import Bookmark from "../Bookmark/Bookmark";
import { ProductInfo } from "@/pages/ProductList";

interface ProductItemProps {
	item: ProductInfo;
}

export default function ProductListItems({ item }: ProductItemProps) {
	// console.log(item);

	return (
		<>
			<div className="relative">
				<Link to={`/products/detail/${item.id}`}>
					<div className="relative flex flex-col items-start justify-start my-24 cursor-pointer md:justify-normal md:items-stretch md:flex-row">
						<div className="w-full md:w-1/3 h-[250px] overflow-hidden rounded-md">
							<img
								src={item.imageUrl}
								alt="product image"
								className="w-full h-full"
							/>
						</div>
						<div className="flex flex-col md:pl-5 md:justify-between dark:text-BASIC_WHITE">
							<div className="md:w-[400px]">
								<h2 className="mt-5 mb-5 text-sm font-bold md:text-xl md:mt-0 ">
									{item.title}
								</h2>
								<div className="flex gap-5 mb-5 text-base md:text-xl">
									<span>#대분류</span>
									<span>#중분류</span>
									<span>#소분류</span>
								</div>
							</div>
							<div className="md:pb-3">
								<div>
									<span className="w-[100px] inline-block font-bold">
										판매자
									</span>
									<span>{item.shopName}</span>
								</div>
								<div>
									<span className="w-[100px] inline-block font-bold">
										최저가
									</span>
									<span>
										{String(item.minPrice).replace(
											/\B(?=(\d{3})+(?!\d))/g,
											",",
										)}
										원
									</span>
								</div>
							</div>
						</div>
					</div>
				</Link>
				<div className="absolute bottom-0 right-2 md:top-0 md:right-0 ">
					{item.id ? <Bookmark itemId={item.id} type={"item"} /> : ""}
				</div>
			</div>
		</>
	);
}
