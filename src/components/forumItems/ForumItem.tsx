import Category from "@/common/category/Category";
import useFormatDate from "@/hooks/useFormatDate";
import useFormatTitle from "@/hooks/useFormatTitle";

export interface ForumList {
	articleId: number;
	title: string;
	writerId: number;
	writerNickname: string;
	writerRole: "MEMBER" | "EDITOR";
	viewCount: number;
	likeCount: number;
	createdAt: string;
}

interface ForumItemTypes {
	data: ForumList;
}

const ForumItem = ({ data }: ForumItemTypes) => {
	// console.log(data);
	// const propsBg = "BAISC_WHITE";
	const itemWrapper = `w-full whitespace-nowrap h-[70px] py-3 items-center flex flex-row 
	justify-between font-base text-BASIC_BLACK border-b border-LIGHT_GRAY_COLOR bg-BASIC_WHITE dark:bg-BASIC_BLACK
	dark:text-BASIC_WHITE hover:text-black hover:cursor-pointer`;

	const formatDate = useFormatDate(data.createdAt);
	const formatTitle = useFormatTitle(data.title, 20);

	return (
		<div className={itemWrapper}>
			<div className="grid place-items-center basis-1/6">
				<Category isEditor={data.writerRole} />
			</div>
			<div className="px-3 font-semiboldtext-[12px] sm:text-sm basis-3/6">
				{formatTitle}
				{/* <span className="text-sm"></span> */}
				{/* PS. 혹시 댓글 갯수도 받을 수 있을까..? 12/14 혜진 고민*/}
			</div>
			<div className="font-semibold sm:text-sm basis-1/6">
				{/* <Editor fillColor={""} width={"5px"} height={"5px"} /> */}
				{data.writerNickname}
			</div>
			<div className="text-sm basis-1/6 ">{formatDate}</div>
			<div className="text-sm basis-1/6">{data.viewCount}</div>
			<div className="text-sm basis-1/6">{data.likeCount}</div>
		</div>
	);
};

export default ForumItem;
