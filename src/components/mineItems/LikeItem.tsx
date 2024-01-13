import Close from "@/assets/svg/Close";
import { LikeMerchanProps } from "@/types/myProfile";
import { useNavigate } from "react-router-dom";
// import { useMutation } from "@tanstack/react-query";
// import axios from "axios";

const Likeitem = ({ data }: LikeMerchanProps) => {
	const navigation = useNavigate();
	// const BASE_URL = import.meta.env.VITE_BASE_URL;
	// const ACCESS_TOKEN = window.localStorage.getItem("access_token");

	// const handleDeleteMine = useMutation({
	// 	mutationFn: (interesItemId: number) => {
	// 		return axios.delete(`${BASE_URL}/api/interest-items/${interesItemId}`, {
	// 			headers: {
	// 				accessToken: `Bearer ${ACCESS_TOKEN}`,
	// 			},
	// 		});
	// 	},
	// });

	// const DeleteMineClick = async (interesItemId: number) => {
	// 	try {
	// 		await handleDeleteMine.mutateAsync(interesItemId);
	// 	} catch (err) {
	// 		throw new Error(`내 아이템 삭제 ${err}`);
	// 	}
	// };
	console.log(data);
	return (
		<div
			className="flex flex-row w-full p-2 border rounded-lg whitespace-nowrap bg-BASIC_WHITE"
			onClick={() => navigation(`/products/detail/${data && data.id}`)}
		>
			<img
				src={data.imageUrl}
				className="rounded-lg w-[100px] sm:w-[130px] h-[100px] mr-3"
			/>
			<div className="flex flex-col flex-1 text-BASIC_BLACK">
				<div className="flex flex-row justify-between ">
					<div className="text-sm font-semibold whitespace-normal sm:text-lg">
						{data.title.slice(0, 28)}..
					</div>
					<button
						type="button"
						className="ms-auto -mx-1.5  -my-1.5 justify-center items-center flex-shrink-0 text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
						data-dismiss-target="#toast-notification"
						aria-label="Close"
						onClick={(e) => {
							e.preventDefault();
							// DeleteMineClick(data.id);
						}}
					>
						<Close fillColor={"#111111"} width={"18px"} height={"18px"} />
					</button>
				</div>

				<div className="flex-1 text-sm text-LIGHT_GRAY_COLOR">
					{data.shopName}
				</div>
				<div className="flex justify-end text-base">{data.maxPrice}</div>
			</div>
		</div>
	);
};

export default Likeitem;
