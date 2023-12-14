import Category from "@/common/category/Category";

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
	const propsBg = "BAISC_WHITE";
	const itemWrapper = `w-full whitespace-nowrap h-[70px] py-3 items-center flex flex-row 
	justify-between text-lg font-base text-BASIC_BLACK border-b border-LIGHT_GRAY_COLOR bg-${propsBg} 
	hover:font-bold hover:cursor-pointer`;

	return (
		<div className={itemWrapper}>
			<div className="grid place-items-center basis-1/6 bg-text-POINT_COLOR">
				<Category isEditor={data.writerRole} />
			</div>
			<div className="px-3 basis-3/6">
				{data.title}
				<span className="text-sm">(5)</span>
				{/* PS. 혹시 댓글 갯수도 받을 수 있을까..? 12/14 혜진 고민*/}
			</div>
			<div className="basis-1/6 ">
				{/* <Editor fillColor={""} width={"5px"} height={"5px"} /> */}
				{data.writerNickname}
			</div>
			<div className="basis-1/6 ">{data.createdAt}</div>
			<div className="basis-1/6 ">{data.viewCount}</div>
			<div className="basis-1/6 ">{data.likeCount}</div>
		</div>
	);
};

export default ForumItem;
