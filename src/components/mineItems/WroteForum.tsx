import Category from "@/common/category/Category";
import useFormatDate from "@/hooks/useFormatDate";
import { WroteForumProps } from "@/types/myProfile";
import { Link } from "react-router-dom";

const WroteForum = ({ data }: WroteForumProps) => {
	const formattedDate = useFormatDate(data.createdAt);
	console.log(data);
	//gap-3
	return (
		<div className="flex flex-col w-full gap-3 px-3 py-2 border rounded-lg whitespace-nowrap bg-BASIC_WHITE">
			<Link to={`/forum/detail/${data.articleId}`}>
				<div className="relative flex flex-row justify-between text-xs">
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
	);
};

export default WroteForum;
