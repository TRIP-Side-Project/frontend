interface categoryTypes {
	isEditor: "editor" | "user";
}

const Category = ({ isEditor }: categoryTypes) => {
	return (
		<div className="">
			{isEditor === "editor" ? (
				<div className="w-24 px-3 py-1 text-sm text-center rounded-2xl bg-SPECIAL_COLOR">
					에디터 추천
				</div>
			) : (
				<div className="w-24 px-3 py-1 text-sm text-center border-2 rounded-2xl border-MAIN_COLOR">
					여행 후기
				</div>
			)}
		</div>
	);
};

export default Category;
