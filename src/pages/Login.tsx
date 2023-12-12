import Google from "@/assets/svg/Google";
import kakao from "@/assets/img/kakao.png";
import naver from "@/assets/img/naver.png";

export default function Login() {
	const loginInputClass =
		"pl-3 border-BASIC_BLACK w-full border h-12 rounded-md";
	return (
		<>
			<div className="flex items-center justify-center w-full h-screen">
				<div className="w-[700px] h-[600px] border border-BASIC_BLACK text-center flex flex-col items-center justify-center">
					<div className="flex flex-col items-center justify-between w-1/2">
						<h1 className="text-2xl font-bold mb-7">로그인</h1>
						<form
							action="#"
							acceptCharset="utf-8"
							name="login_form"
							method="post"
							className="w-full"
						>
							<div className="flex flex-col items-center justify-between w-full gap-5">
								<input
									type="text"
									name="email"
									placeholder="이메일"
									className={loginInputClass}
								></input>
								<input
									type="password"
									name="password"
									placeholder="비밀번호"
									className={loginInputClass}
								></input>
								<button className="w-full h-12 text-xl font-bold border rounded-md bg-BTN_COLOR text-BASIC_WHITE">
									로그인
								</button>
							</div>
						</form>
						<div className="text-sm text-LIGHT_GRAY_COLOR w-full h-[50px] flex items-center justify-center gap-5">
							<button>비밀번호 찾기</button>
							<span>|</span>
							<button>회원가입</button>
						</div>
						<div className="h-0 border" />
						<div className="flex justify-center w-full py-5 item-center gap-14">
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
	);
}
