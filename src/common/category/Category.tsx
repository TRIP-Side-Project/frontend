interface categoryTypes {
	isEditor: "EDITOR" | "MEMBER" | string;
}

const Category = ({ isEditor }: categoryTypes) => {
	return (
		<div className="w-12 sm:w-24 text-exs">
			{isEditor === "EDITOR" ? (
				<div className="text-center sm:py-1 sm:px-3 sm:text-sm rounded-2xl bg-SPECIAL_COLOR">
					에디터 추천
				</div>
			) : (
				<div className="text-center border-2 sm:py-1 sm:px-3 sm:text-sm rounded-2xl border-MAIN_COLOR">
					여행 후기
				</div>
			)}
		</div>
	);
};

export default Category;
