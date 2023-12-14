import Google from "@/assets/svg/Google";
import kakao from "@/assets/img/kakao.png";
import naver from "@/assets/img/naver.png";
import { ChangeEvent, MouseEventHandler, useState } from "react";
import axios from "axios";

export default function Login () {

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
  // FormEventHandler<HTMLFormElement>
  console.log(loginInfo);
  const postLogin:MouseEventHandler<HTMLButtonElement>  = async (event) => {
    event.preventDefault();

    try {
        await axios.post('/proxy/api/members/join', {
          "email": loginInfo.email,
          "password": loginInfo.password,
          "nickname": "메롱",
        });
        // const data = response.data;
        console.log("버튼 클릭!");
        
    } catch (error) {
        console.error('요청 실패:', error);
    }
  }


  return(
    <>
    <div className="h-screen flex justify-center items-center w-full h-screen">
      <div className="w-[700px] h-[600px] border border-BASIC_BLACK text-center flex flex-col items-center justify-center">
        <div className="w-1/2 flex flex-col justify-between items-center">
          <h1 className="text-2xl font-bold mb-7">로그인</h1>
          <form className="w-full">
            <div className="w-full flex flex-col items-center justify-between gap-5">
              <input type="text" value={loginInfo.email} name="email" onChange={changeLoginValue} placeholder="이메일" className={loginInputClass}></input>
              <input type="password" value={loginInfo.password} name="password" placeholder="비밀번호" onChange={changeLoginValue} className={loginInputClass}></input>
              <button onClick={postLogin} className="text-xl font-bold w-full border h-12 rounded-md bg-BTN_COLOR text-BASIC_WHITE">로그인</button>
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
            <div className="w-[35px] h-[35px] cursor-pointer">
              <img src={kakao} alt="kakao oauth" />
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
