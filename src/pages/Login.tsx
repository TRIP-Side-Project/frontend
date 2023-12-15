import Google from "@/assets/svg/Google";
import kakao from "@/assets/img/kakao.png";
import naver from "@/assets/img/naver.png";
import { ChangeEvent, useState } from "react";
import axios from "axios";


const Login = () => {

  const loginInputClass = "pl-3 border-BASIC_BLACK w-full border h-12 rounded-md";

  // 로그인 정보
  interface loginData {
    email: string,
    password: string,
  }

  const [loginInfo, setLoginInfo] = useState<loginData>({
    email: "",
    password: ""
  });

  const changeLoginValue = (event: ChangeEvent<HTMLInputElement>) => {
    setLoginInfo({
      ...loginInfo,
      [event.target.name]: event.target.value,
    })
  }

  // 로그인
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  const submitLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const fetchData = async () => {
				try {
					const response = await axios.post(`${BASE_URL}/api/members/login`, 
						{
              "email": loginInfo.email,
              "password": loginInfo.password,
            },
            {
							headers: {
								'Content-Type': 'application/json'
								// 'multipart/form-data' -> 이미지 파일 보낼 때 타입
							}
						}
					
					);
					console.log(response);
				} catch (error) {
					console.error("Error fetching data:", error);
				}
			};
			fetchData();
  }

  // 카카오 소셜 로그인
  const KAKAO_API_KEY = import.meta.env.KAKAO_REST_API_KEY;
  const REDIRECT_URI = import.meta.env.KAKAO_REDIRECT_URI;
  
  return(
    <>
    <div className="h-screen flex justify-center items-center w-full h-screen">
      <div className="w-[700px] h-[600px] border border-BASIC_BLACK text-center flex flex-col items-center justify-center">
        <div className="w-1/2 flex flex-col justify-between items-center">
          <h1 className="text-2xl font-bold mb-7">로그인</h1>
          <form className="w-full" onSubmit={submitLogin}>
            <div className="w-full flex flex-col items-center justify-between gap-5">
              <input type="text" value={loginInfo.email} name="email" onChange={changeLoginValue} placeholder="이메일" className={loginInputClass}></input>
              <input type="password" value={loginInfo.password} name="password" placeholder="비밀번호" onChange={changeLoginValue} className={loginInputClass}></input>
              <button className="text-xl font-bold w-full border h-12 rounded-md bg-BTN_COLOR text-BASIC_WHITE">로그인</button>
            </div>
          </form>
          <div className="text-sm text-LIGHT_GRAY_COLOR w-full h-[50px] flex items-center justify-center gap-5">
            <button>비밀번호 찾기</button>
            <span>|</span>
            <button>회원가입</button>
          </div>
          <div className="border h-0" />
          <div className="flex justify-center py-5 item-center w-full gap-14">
            <div className="cursor-pointer">
              <Google width="35px" height="35px" />
            </div>
            <div className="w-[35px] h-[35px] cursor-pointer">
              <img src={naver} alt="naver oauth" />
            </div>
            <a href={`https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${KAKAO_API_KEY}&redirect_uri=${REDIRECT_URI}`}>
              <div className="w-[35px] h-[35px] cursor-pointer">
                <img src={kakao} alt="kakao oauth" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
export default Login;