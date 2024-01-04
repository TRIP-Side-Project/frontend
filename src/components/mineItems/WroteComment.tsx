import useFormatDate from "@/hooks/useFormatDate";
import { MyCommentProps } from "@/types/myProfile";
import { Link } from "react-router-dom";

const WroteComment = ({ data }: MyCommentProps) => {
	const formattedDate = useFormatDate(data.createdAt);
	console.log(data);
	return (
		<div className="flex flex-col w-full px-3 py-2 border rounded-lg whitespace-nowrap bg-BASIC_WHITE">
			<Link to={`/forum/detail/${data.articleId}`}>
				<div className="flex flex-row justify-between py-1 sm:py-2 text-exs sm:text-xs">
					<div className="font-light">
						여행 포럼 &gt;
						<span className="font-medium text-ETC_COLOR text-center mr-0.5">
							{data.writerNickname}
						</span>
						님의 게시글에 댓글을 달았습니다.
					</div>
					<div className=" text-LIGHT_GRAY_COLOR">{formattedDate}</div>
				</div>
				<div className="pt-2 text-sm font-semibold sm:pt-1 sm:text-lg text-BASIC_BLACK ">
					{data.content}
				</div>
			</Link>
		</div>
		//태그
	);
};

export default WroteComment;
