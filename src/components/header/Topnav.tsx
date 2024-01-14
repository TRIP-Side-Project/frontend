import { menuSelector } from "@/store/menuState";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";

interface navSelectType {
	trip: boolean | undefined;
}

const Topnav = ({ trip }: navSelectType) => {
	//console.log(trip);
	const navStyle =
		"px-1 md:px-4 py-2 font-medium  md:font-semibold text-BASIC_WHITE hover:text-MAIN_COLOR dark:text-BASIC_BLACK dark:hover:text-MAIN_COLOR";
	const navContainer =
		"px-2 flex justify-between md:justify-end w-full bg-BASIC_BLACK dark:bg-LIGHT_GRAY_COLOR";
	const setCode = useSetRecoilState(menuSelector);
	const navigation = useNavigate();

	const handleRegion = (code: string) => {
		setCode(code);
		navigation(`/products`);
	};

	return (
		<div className={navContainer}>
			{trip === true ? (
				<>
					<button className={navStyle} onClick={() => handleRegion("")}>
						전체
					</button>

					<button className={navStyle} onClick={() => handleRegion("서울")}>
						서울
					</button>
					<button className={navStyle} onClick={() => handleRegion("강원")}>
						강원
					</button>
					<button className={navStyle} onClick={() => handleRegion("춘천")}>
						춘천
					</button>
					<button className={navStyle} onClick={() => handleRegion("경주")}>
						경주
					</button>
					<button className={navStyle} onClick={() => handleRegion("전주")}>
						전주
					</button>
					<button className={navStyle} onClick={() => handleRegion("안동")}>
						안동
					</button>
					<button className={navStyle} onClick={() => handleRegion("대구")}>
						대구
					</button>
					<button className={navStyle} onClick={() => handleRegion("대전")}>
						대전
					</button>
					<button className={navStyle} onClick={() => handleRegion("목포")}>
						목포
					</button>
					<button className={navStyle} onClick={() => handleRegion("여수")}>
						여수
					</button>
					<button className={navStyle} onClick={() => handleRegion("경남")}>
						경남
					</button>
					<button className={navStyle} onClick={() => handleRegion("부산")}>
						부산
					</button>
					<button className={navStyle} onClick={() => handleRegion("제주")}>
						제주
					</button>
				</>
			) : (
				<>
					<button className={navStyle} onClick={() => handleRegion("")}>
						전체
					</button>

					<button className={navStyle} onClick={() => handleRegion("눈꽃")}>
						눈꽃여행
					</button>
					<button className={navStyle} onClick={() => handleRegion("바다")}>
						바닷가여행
					</button>
					<button className={navStyle} onClick={() => handleRegion("트레킹")}>
						산길여행
					</button>
				</>
			)}
		</div>
	);
};

export default Topnav;
