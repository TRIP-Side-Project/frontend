import Heart from "@/assets/svg/Heart";
import Category from "@/common/category/Category";
import Comment from "@/components/comment/Comment";
import useFormatDate from "@/hooks/useFormatDate";
import useFormatTitle from "@/hooks/useFormatTitle";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const DetailForum = () => {
	const BASE_URL = import.meta.env.VITE_BASE_URL;
	const { articleId } = useParams();
	const navigator = useNavigate();
	const backButton = () => {
		navigator(-1);
	};

	//게시글 데이터 조회
	const getForumData = async () => {
		try {
			const response = await axios.get(`${BASE_URL}/api/articles/${articleId}`);
			// console.log(response.data);
			return response.data;
		} catch (err) {
			throw new Error(`게시글 상세 조회 에러 ${err}`);
		}
	};

	const { isPending, isError, data, error } = useQuery({
		queryKey: ["detailForum"],
		queryFn: getForumData,
	});
	console.log(data);
	const formattedDate = useFormatDate(data.createdAt);
	const formattedTitle = useFormatTitle(data.title, 15);
	console.log(formattedDate);

	if (isPending) return <span>데이터 불러오는 중</span>;
	if (isError) return <span>Erros : {error.message}</span>;

	return (
		<div className="flex flex-col w-full mb-20 text-BASIC_BLACK bg-BASIC_WHITE">
			<div className="flex flex-row justify-between py-2 mt-20 border-b border-BASIC_BLACK">
				<Category isEditor={data.writerRole} />

				<div className="flex flex-row divide-x divide-LIGHT_GRAY_COLOR">
					<p className="px-5">{data.writerNickname}</p>
					<p className="px-5">{formattedDate}</p>
					<p className="pl-5">조회 {data.viewCount}</p>
				</div>
			</div>
			<div className="flex flex-row items-center justify-between py-2">
				<div
					className="text-xs cursor-pointer text-BASIC_BLACK hover:font-bold"
					onClick={backButton}
				>
					{`여행 후기  >  ${formattedTitle}`}
				</div>
				<div className="flex flex-row items-center">
					<Heart width={"42px"} height={"42px"} />
					<span className="ml-2 text-base font-semibold text-BASIC_BLACK">
						{data.likeCount}
					</span>
				</div>
			</div>
			<div className="pt-2 pb-10 border-b-2 bg-LINE_POINT_COLOR h-fit border-BASIC_BLACK">
				{data.content}
			</div>
			<Comment />
		</div>
	);
};

export default DetailForum;
