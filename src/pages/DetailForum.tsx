import Comment from "@/components/comment/Comment";

const DetailForum = () => {
	return (
		<div className="flex flex-col min-w-[1200px] max-w-[1200px] text-BASIC_BLACK mb-20">
			<div className="bg-yellow-200">상단 부분</div>
			<div className="pt-2 pb-10 border-b-2 bg-LINE_POINT_COLOR h-96 border-BASIC_BLACK">
				본문 내용 입니다.
			</div>
			<Comment />
		</div>
	);
};

export default DetailForum;
