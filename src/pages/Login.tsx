import Google from "@/assets/svg/Google";
import kakao from "@/assets/img/kakao.png";
import naver from "@/assets/img/naver.png";

export default function Login () {
  const loginInputClass = "pl-3 border-BASIC_BLACK w-full border h-12 rounded-md";
  return(
    <>
    <div className="h-screen flex justify-center items-center">
      <div className="w-[700px] h-[600px] border border-BASIC_BLACK text-center flex flex-col items-center justify-center">
        <div className="w-1/2 flex flex-col justify-between items-center">
          <h1 className="text-2xl font-bold mb-7">로그인</h1>
          <form action="#" acceptCharset="utf-8" name="login_form" method="post" className="w-full">
            <div className="w-full flex flex-col items-center justify-between gap-5">
              <input type="text" name="email" placeholder="이메일" className={loginInputClass}></input>
              <input type="password" name="password" placeholder="비밀번호" className={loginInputClass}></input>
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