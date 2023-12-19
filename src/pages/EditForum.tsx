import { useForm, SubmitHandler } from "react-hook-form";
import TextEditor from "@/components/TextEditor";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

type Inputs = {
	title: string;
	tag: string;
	content: string;
};

interface ParentData {
	editData?: {
		title: string;
		content: string;
	};
	handleEditMode?: () => void;
}

const EditForum = ({ editData, handleEditMode }: ParentData) => {
	const BASE_URL = import.meta.env.VITE_BASE_URL;
	const ACCESS_TOKEN = window.localStorage.getItem("access_token");
	const navigation = useNavigate();
	const { articleId } = useParams();
	console.log(articleId);
	const {
		register,
		handleSubmit,
		setValue,
		formState: { errors },
	} = useForm<Inputs>();

	//mutation 새 게시글 등록
	const sendNewForumMutation = useMutation<void, Error, Inputs>({
		mutationFn: async (data) => {
			try {
				const res = await axios.post(
					`${BASE_URL}/api/articles`,

					data,
					{
						headers: {
							"Content-Type": "application/json",
							accessToken: `Bearer ${ACCESS_TOKEN}`,
						},
					},
				);
				console.log(`데이터 전달 성공 ${res}`);
				return res.data;
			} catch (err) {
				throw new Error(`데이터 전달 실패 ${err}`);
			}
		},
	});

	//새 게시글 등록
	const onSubmitNewForum: SubmitHandler<Inputs> = async (data) => {
		console.log(`리액트 훅 로직 시작`);
		try {
			const newArticleId = await sendNewForumMutation.mutateAsync(data);
			console.log(`새 ${newArticleId} 게시글 등록!`);
			console.log("새 게시글 등록 성공");
			//작성 된 게시글로 링크 이동 구현 필요 - ok
			//응답으로 생성된 게시글 아이디 받아야 함. - ok
			//굳이 iniital value 처리 할 필요 없다. - ok

			//만들어진 페이지로 이동
			navigation(`/forum/detail/${newArticleId}`);
			console.log(data);
		} catch (err) {
			console.error("데이터 전달 실패 ", err);
		}
	};

	//게시글 수정 등록
	const amendNewForumMutation = useMutation<void, Error, Inputs>({
		mutationFn: async (data) => {
			try {
				await axios.patch(`${BASE_URL}/api/articles/${articleId}`, data, {
					headers: {
						"Content-Type": "application/json",
						accessToken: `Bearer ${ACCESS_TOKEN}`,
					},
				});
				console.log("게시글 수정 axios");
			} catch (err) {
				throw new Error(`게시글 수정 등록 파트 ${err}`);
			}
		},
	});

	const onSubmitAmendForum: SubmitHandler<Inputs> = async (data) => {
		try {
			await amendNewForumMutation.mutateAsync(data);
			console.log("게시글 수정!");
			//수정된 게시글 페이지로 다시 이동
			if (handleEditMode) {
				handleEditMode();
			} else {
				console.log("handleEditMode 함수 미정의");
			}
		} catch (err) {
			throw new Error(`게시글 수정 실패 mutation: ${err}`);
		}
	};

	//ckeditor5에서 본문 가져오기
	const handleEditorData = (data: string) => {
		setValue("content", data);
	};

	const titleStyle = "font-bold text-lg my-1";
	const inputStyle =
		"bg-BASIC_WHITE rounded-xl border px-3 py-1 font-semibold text-sm border-BASIC_BLACK h-9 w-full";

	return (
		<div className="flex flex-col w-full px-5 text-BASIC_BLACK">
			<div className="">
				<div className="my-5 text-3xl font-bold">여행 후기</div>
				<p className="my-3 text-sm font-base">
					여러분의 즐거웠던 여행 후기를 공유해주세요!
				</p>
			</div>
			<form
				className="my-3"
				onSubmit={handleSubmit(
					editData ? onSubmitAmendForum : onSubmitNewForum,
				)}
			>
				{/* <div className="mb-8">
					<div className={titleStyle}>카테고리</div>
					<select className={inputStyle}>
						<option value="review">여행 후기</option>
						<option value="editor">에디터 추천</option>
					</select>
				</div> */}
				<div className="mb-8 ">
					<div className={titleStyle}>
						제목
						{errors.title && (
							<span className="ml-2 text-xs font-normal text-POINT_COLOR">
								! 제목은 8자 이상 작성하셔야 합니다.
							</span>
						)}
					</div>
					<input
						type="text"
						placeholder="제목을 입력해주세요."
						className={inputStyle}
						defaultValue={editData ? editData.title : ""}
						{...register("title", { required: true, minLength: 8 })}
					/>
				</div>
				<div className="mb-8">
					<div className={titleStyle}>태그</div>
					<input
						type="text"
						placeholder="태그를 입력해주세요"
						className={inputStyle}
						// {...register("tag", { required: true })}
					/>
				</div>
				<div className="mb-8 bg-pink-200 h-96">
					<div id="editor" className={titleStyle}>
						본문
					</div>
					<TextEditor
						handleEditorData={handleEditorData}
						editData={
							editData ? editData.content : "<p>이곳에 입력 해주세요.</p>"
						}
					/>
					<input
						type="text"
						{...register("content", { required: true, minLength: 20 })}
						className="hidden"
					/>
				</div>

				<div className="flex justify-end mt-32">
					<button className="blue_squareBtn w-[123px] bg-LINE_POINT_COLOR cursor-pointer">
						취소
					</button>
					<input
						type="submit"
						value="등록"
						className="blue_squareBtn w-[123px] cursor-pointer"
					/>
				</div>
			</form>
		</div>
	);
};

export default EditForum;
