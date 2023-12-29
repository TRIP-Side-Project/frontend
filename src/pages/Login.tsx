import Google from "@/assets/svg/Google";
import kakao from "@/assets/img/kakao.png";
import naver from "@/assets/img/naver.png";
import { ChangeEvent, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { useSetRecoilState } from "recoil";
import { loginSelector } from "@/store/loginState";
// import { useMutation } from "@tanstack/react-query";

const Login = () => {
	// 스타일 클래스
	const loginInputClass =
		"pl-3 border-BASIC_BLACK w-full border h-12 rounded-md";
	const BASE_URL = import.meta.env.VITE_BASE_URL;

	const setIsLogin = useSetRecoilState(loginSelector);

	// 로그인 정보
	interface LoginData {
		email: string;
		password: string;
	}

	const [loginInfo, setLoginInfo] = useState<LoginData>({
		email: "",
		password: "",
	});

	const changeLoginValue = (event: ChangeEvent<HTMLInputElement>) => {
		setLoginInfo({
			...loginInfo,
			[event.target.name]: event.target.value,
		});
	};

	// 로그인 요청

	const navigator = useNavigate();

	const bodyData: LoginData = {
		email: loginInfo.email,
		password: loginInfo.password,
	};

	const mutation = useMutation({
		mutationFn: () => {
			return axios.post(`${BASE_URL}/api/members/login`, bodyData, {
				headers: {
					"Content-Type": "application/json",
				},
			});
		},
	});

	const submitLogin = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		try {
			const response = await mutation.mutateAsync();
			const token = response.data.accessToken;
			const memberId = response.data.memberId;
			const profileImgUrl = response.data.profileImgUrl;
			if (token) localStorage.setItem("access_token", token);
			if (memberId) localStorage.setItem("memberId", memberId);
			if (profileImgUrl) localStorage.setItem("profileImg", profileImgUrl);
			setIsLogin(true);
			navigator("/");
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	};

	// 리프레시 토큰 쿠키 저장 확인 후에 액세스 토큰 만료시 재 요청하는 코드 작성 예정(12.15)

	return (
		<>
			<div className="flex items-center justify-center w-full h-screen">
				<div className="w-[700px] h-[600px] border border-BASIC_BLACK text-center flex flex-col items-center justify-center">
					<div className="flex flex-col items-center justify-between w-1/2">
						<h1 className="text-2xl font-bold mb-7">로그인</h1>
						<form className="w-full" onSubmit={submitLogin}>
							<div className="flex flex-col items-center justify-between w-full gap-5">
								<input
									type="text"
									value={loginInfo.email}
									name="email"
									onChange={changeLoginValue}
									placeholder="이메일"
									className={loginInputClass}
								></input>
								<input
									type="password"
									value={loginInfo.password}
									name="password"
									placeholder="비밀번호"
									onChange={changeLoginValue}
									className={loginInputClass}
								></input>
								<button
									type="submit"
									className="w-full h-12 text-xl font-bold border rounded-md bg-BTN_COLOR text-BASIC_WHITE"
								>
									로그인
								</button>
							</div>
						</form>
						<div className="text-sm text-LIGHT_GRAY_COLOR w-full h-[50px] flex items-center justify-center gap-5">
							<Link to={"/findpw"}>
								<button>비밀번호 찾기</button>
							</Link>
							<span>|</span>
							<Link to={"/signup"}>
								<button>회원가입</button>
							</Link>
						</div>
						<div className="h-0 border" />
						<div className="flex justify-center w-full py-5 item-center gap-14">
							<a href={`${BASE_URL}/oauth2/authorization/google`}>
								<div className="cursor-pointer">
									<Google width="35px" height="35px" />
								</div>
							</a>
							<a href={`${BASE_URL}/oauth2/authorization/naver`}>
								<div className="w-[35px] h-[35px] cursor-pointer">
									<img src={naver} alt="naver oauth" />
								</div>
							</a>
							<a href={`${BASE_URL}/oauth2/authorization/kakao`}>
								<div className="w-[35px] h-[35px] cursor-pointer">
									<img src={kakao} alt="kakao oauth" />
								</div>
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default Login;
