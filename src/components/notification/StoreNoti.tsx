import FindList from "@/assets/svg/FindList";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
// import { useState } from "react";
import ErrState from "../Loading/ErrState";
import Loading from "../Loading/Loading";

interface NotificationTypes {
	notificationId: number;
	itemId: number;
	itemTitle: string;
	tags: string[];
	read: boolean;
	createdAt: string;
}

const StoreNoti = () => {
	const ACCESS_TOKEN = window.localStorage.getItem("access_token");
	const BASE_URL = import.meta.env.VITE_BASE_URL;
	// const [notiData] = useState<string[]>([]);

	const getStoreNoti = async () => {
		try {
			const res = await axios.get(`${BASE_URL}/api/notifications/me`, {
				headers: {
					accessToken: `Bearer ${ACCESS_TOKEN}`,
				},
			});
			return res.data;
		} catch (Err) {
			throw new Error(`알림 저장 파트 ${Err}`);
		}
	};

	const { isPending, isError, data, error } = useQuery({
		queryKey: ["storedNoti"],
		queryFn: getStoreNoti,
	});

	if (isPending) return <Loading />;
	if (isError) return <ErrState err={error.message} />;
	console.log(data);

	return (
		<div className="absolute z-40 flex flex-col w-full max-w-xs py-3 border-2 rounded-lg shadow-xl bg-BASIC_WHITE whitespace-nowrap top-14 right-20">
			<div className="pl-3 text-lg font-semibold align-topborder-b-shadow text-BASIC_BLACK ">
				알림
			</div>
			{data && data.notifications.length !== 0 ? (
				<ul className="px-3 pt-3 text-BASIC_BLACK">
					{data &&
						data.notifications.map((item: NotificationTypes, idx: number) => (
							<li
								key={idx}
								className="w-full px-1 py-1 font-medium border-b cursor-pointer border-LIGHT_GRAY_COLOR h-fit hover:text-MAIN_COLOR"
							>
								<div className="flex flex-row justify-between text-xs">
									<span>
										{item.tags &&
											item.tags.map((el: string, idx: number) => (
												<span className="mr-1.5" key={idx}>
													# {el}
												</span>
											))}
									</span>
									<span>{data && item.createdAt}</span>
								</div>
								<div className="flex-1 mt-1 text-left ">
									{data && item.itemTitle.slice(0, 12)}...
								</div>
							</li>
						))}
				</ul>
			) : (
				<div className="flex flex-col items-center justify-center h-56 ">
					<FindList width={"50px"} height={"50px"} />
					<div className="font-bold text-md text-BASIC_BLACK">
						I am not 데이터예요.
					</div>
				</div>
			)}
		</div>
	);
};

export default StoreNoti;
