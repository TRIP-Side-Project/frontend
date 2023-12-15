import axios from "axios";
import { ChangeEventHandler, FormEventHandler, useState } from "react";
import { Link } from "react-router-dom";

const FindPw = () => {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const [emailValue, setEmailValue] = useState("");
  const [sendEmail, setSendEmail] = useState(false);

    // 비밀번호 찾기
  const handleEmailValue: ChangeEventHandler<HTMLInputElement> = (event) => {
    setEmailValue(event.target.value);
  }
  // console.log(emailValue);

  const handleSendEmail = () => {
    setSendEmail(true);
  }

  const submitFindPw: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const submitData = async () => {
      try{
        const response = await axios.post(
          `${BASE_URL}/api/members/find/password`,
          {"email": emailValue},
          
          {
						headers: {
							'Content-Type': 'application/json'
						}
					});
          console.log(response);
          handleSendEmail();
      } catch (error) {
				console.error("Error fetching data:", error);
      }
    }
    submitData();
  }

  return(
    <>
      <div className="w-full h-[500px] flex items-center justify-center">
        <div className="w-1/2 md:w-1/3 flex flex-col items-center gap-10 m-auto">
          <h1 className="text-2xl md:text-3xl font-bold">비밀번호 찾기</h1>
          <form className="w-full flex flex-col gap-10" onSubmit={submitFindPw}>
            <div>
              <input type="text" onChange={handleEmailValue} value={emailValue} placeholder="이메일을 입력해주세요" className="w-full bg-blue-100 px-3 py-2 h-12 rounded-md focus:outline-MAIN_COLOR "></input>
              {sendEmail && <p className="text-sm pl-3 pt-1 text-POINT_COLOR">작성한 이메일의 메일함을 확인해주세요.</p>}
            </div>
            <button className="text-xl font-bold w-full border h-12 rounded-md bg-BTN_COLOR text-BASIC_WHITE">비밀번호 찾기</button>
          </form>
          <Link to={'/login'}>
            <p className="text-DARK_GRAY_COLOR cursor-pointer">로그인 하러가기</p>
          </Link>
        </div>
      </div>
    </>
  )
}
export default FindPw;