import HotBedge from "./HotBedge";
import axios from "axios";
import ErrState from "../Loading/ErrState";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

interface ItemTypes {
	buyUrl: string;
	id: number;
	imageUrl: string;
	maxPrice: null | number;
	minPrice: null | number;
	productId: number;
	shopName: string;
	title: string;
}

const HotItem = () => {
	const BASE_URL = import.meta.env.VITE_BASE_URL;

	const getHotItem = async () => {
		try {
			const response = await axios.get(
				`${BASE_URL}/api/items?page=1&sortCode=2`,
			);
			const itemList = response.data.itemList;
			return itemList.slice(0, 3);
			// return response.data.slice(0, 3);
		} catch (Err) {
			throw new Error(`인기 아이템 에러 ${Err}`);
		}
	};

	const { isError, data, error } = useQuery({
		queryKey: ["hotItem"],
		queryFn: getHotItem,
	});

	if (isError) return <ErrState err={error.message} />;

	return (
		<div className="flex-row hidden grid-cols-3 sm:grid gap-x-20 ">
			{data &&
				data.map((item: ItemTypes, idx: number) => (
					<Link to={`/products/detail/${item.id}`} key={`HotItem - ${idx}`}>
						<div
							key={idx}
							className="relative flex p-3 border rounded-lg bg-BASIC_WHITE dark:bg-LINE_POINT_COLOR sm:flex-col sm:w-38 md:w-72 sm:h-56 md:h-80 border-LIGHT_GRAY_COLOR text-BASIC_BLACK dark:text-ITEM_BG_COLOR"
						>
							<div className="overflow-hidden max-h-36 md:max-h-64">
								<img
									src={item.imageUrl}
									alt="trip merchan image"
									className="object-fill "
								/>
								<HotBedge />
							</div>
							<div className="flex-1 text-sm font-bold">
								<div className="relative inline-block my-3">
									<p className="relative z-10 overflow-x-hidden">
										{item.title && item.title.slice(0, 20)}
									</p>
									<span className="absolute bottom-0 left-0 hidden w-full p-1 opacity-75 md:block bg-SPECIAL_COLOR dark:bg-MAIN_COLOR"></span>
								</div>
							</div>

							<div className="text-sm font-light text-right">
								{item.shopName}
							</div>
						</div>
					</Link>
				))}
		</div>
	);
};

export default HotItem;
