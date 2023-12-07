import Google from "@/assets/svg/Google";
import Kakao from "@/assets/svg/Kakao";
import Naver from "@/assets/svg/Naver";

export default function Login () {
  return(
    <>
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="my-auto w-3/5 h-2/3 border border-BASIC_BLACK text-center flex flex-col items-center justify-center">
        <div className="w-1/2 h-2/3 m-auto flex flex-col justify-between items-center">
          <h1 className="text-xl font-bold mb-7">로그인</h1>
          <div className="h-48 flex flex-col items-center justify-between">
            <input type="text" placeholder="이메일" className="pl-3 border-BASIC_BLACK w-full border h-12 rounded-md"></input>
            <input type="password" placeholder="비밀번호" className="pl-3 border-BASIC_BLACK w-full border h-12 rounded-md"></input>
            <button className="text-xl font-bold w-full border h-12 rounded-md bg-BTN_COLOR text-BASIC_WHITE">로그인</button>
          </div>
          <div className="text-sm text-LIGHT_GRAY_COLOR w-2/4 flex items-center justify-around m-auto">
            <button>비밀번호 찾기</button>
            <span>|</span>
            <button>회원가입</button>
          </div>
          <div className="border h-0" />
          <div className="flex justify-between item-center">
            {/* oAuth 넣을 자리 */}
            <div>
              <Google width="25px" height="25px" />
            </div>
            <div>
              <Naver width="25px" height="25px" />
            </div>
            <div>
              <Kakao width="25px" height="25px" />
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}