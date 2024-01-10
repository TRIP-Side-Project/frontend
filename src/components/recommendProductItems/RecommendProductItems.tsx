import ArrowRight from "@/assets/svg/ArrowRight";
import { ProductInfo } from "@/pages/ProductList";
import { tempTags } from "@/store/tagState";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface RecommendItemTypes {
	data: ProductInfo;
}

const RecommendProductItems = ({ data }: RecommendItemTypes) => {
	const tagList = [...tempTags];
	const [isTag, setIsTag] = useState("");
	const navigation = useNavigate();

	const findTag = (title: string) => {
		tagList.map((tag) => {
			if (title.includes(tag)) {
				setIsTag(tag);
			}

			return;
		});
	};

	useEffect(() => {
		if (data && data.title) {
			findTag(data.title);
		}
	});

	const handleLink = (id: number | null) => {
		navigation(`/products/detail/${id}`);
	};

	return (
		<>
			<div
				className="w-4/5 md:w-[48%] cursor-pointer shadow-md p-3 overflow-hidden relative bg-ITEM_BG_COLOR rounded-md flex gap-3 align-center"
				onClick={() => handleLink(data && data.id)}
			>
				<div className="absolute top-0 z-10 px-2 py-3 bg-red-500 left-5 text-BASIC_WHITE rounded-b-md">
					<p>HOT</p>
				</div>
				<div className="w-1/2 md:w-[250px] h-full overflow-hidden rounded-lg">
					<img
						src={data && data.imageUrl}
						alt="item image"
						className="w-full h-full scale-x-125"
					/>
				</div>
				<div>
					<h2 className="text-xl font-bold md:text-2xl text-BASIC_BLACK">
						{data && data.title?.slice(0, 22)}...
					</h2>
					<div className="absolute top-4 md:top-5 right-1">
						<ArrowRight fillColor="#cccccc" width="20px" height="20px" />
					</div>
					<p className="pt-2 text-xs md:text-sm text-LIGHT_GRAY_COLOR">
						@{data && data.shopName}
					</p>
				</div>
				<div className="absolute bottom-0 right-0 flex flex-col gap-1">
					<p className="pr-3 text-sm text-right md:text-base text-BASIC_BLACK">
						₩ {data && data.minPrice}원
					</p>
					<p className="px-5 py-1 text-lg bg-yellow-400 md:text-2xl rounded-tl-2xl text-BASIC_WHITE ">
						# A.K.A {isTag}
					</p>
				</div>
			</div>
		</>
	);
};

export default RecommendProductItems;
