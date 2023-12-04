import FindList from "@/assets/svg/FindList";

const Mine = () => {
	return (
		<div className="hidden p-20 md:flex justify-start flex-col items-center text-3xl md:w-7/12 font-semibold md:h-[435px] border border-BASIC_BLACK bg-BASIC_WHITE">
			<div className="mb-10 whitespace-nowrap">
				사용하고 싶은 상품을 모아보세요!
			</div>
			<FindList width={"100px"} height={"100px"} />
		</div>
	);
};

export default Mine;
