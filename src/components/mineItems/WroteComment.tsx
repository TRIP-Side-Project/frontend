import Category from "@/common/category/Category";

const WroteComment = () => {
	return (
		<div className="flex flex-col w-full gap-3 px-3 py-2 border rounded-lg whitespace-nowrap bg-BASIC_WHITE">
			<div className="relative flex flex-row justify-between text-xs">
				<div className="relative scale-75 -left-3 -top-1">
					<Category isEditor={"user"} />
				</div>

				<div className=" text-LIGHT_GRAY_COLOR">2023.11.24</div>
			</div>
			<div className="text-lg font-semibold text-BASIC_BLACK">
				최고의 경주 여행 어쩌구 어쩌구 어저구 저쩌구
			</div>
		</div>
	);
};

export default WroteComment;
