import { Link } from "react-router-dom";
import { useState } from "react";
import EditProfile from "@/components/mypage/EditProfile";
import Mine from "@/components/mypage/Mine";
import PwdModal from "@/components/modal/PwdModal";
import Lock from "@/assets/svg/Lock";
import Pencil from "@/assets/svg/Pencil";
import User from "@/assets/svg/User";
import Email from "@/assets/svg/Email";
import DeleteMemModal from "@/components/modal/DeleteMemModal";
import Calendar2 from "@/assets/svg/Calendar2";

const Mypage = () => {
	//프로필 수정 모달 온오프
	const [isChange, setIsChange] = useState(false);
	//회원 탈퇴 모달 온오프
	const [isDeleteMem, setIsDeleteMem] = useState(false);
	const sectionStyle =
		"border border-BASIC_BLACK dark:border-BASIC_WHITE p-5 flex flex-col text-center w-72 text-start mb-5 h-52";
	const titleStyle = "font-bold mb-3 text-lg";

	const handlePwd = () => {
		setIsChange(!isChange);
	};

	return (
		<div className="flex flex-col w-full px-2 mb-20 text-BASIC_BLACK dark:bg-BASIC_BLACK dark:text-BASIC_WHITE">
			<EditProfile />
			<div className="flex flex-row mt-5 ">
				{/* 왼쪽 섹션 */}
				<div className="flex flex-col mr-10">
					<div className={sectionStyle}>
						<div className={titleStyle}>프로필</div>
						<div className="flex flex-row items-center mb-2">
							<User width={"25px"} height={"17px"} />
							<p className="ml-2">아리</p>
						</div>
						<div className="flex flex-row items-center mb-2">
							<Email width={"22px"} height={"22px"} />
							<p className="ml-3">Email@Email.com</p>
						</div>
						<div className="flex flex-row items-center">
							<Calendar2 width={"22px"} height={"20px"} />
							<p className="ml-2">2023년 11월 24일 가입</p>
						</div>
					</div>
					<div className={sectionStyle}>
						<div className={titleStyle}>여행 경험을 공유해 주세요!</div>
						<div className="flex flex-row items-center">
							<Pencil width={"23px"} height={"23px"} />
							<p className="ml-2">
								<Link to="/forum/edit">포럼 작성하기</Link>
							</p>
						</div>
					</div>
					<div className={sectionStyle}>
						<div className={titleStyle}>관심 태그 설정</div>
						<div>#경주 #겨울여행</div>
					</div>
					<div className="flex justify-between text-sm ">
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
				<Mine />
			</div>
		</div>
	);
};

export default Mypage;
