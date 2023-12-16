import { useState } from "react";

import DarkToggle from "@/components/header/DarkToggle";
import Topnav from "./Topnav";
import Bell from "@/assets/svg/Bell";
import StoreNoti from "../notification/StoreNoti";
import { Link } from "react-router-dom";
import Mmenu from "./Mmenu";

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [navType, setNavType] = useState<boolean | undefined>(undefined);
	const [isNotifi, setIsNotifi] = useState(false);
	const onSubMenuClose = () => setIsOpen(false);
	const tempLogin = true; //임시 로그인 상태 설정

	const navBtn =
		"h-full hover:bg-BASIC_BLACK hover:text-BASIC_WHITE px-9 focus:bg-BASIC_BLACK focus:text-BASIC_WHITE ";

	//메뉴 바 세부 드롭다운 toggle
	const openNav = (trip: null | string) => {
		if (trip === "region") {
			//console.log("지역별 여행");
			setNavType(true);
			setIsOpen(true);
		} else {
			//console.log("테마별 여행");
			setNavType(false);
			setIsOpen(true);
		}
	};
	console.log(isOpen);

	//알림 모달 창 toggle
	const handleNotification = () => {
		setIsNotifi(!isNotifi);
	};

	// 세부메뉴탭 보여질 때 border bottom 선과 메뉴탭 배경 색상 일치시키는 클래스
	let headerWrapperClass =
		"w-full h-[130px] bg-BASIC_WHITE border-b-2 border-LIGHT_GRAY_COLOR flex flex-col";
	if (isOpen) {
		headerWrapperClass =
			"w-full h-[130px] bg-BASIC_WHITE border-b-2 border-BASIC_BLACK flex flex-col";
	}

	return (
		<>
			<div className={headerWrapperClass}>
				<div className="flex justify-end w-full py-3 border-b-2 border-LIGHT_GRAY_COLOR text-LIGHT_GRAY_COLOR">
					<div className="ml-3">
						<DarkToggle />
					</div>

					{tempLogin ? (
						<>
							<button
								className="flex justify-end flex-1 md:flex-none ml-7"
								onClick={handleNotification}
							>
								<div className="flex realtive">
									<Bell fillColor={"#575353"} width={"28px"} height={"28px"} />
									<span className="relative top-0.5 flex w-2 h-2 right-3">
										<span className="absolute inline-flex w-full h-full bg-red-400 rounded-full opacity-75 animate-ping"></span>
										<span className="relative inline-flex w-2 h-2 rounded-full bg-POINT_COLOR"></span>
									</span>
								</div>
							</button>
							{isNotifi && <StoreNoti />}
							<button className="px-5 hover:text-BASIC_BLACK whitespace-nowrap">
								<Link to={"/mypage"}>마이페이지</Link>{" "}
							</button>
							<button className="px-5 hover:text-BASIC_BLACK whitespace-nowrap">
								로그아웃
							</button>
						</>
					) : (
						<>
							<Link to={"/login"}>
								<button className="px-5 hover:text-BASIC_BLACK whitespace-nowrap">
									로그인
								</button>
							</Link>
							<Link to={"/signup"}>
								<button className="px-5 hover:text-BASIC_BLACK whitespace-nowrap">
									회원가입
								</button>
							</Link>
						</>
					)}
				</div>
				<div className="flex items-center justify-between text-2xl font-bold grow text-BASIC_BLACK ">
					<Link to={"/"}>
						<div
							className="pl-3 text-4xl text-MAIN_COLOR md:px-9 font-bolder"
							onClick={onSubMenuClose}
						>
							TRIPTRIP
						</div>
					</Link>

					{/* 여행 대 메뉴 탭 */}
					<Mmenu openNav={openNav} onSubMenuClose={onSubMenuClose}/>
					<div className="items-center hidden h-full md:block whitespace-nowrap">
						<button
							className={navBtn}
							// 링크 이동 확인하느라 포커스 해제 잠시 주석처리 하겠습니다!
							// 그리고 onBlur 원인인지 메뉴클릭 -> 세부메뉴탭 클릭할 때 반짝이는 현상 있어요!
							// onBlur={onBlur}
							onClick={() => openNav("region")}
						>
							지역별 여행
						</button>
						<button
							className={navBtn}
							// onBlur={onBlur}
							onClick={() => openNav(null)}
						>
							테마별 여행
						</button>
						<Link to={"/forum"}>
							<button
								className={navBtn}
								// 만들어두셨던 onBlur 이름만 바꿔서 로고, 여행포럼 클릭할 땐 서브메뉴 안보이게 설정했어요!
								// 임시방편이라 원하시는 쪽으로 수정 보셔요!!!!!
								onClick={onSubMenuClose}
							>
								여행 포럼
							</button>
						</Link>
					</div>
				</div>
			</div>
			{isOpen && <Topnav trip={navType} />}
		</>
	);
};

export default Header;
