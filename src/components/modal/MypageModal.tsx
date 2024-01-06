import Close from "@/assets/svg/Close";
import RecoilTag from "@/common/tag/RecoilTag";
// import useOutsideClick from "@/hooks/useOutsideClick";
import { tagState } from "@/store/tagState";
// import Upload from "@/assets/svg/Upload";
import { MyPageTypes } from "@/types/myProfile";
import { ToggleTypes } from "@/types/toggle";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { useRecoilValue } from "recoil";

interface TempProps extends ToggleTypes {
	data: MyPageTypes;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MyPageModal = ({ isClick, data, setIsOpen }: TempProps) => {
	const BASE_URL = import.meta.env.VITE_BASE_URL;
	const ACCESS_TOKEN = window.localStorage.getItem("access_token");

	const [name, setName] = useState<string>(data.nickname);
	const [introduce, setIntroduce] = useState<string | null>(data.intro);
	const [myImg, setMyImg] = useState<string>(data.profileImg);
	const [sendImgFile, setSendImgFile] = useState<File | null>(null);
	const [isTagOpen, setIsTagOpen] = useState<boolean>(false);
	const tagList = useRecoilValue(tagState);

	//스타일 설정
	const inputStyle =
		"rounded-lg border border-BASIC_BLACK px-2 py-1 mt-2 mb-5 w-full";
	const titleStyle = "text-BASIC_BLACK font-bold text-lg mt-5";

	//프로필 이미지 새로 등록
	const amendMyProfileMutation = useMutation<void, Error, FormData>({
		mutationFn: async (data) => {
			try {
				await axios.patch(`${BASE_URL}/api/members/me`, data, {
					headers: {
						"Content-Type": "multipart/form-data",
						accessToken: `Bearer ${ACCESS_TOKEN}`,
					},
				});
				setIsOpen(false);
			} catch (err) {
				throw new Error(`프로필 수정 파트 : ${err}`);
			}
		},
	});
	const newFormData = new FormData();
	const amendMyProfile = async () => {
		newFormData.append("nickname", name);
		if (introduce) {
			newFormData.append("intro", introduce);
		}
		if (tagList && tagList.length > 0) {
			// newFormData.append("tags", JSON.stringify(amendTags));
			newFormData.append("tags", tagList.join(","));
		} else {
			newFormData.append("tags", "");
		}
		if (sendImgFile) {
			newFormData.append("profileImg", sendImgFile);
		}

		try {
			await amendMyProfileMutation.mutateAsync(newFormData);
		} catch (err) {
			throw new Error(`프로필 수정 mutation: ${err}`);
		}
	};

	//태그 온오프 함수
	const onOffTag = () => {
		setIsTagOpen(!isTagOpen);
	};

	// const ref = useOutsideClick({
	// 	onClickOutside: () => {
	// 		setIsTagOpen(false);
	// 	},
	// });

	//유효성 검증
	const isValidName = name.length > 0 && name.length <= 10;
	const isValidIntro =
		(introduce !== null && introduce.length <= 20) || introduce === null
			? true
			: false;
	const isValidTags = tagList.length <= 5;
	const validBtnStyle =
		isValidName && isValidIntro && isValidTags
			? "blue_squareBtn"
			: "py-2 px-5 my-3 mx-2 text-center bg-LIGHT_GRAY_COLOR text-BASIC_WHITE rounded-lg font-medium";

	return (
		<div className="fixed inset-0 z-50 flex items-end justify-center w-screen min-h-full p-4 overflow-y-auto text-center transition-opacity bg-gray-500 bg-opacity-75 sm:items-center sm:p-0">
			<div className="relative px-10 py-5 overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl w-[560px]">
				<button className="float-right px-3 pb-2 mt-2" onClick={isClick}>
					<Close fillColor={"#333333"} width={"18px"} height={"18px"} />
				</button>
				<form className="my-10">
					<div className={titleStyle}> 프로필 이미지</div>
					<div className="flex flex-row items-center justify-around w-full h-32 p-5 rounded-lg w bg-zinc-300">
						<img
							src={myImg}
							alt="마이 프로필 이미지"
							className="h-24 mr-5 rounded-full shadow-lg"
						/>
						<div>
							<p className="ml-2 text-xs font-normal text-ETC_COLOR">
								! 10kb 미만의 사진을 업로드 해주세요!
							</p>
							<p className="ml-2 text-xs font-normal text-ETC_COLOR">
								! 등록하시지 않을 경우 기본 이미지가 업로드 됩니다.
							</p>
							<input
								type="file"
								className="mt-3"
								onChange={(e) => {
									if (e.currentTarget.files?.[0]) {
										const file = e.currentTarget.files[0];
										console.log(file);

										// newFormData.append("profileImg", file);
										// console.log(newFormData);
										setSendImgFile(file);

										const reader = new FileReader();
										reader.readAsDataURL(file);
										reader.onload = (event) => {
											setMyImg(event.target?.result as string);
										};
									}
								}}
							></input>
							{/* <button
								className="blue_squareBtn w-[220px] h-fit flex flex-row items-center justify-center"
								onClick={(e) => {
									e.preventDefault();
								}}
							>
								<span className="pr-3">이미지 업로드</span>
								<Upload
									fillColor={"#FcFcFcFc"}
									width={"15px"}
									height={"15px"}
								/>
							</button> */}
						</div>
					</div>
					<div className={titleStyle}>
						이름
						{name.length === 0 && !isValidName && (
							<span className="ml-2 text-xs font-normal text-POINT_COLOR">
								! 이름은 반드시 작성해주세요 (10자 미만)
							</span>
						)}
					</div>
					<input
						className={inputStyle}
						type="text"
						value={name}
						placeholder={"닉네임을 정해주세요!"}
						onChange={(e) => setName(e.target.value)}
					/>
					<div className={titleStyle}>
						자기소개 한 줄
						{!isValidIntro && (
							<span className="ml-2 text-xs font-normal text-POINT_COLOR">
								! 최대 20자 까지만 작성 가능합니다.
							</span>
						)}
					</div>
					<input
						className={inputStyle}
						type="text"
						value={introduce === null ? "" : introduce}
						onChange={(e) => setIntroduce(e.target.value)}
					/>
					<div className={titleStyle}>
						관심태그
						{!isValidTags && (
							<span className="ml-2 text-xs font-normal text-POINT_COLOR">
								! 최대 5개까지만 설정 가능합니다.
							</span>
						)}
					</div>
					<RecoilTag
						isTagOpen={isTagOpen}
						onOffTag={onOffTag}
						inputStyle={inputStyle}
						editData={data.tags}
					/>
					{/* <input className={inputStyle} type="text" /> */}
				</form>
				<button
					className={`${validBtnStyle} w-[178px] cursor-pointer`}
					onClick={(event: React.MouseEvent) => {
						event.preventDefault();
						amendMyProfile();
					}}
					disabled={!isValidName || !isValidIntro || !isValidTags}
				>
					프로필 수정 완료
				</button>
			</div>
		</div>
	);
};

export default MyPageModal;
