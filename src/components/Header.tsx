import DarkToggle from "@/components/DarkToggle";

const Header = () => {
	return (
		<div className="w-full h-[130px] bg-BASIC_WHITE border-b-2 border-LIGHT_GRAY_COLOR flex flex-col">
			<div className="flex justify-end w-full py-3 border-b-2 border-LIGHT_GRAY_COLOR text-LIGHT_GRAY_COLOR">
				<DarkToggle />
				<button className="px-9 hover:text-BASIC_BLACK">로그인</button>
				<button className="px-9 hover:text-BASIC_BLACK">회원가입</button>
			</div>
			<div className="flex items-center justify-between text-2xl font-bold grow text-BASIC_BLACK">
				<div className="text-4xl text-MAIN_COLOR px-9 font-bolder">
					TRIPTRIP
				</div>
				<div className="items-center h-full whitespace-nowrap">
					<button className="h-full hover:bg-BASIC_BLACK hover:text-BASIC_WHITE px-9 ">
						지역별 여행
					</button>
					<button className="h-full hover:bg-BASIC_BLACK hover:text-BASIC_WHITE px-9">
						테마별 여행
					</button>
					<button className="h-full hover:bg-BASIC_BLACK hover:text-BASIC_WHITE px-9">
						여행 포럼
					</button>
				</div>
			</div>
		</div>
	);
};

export default Header;
