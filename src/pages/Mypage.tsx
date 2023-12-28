import { useState } from "react";
import EditProfile from "@/components/mypage/EditProfile";
import Mine from "@/components/mypage/Mine";
import PwdModal from "@/components/modal/PwdModal";
import Lock from "@/assets/svg/Lock";

import DeleteMemModal from "@/components/modal/DeleteMemModal";
import ProfileNav from "@/components/mypage/profileNav";
import MenuDot from "@/assets/svg/MenuDot";
import ArrowDown from "@/assets/svg/ArrowDown";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import ErrState from "@/components/Loading/ErrState";
import Loading from "@/components/Loading/Loading";
import TokenModal from "@/components/modal/TokenModal";

const Mypage = () => {
	const BASER_URL = import.meta.env.VITE_BASE_URL;
	const ACCESS_TOKEN = window.localStorage.getItem("access_token");

	//프로필 수정 모달 온오프
	const [isChange, setIsChange] = useState(false);
	//회원 탈퇴 모달 온오프
	const [isDeleteMem, setIsDeleteMem] = useState(false);
	//모바일 환경 프로필 Nav 온오프
	const [isOpenNav, setIsOpenNav] = useState(false);
	//토큰 이동 모달 온오프
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handlePwd = () => {
		setIsChange(!isChange);
	};

	const handleOpenNav = () => {
		setIsOpenNav(!isOpenNav);
	};

	//마이 페이지 조회
	const getMyProfile = async () => {
		try {
			const response = await axios.get(`${BASER_URL}/api/members/me`, {
				headers: {
					accessToken: `Bearer ${ACCESS_TOKEN}`,
				},
			});
			return response.data;
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (err: any) {
			if (err.response.status === 401) {
				//토큰 만료
				setIsModalOpen(true);
			}

			// throw new Error(`마이페이지 데이터 GET 파트 : ${err}`);
		}
	};

	const { isPending, isError, data, error } = useQuery({
		queryKey: ["mayPage"],
		queryFn: getMyProfile,
	});

	if (isPending) return <Loading />;
	if (isError) return <ErrState err={error.message} />;

	return (
		<div className="flex flex-col w-full px-2 mb-20 text-BASIC_BLACK dark:bg-BASIC_BLACK dark:text-BASIC_WHITE">
			<EditProfile data={data} />
			<div className="flex flex-col-reverse mt-2 sm:mt-5 sm:flex-row ">
				{/* 왼쪽 섹션 */}
				<div className="flex flex-col sm:mr-10">
					<div className="hidden sm:block">
						<ProfileNav data={data} />
					</div>
					<div className="flex justify-between mt-5 text-sm sm:mt-0">
						{isChange && <PwdModal isClick={handlePwd} />}
						{isDeleteMem && (
							<DeleteMemModal isClick={() => setIsDeleteMem(!isDeleteMem)} />
						)}
						<button
							className="flex flex-row px-4 py-1 text-sm font-semibold border rounded-lg bg-BASIC_WHITE border-LIGHT_GRAY_COLOR hover:bg-LINE_POINT_COLOR"
							onClick={handlePwd}
						>
							<Lock width={"20px"} height={"20px"} />
							<p className="ml-2 dark:text-BASIC_BLACK">비밀번호 변경</p>
						</button>
						<button
							className="hover:text-MAIN_COLOR"
							onClick={() => setIsDeleteMem(!isDeleteMem)}
						>
							회원 탈퇴
						</button>
					</div>
				</div>
				{/* 오른쪽 섹션 */}
				{!isOpenNav && <Mine />}

				<div className="mb-2 sm:hidden">
					{isOpenNav ? (
						<ArrowDown
							width={"20px"}
							height={"20px"}
							onClick={() => handleOpenNav()}
						/>
					) : (
						<MenuDot
							width={"20px"}
							height={"20px"}
							onClick={() => handleOpenNav()}
						/>
					)}

					{isOpenNav && <ProfileNav data={data} />}
				</div>
			</div>
			{isModalOpen && <TokenModal noClick={() => setIsModalOpen(false)} />}
		</div>
	);
};

export default Mypage;
