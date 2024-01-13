import FindList from "@/assets/svg/FindList";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
// import { useState } from "react";
import ErrState from "../Loading/ErrState";
import Loading from "../Loading/Loading";
import { useNavigate } from "react-router-dom";
import Close from "@/assets/svg/Close";

interface NotificationTypes {
	notificationId: number;
	itemId: number;
	itemTitle: string;
	tags: string[];
	read: boolean;
	createdAt: string;
}

type NotiTypes = {
	setIsNotifi: React.Dispatch<React.SetStateAction<boolean>>;
};
const StoreNoti = ({ setIsNotifi }: NotiTypes) => {
	const ACCESS_TOKEN = window.localStorage.getItem("access_token");
	const BASE_URL = import.meta.env.VITE_BASE_URL;
	const readStyle = "text-LIGHT_GRAY_COLOR";
	const navigation = useNavigate();
	const queryClient = useQueryClient();

	//날짜 포맷팅
	const formatDate = (date: string) => {
		const givenDate: Date = new Date(date);
		const currentDate: Date = new Date();
		const timeDiff = currentDate.getTime() - givenDate.getTime();
		const dayDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

		if (dayDiff === 0) {
			return "오늘";
		} else if (dayDiff === 1) {
			return "어제";
		} else if (dayDiff === -1) {
			return "내일";
		} else if (dayDiff < 0) {
			return `${-dayDiff}일 후 `;
		} else {
			return `${dayDiff}일 전`;
		}
	};

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

	//알림 전체 삭제
	const deleteAllNoti = useMutation({
		mutationFn: () => {
			return axios.delete(`${BASE_URL}/api/notifications/me`, {
				headers: {
					accessToken: `Bearer ${ACCESS_TOKEN}`,
				},
			});
		},
	});

	const handleDeleteAllClick = async () => {
		try {
			await deleteAllNoti.mutateAsync();
			queryClient.invalidateQueries({ queryKey: ["storedNoti"] });
		} catch (err) {
			throw new Error(`알림 전체 삭제 ${err}`);
		}
	};

	//알림 개별 삭제
	const deleteEachNoti = useMutation({
		mutationFn: (id: number) => {
			return axios.delete(`${BASE_URL}/api/notifications`, {
				data: {
					itemId: id,
				},
				headers: {
					accessToken: `Bearer ${ACCESS_TOKEN}`,
				},
			});
		},
	});

	const handleEachDeleteClick = async (id: number) => {
		try {
			await deleteEachNoti.mutateAsync(id);
			queryClient.invalidateQueries({ queryKey: ["storedNoti"] });
		} catch (err) {
			throw new Error(`알림 개별 삭제 ${err}`);
		}
	};

	//알림 읽음 설정
	const readNoti = useMutation({
		mutationFn: (id: number) => {
			return axios.patch(
				`${BASE_URL}/api/notifications`,
				{
					itemId: id,
				},
				{
					headers: {
						accessToken: `Bearer ${ACCESS_TOKEN}`,
					},
				},
			);
		},
	});

	const handleReadNotiClick = async (id: number) => {
		try {
			await readNoti.mutateAsync(id);
			navigation(`/products/detail/${id}`);
			setIsNotifi(false);
		} catch (Err) {
			throw new Error(`읽음 알림 ${Err}`);
		}
	};

	if (isPending) return <Loading />;
	if (isError) return <ErrState err={error.message} />;
	console.log(data);

	return (
		<div className="absolute z-40 flex-col w-full max-w-xs py-3 overflow-auto border-2 rounded-lg shadow-xl h-96 bg-BASIC_WHITE whitespace-nowrap top-14 right-20">
			<div className="pl-3 text-lg font-semibold align-topborder-b-shadow text-BASIC_BLACK">
				알림
			</div>
			<div
				className="pb-1 pr-3 mt-2 text-xs text-right border-b cursor-pointer hover:text-ETC_COLOR"
				onClick={handleDeleteAllClick}
			>
				전체 삭제
			</div>
			{data && data.notifications.length !== 0 ? (
				<ul className="px-3 pt-3 text-BASIC_BLACK">
					{data &&
						data.notifications
							.slice(0, 30)
							.map((item: NotificationTypes, idx: number) => (
								<li
									key={idx}
									className={`${
										item.read === true ? readStyle : ""
									} flex flex-row items-center w-full px-1 py-1 font-medium border-b cursor-pointer border-LIGHT_GRAY_COLOR h-fit `}
									onClick={(e) => {
										e.preventDefault();
										handleReadNotiClick(item.itemId);
									}}
								>
									<div className="flex flex-col flex-1 hover:text-MAIN_COLOR">
										<div className="flex flex-row justify-between text-xs">
											<span>
												{item.tags &&
													item.tags.map((el: string, idx: number) => (
														<span className="mr-1.5" key={idx}>
															# {el}
														</span>
													))}
											</span>
											<span>{data && formatDate(item.createdAt)}</span>
										</div>
										<div className="flex-1 mt-2 text-sm text-left">
											{data && item.itemTitle.slice(0, 18)}...
										</div>
									</div>

									<button
										className="h-8 p-2 ml-2 rounded-lg hover:bg-slate-200"
										onClick={(e) => {
											e.preventDefault();
											handleEachDeleteClick(data && item.itemId);
											console.log(item.itemId);
										}}
									>
										<Close
											fillColor={"#90ADC6"}
											width={"13px"}
											height={"13px"}
										/>
									</button>
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
