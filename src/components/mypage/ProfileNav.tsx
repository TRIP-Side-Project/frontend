import { Link } from "react-router-dom";

import Calendar2 from "@/assets/svg/Calendar2";
import Pencil from "@/assets/svg/Pencil";
import User from "@/assets/svg/User";
import Email from "@/assets/svg/Email";
import { MyDataProps } from "@/types/myProfile";
import useFormatDate from "@/hooks/useFormatDate";
import { useEffect, useState } from "react";

const ProfileNav = ({ data }: MyDataProps) => {
	const [formattedDate, setFormattedDate] = useState("");
	const sectionStyle =
		"border border-BASIC_BLACK dark:border-BASIC_WHITE p-5 flex flex-col text-center w-full sm:w-72 text-start mb-5 h-52";
	const titleStyle = "font-bold mb-3 text-lg";

	const parsedDate = useFormatDate(data.createdAt);
	// console.log("페이지랜더링 횟수 체크 ");

	useEffect(() => {
		if (data && parsedDate) {
			setFormattedDate(parsedDate);
		}
	}, [data, parsedDate]);

	return (
		<>
			<div className={sectionStyle}>
				<div className={titleStyle}>프로필</div>
				<div className="flex flex-row items-center mb-2">
					<User width={"25px"} height={"17px"} />
					<p className="ml-2">{data.nickname}</p>
				</div>
				<div className="flex flex-row items-center mb-2 ">
					<Email width={"22px"} height={"22px"} />
					<p className="ml-3">{data.email}</p>
				</div>
				<div className="flex flex-row items-center mb-2">
					<Calendar2 width={"22px"} height={"20px"} />
					<p className="ml-2">{`${formattedDate} 가입`}</p>
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
				<div className="flex flex-row whitespace-normal text-LIGHT_GRAY_COLOR">
					{data.tags && data.tags.length > 0 ? (
						data.tags.map((tag, idx) => (
							<div key={idx} className="mr-1.5">
								# {tag}
							</div>
						))
					) : (
						<div>관심 태그를 설정해주세요!</div>
					)}
				</div>
			</div>
		</>
	);
};

export default ProfileNav;
