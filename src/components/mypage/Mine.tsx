import FindList from "@/assets/svg/FindList";
// import Likeitem from "../mineItems/LikeItem";
// import WroteComment from "../mineItems/WroteComment";
import WroteForum from "../mineItems/WroteForum";

const Mine = () => {
	const data = false;
	return (
		<div className="w-full p-2 text-3xl font-semibold border h-fit border-BASIC_BLACK bg-BASIC_WHITE">
			{data ? (
				<div className="flex flex-col items-center px-10 pt-3 bg-yellow-300">
					<div className="my-10 whitespace-nowrap">
						사용하고 싶은 상품을 모아보세요!
					</div>
					<FindList width={"100px"} height={"100px"} />
				</div>
			) : (
				<div className="flex flex-col w-full gap-3">
					{Array.from(Array(5), (_, idx) => (
						<WroteForum key={idx} />
					))}
				</div>
			)}
		</div>
	);
};

export default Mine;
