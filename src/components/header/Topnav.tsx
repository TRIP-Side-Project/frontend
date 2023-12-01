interface navSelectType {
	trip: boolean | undefined;
}

const Topnav = ({ trip }: navSelectType) => {
	//console.log(trip);
	const navStyle =
		"px-9 py-2 font-semibold text-BASIC_WHITE hover:text-MAIN_COLOR";
	const navContainer = "flex justify-end w-full bg-BASIC_BLACK";

	return (
		<div className={navContainer}>
			{trip === true ? (
				<>
					<button className={navStyle}>전체</button>
					<button className={navStyle}>서울 | 경기</button>
					<button className={navStyle}>강릉</button>
					<button className={navStyle}>부산</button>
					<button className={navStyle}>춘천</button>
					<button className={navStyle}>목포</button>
					<button className={navStyle}>여수</button>
					<button className={navStyle}>제주</button>
				</>
			) : (
				<>
					<button className={navStyle}>전체</button>
					<button className={navStyle}>눈꽃여행</button>
					<button className={navStyle}>바닷가여행</button>
					<button className={navStyle}>산길여행</button>
				</>
			)}
		</div>
	);
};

export default Topnav;
