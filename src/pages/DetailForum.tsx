import Heart from "@/assets/svg/Heart";
import Category from "@/common/category/Category";
import Comment from "@/components/comment/Comment";
// import useFormatDate from "@/hooks/useFormatDate";
// import useFormatTitle from "@/hooks/useFormatTitle";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import AmendBtn from "@/common/button/AmendBtn";
import DeleteBtn from "@/common/button/DeleteBtn";
import { useState } from "react";
import EditForum from "./EditForum";
import ReadLexical from "@/components/lexical/ReadLexical";
import Loading from "@/components/Loading/Loading";
import ErrState from "@/components/Loading/ErrState";

const DetailForum = () => {
	const BASE_URL = import.meta.env.VITE_BASE_URL;
	const MEMBER_ID = 8; //임시
	const { articleId } = useParams();
	const navigator = useNavigate();
	const backButton = () => {
		navigator(-1);
	};
	const [isEdit, setIsEdit] = useState(false);

	const handleEditMode = () => {
		setIsEdit(!isEdit);
		console.log(isEdit, "에딭ㅅ보트 클릭 ");
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

	// const formattedDate = useFormatDate(data.createdAt);
	// const formattedTitle = useFormatTitle(data.title, 15);
	// console.log(formattedDate); -> 고민(12/19)
	if (isPending) return <Loading />;
	if (isError) return <ErrState err={error.message} />;

	return (
		<div className="flex w-[860px] flex-col mx-auto  px-5 mb-20 text-BASIC_BLACK bg-BASIC_WHITE dark:bg-BASIC_BLACK dark:text-BASIC_WHITE">
			{isEdit ? (
				<EditForum
					editData={{
						title: data.title,
						tags: data.tags,
						content: data.content,
					}}
					handleEditMode={handleEditMode}
					isEdit={isEdit}
				/>
			) : (
				<>
					<div className="flex flex-row justify-between py-2 mt-20 border-b border-BASIC_BLACK dark:border-BASIC_WHITE">
						<Category isEditor={data.writerRole} />

						<div className="flex flex-row divide-x divide-LIGHT_GRAY_COLOR">
							<p className="px-5">{data.writerNickname}</p>
							<p className="px-5">{data.createdAt}</p>
							<p className="pl-5">조회 {data.viewCount}</p>
						</div>
					</div>
					<div className="flex flex-row items-center justify-between py-2 mb-3">
						<div
							className="text-xs font-light cursor-pointer text-BASIC_BLACK dark:text-BASIC_WHITE"
							onClick={backButton}
						>
							<Link to={"/forum"}>
								<span className="hover:text-MAIN-COLOR">
									{data.writerRole === "EDITOR"
										? "여행 후기 > "
										: "에디터 추천 > "}
								</span>{" "}
							</Link>
							<span className="hover:text-MAIN_COLOR"> {data.title}</span>
						</div>
						<div className="flex flex-row items-center">
							<Heart width={"28px"} height={"28px"} />
							<span className="ml-2 text-base font-semibold text-BASIC_BLACK dark:text-BASIC_WHITE">
								{data.likeCount}
							</span>
						</div>
					</div>
					<div className="pt-2 pb-10 bg-LINE_POINT_COLOR h-fit dark:text-BASIC_BLACK">
						<ReadLexical content={data.content} />
					</div>
					<div className="flex flex-row">
						{data.tags &&
							data.tags.map((tag: string, idx: number) => (
								<div className="mr-3 text-sm text-LIGHT_GRAY_COLOR" key={idx}>
									# {tag}
								</div>
							))}
					</div>

					<div className="flex flex-row justify-end my-2 text-sm border-b-2 border-BASIC_BLACK dark:border-BASIC_WHITE">
						{data.writerId === MEMBER_ID && (
							<>
								<AmendBtn
									onClick={() => {
										setIsEdit(!isEdit), console.log("수정 버튼 클릭");
									}}
								/>
								<DeleteBtn itemId={data.articleId} type={"forum"} />
							</>
						)}
					</div>

					<Comment />
				</>
			)}
		</div>
	);
};

export default DetailForum;
