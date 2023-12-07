const StoreNoti = () => {
	return (
		<div className="absolute z-40 flex flex-col w-full max-w-xs py-3 border-2 rounded-lg shadow-xl bg-BASIC_WHITE whitespace-nowrap top-14 right-20">
			<div className="pl-3 text-lg font-semibold align-topborder-b-shadow text-BASIC_BLACK ">
				알림
			</div>
			<ul className="px-3 pt-3 text-BASIC_BLACK">
				{Array.from(Array(5), (_, idx) => (
					<li
						key={idx}
						className="w-full px-1 py-1 font-medium border-b cursor-pointer border-LIGHT_GRAY_COLOR h-fit hover:text-MAIN_COLOR"
					>
						<div className="flex flex-row justify-between text-xs">
							<span>#겨울여행 #경주</span>
							<span>1일전</span>
						</div>
						<div className="flex-1 mt-1">여기 어때~ 여기가면 어때 ...</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default StoreNoti;
