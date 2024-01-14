import Close from "@/assets/svg/Close";
import Category from "@/common/category/Category";
import useFormatDate from "@/hooks/useFormatDate";
import { LikeForumProps } from "@/types/myProfile";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";

const LikeForum = ({ data }: LikeForumProps) => {
	console.log(data);
	const formattedDate = useFormatDate(data && data.createdAt);
	const queryClient = useQueryClient();
	const BASE_URL = import.meta.env.VITE_BASE_URL;
	const ACCESS_TOKEN = window.localStorage.getItem("access_token");

	const handleDeleteMine = useMutation({
		mutationFn: (interestArticleId: number) => {
			return axios.delete(
				`${BASE_URL}/api/interest-articles/${interestArticleId}`,
				{
					headers: {
						accessToken: `Bearer ${ACCESS_TOKEN}`,
					},
				},
			);
		},
		onSettled: () => queryClient.invalidateQueries({ queryKey: ["mineDatas"] }),
	});

	const DeleteMineClick = async (interestArticleId: number) => {
		try {
			await handleDeleteMine.mutateAsync(interestArticleId);
		} catch (err) {
			throw new Error(`내 아이템 삭제 ${err}`);
		}
	};

	return (
		<div className="flex flex-row w-full px-3 py-2 border rounded-lg whitespace-nowrap bg-BASIC_WHITE">
			<div className="flex flex-col flex-1 gap-3 ">
				<Link to={`/forum/detail/${data.articleId}`}>
					<div className="relative flex flex-row justify-between flex-1 text-xs">
						<div className="relative scale-75 -left-3 -top-1">
							<Category isEditor={data.writerRole} />
						</div>

						<div className=" text-LIGHT_GRAY_COLOR">{formattedDate}</div>
					</div>
					<div className="text-lg font-semibold text-BASIC_BLACK">
						{data.title}
					</div>
				</Link>
			</div>
			<div className=" text-BASIC_BLACK">
				<button
					type="button"
					className="ms-auto -mx-1  -my-1.5 justify-center items-center flex-shrink-0 text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
					data-dismiss-target="#toast-notification"
					aria-label="Close"
					onClick={(e) => {
						e.preventDefault();
						console.log(data.articleId);
						DeleteMineClick(data.articleId);
					}}
				>
					<Close fillColor={"#111111"} width={"18px"} height={"18px"} />
				</button>
			</div>
		</div>
	);
};

export default LikeForum;
