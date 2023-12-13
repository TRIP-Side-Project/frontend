import SignupInfo from "@/components/signup/SignupInput";
import axios from "axios";
import { ChangeEvent, useEffect, useRef, useState } from "react";

const Signup = () => {
	// 버튼

	// Input 에 글 작성을 감지해서 퍼센트 바 width 값 설정

	interface SignupData {
		userName: string;
		email: string;
		password: string;
		passwordCheck: string;
	}

	const [signupInfo, setSignupInfo] = useState<SignupData>({
		userName: "",
		email: "",
		password: "",
		passwordCheck: "",
	});

	const target = useRef<HTMLDivElement>(null);

	if (target.current) {
		target.current.style.width = "0%";
		if (signupInfo.userName !== "") {
			target.current.style.width = "25%"; // 스타일 변경
		}
		if (signupInfo.userName !== "" && signupInfo.email !== "") {
			target.current.style.width = "50%";
		}
		if (
			signupInfo.userName !== "" &&
			signupInfo.email !== "" &&
			signupInfo.password !== ""
		) {
			target.current.style.width = "75%";
		}
		if (
			signupInfo.userName !== "" &&
			signupInfo.email !== "" &&
			signupInfo.password !== "" &&
			signupInfo.passwordCheck !== ""
		) {
			target.current.style.width = "100%";
		}
	}

	const changeNameValue = (event: ChangeEvent<HTMLInputElement>) => {
		setSignupInfo({
			...signupInfo,
			[event.target.name]: event.target.value,
		});
	};

	// 비밀번호 유효성 검사
	const [vaildPw, setVaildPw] = useState(false);
	const regex = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;
	const signupInfoPw = signupInfo.password;
	useEffect(() => {
		if (regex.test(signupInfo.password)) {
			setVaildPw(true);
		} else {
			setVaildPw(false);
		}
	}, [signupInfoPw]);

	// 비밀번호 재입력 확인
	const [correctPw, setCorrectPw] = useState(false);
	const signupInfoPwCheck = signupInfo.passwordCheck;
	useEffect(() => {
		if (signupInfo.password === signupInfo.passwordCheck) {
			setCorrectPw(true);
		} else {
			setCorrectPw(false);
		}
	}, [signupInfoPwCheck]);

	// 프로필 이미지 업로드
	const [imageFile, setImageFile] = useState<string>("");
	const handleImageFile = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.files !== null) {
			const selectedFile = event.target.files[0];
			if (selectedFile) {
				const blobURL = URL.createObjectURL(selectedFile);
				setImageFile(blobURL); // Blob URL을 상태로 설정
			}
		}
	};

	// 회원가입 제출
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault;

		const fetchData = async () => {
			try {
				const response = await axios.post("https://api.example.com/data", {
					// 전달할 내용
					// 통신 연결 시 확인 및 코드 구축
					name: signupInfo.userName,
				});
				console.log(response);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};
		fetchData();
	};

	return (
		<>
			<div className="flex justify-center w-full align-center">
				<div className="flex justify-center w-3/5 my-32 border border-BASIC_BLACK align-center">
					<div className="flex flex-col justify-between w-2/3 gap-10 py-12 mx-auto align-center">
						<h1 className="text-xl font-bold text-center">회원가입</h1>
						<div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
							<div
								className="bg-MAIN_COLOR h-2.5 rounded-full duration-300"
								style={{ width: "0%" }}
								ref={target}
							/>
						</div>
						<form onSubmit={handleSubmit}>
							<div className="flex flex-col gap-8">
								<div>
									<h2 className="pb-2">사진 업로드</h2>
									<div className="flex gap-2">
										<div className="relative overflow-hidden rounded-md w-28 h-28 bg-LIGHT_GRAY_COLOR">
											<label
												htmlFor="chooseImage"
												className="absolute w-20 text-center transform -translate-x-1/2 bg-gray-500 rounded-full cursor-pointer bottom-2 left-1/2 text-BASIC_WHITE opacity-80"
											>
												등록
											</label>
											{imageFile && (
												<img
													src={imageFile}
													alt="profile image"
													className="w-full h-full"
												/>
											)}
											<input
												type="file"
												onChange={handleImageFile}
												id="chooseImage"
												className="hidden"
											></input>
										</div>
										<div className="text-xs text-ETC_COLOR">
											<p className="text-left">
												! 10kb 미만의 사진을 업로드 해주세요!
											</p>
											<p className="text-left">
												! 등록하시지 않을 경우 기본 이미지가 업로드 됩니다.
											</p>
										</div>
									</div>
								</div>
								<SignupInfo
									title={"이름"}
									type={"text"}
									value={signupInfo.userName}
									name={"userName"}
									placeholder={"이름"}
									changeValue={changeNameValue}
								/>
								<div>
									<SignupInfo
										title={"이메일"}
										type={"text"}
										value={signupInfo.email}
										name={"email"}
										placeholder={"이메일"}
										changeValue={changeNameValue}
									/>
									<div className="mt-2 text-right">
										<button className="px-2 py-1 rounded-md bg-BTN_COLOR text-BASIC_WHITE">
											이메일 인증하기
										</button>
									</div>
								</div>
								<div>
									<SignupInfo
										title={"비밀번호"}
										type={"password"}
										value={signupInfo.password}
										name={"password"}
										placeholder={"비밀번호"}
										changeValue={changeNameValue}
									/>
									{!vaildPw && (
										<p className="pt-1 text-xs text-ETC_COLOR">
											! 영문, 숫자로 이루어진 8자리 이상 입력해주세요.
										</p>
									)}
								</div>
								<div>
									<SignupInfo
										title={"비밀번호 재입력"}
										type={"password"}
										value={signupInfo.passwordCheck}
										name={"passwordCheck"}
										placeholder={"비밀번호 재입력"}
										changeValue={changeNameValue}
									/>
									{!correctPw && (
										<p className="pt-1 text-xs text-POINT_COLOR">
											! 비밀번호가 일치하지 않습니다.
										</p>
									)}
								</div>
								<button
									type="submit"
									className="py-3 text-xl font-bold rounded-md bg-BTN_COLOR text-BASIC_WHITE"
								>
									회원가입
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default Signup;
