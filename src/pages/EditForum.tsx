import { ChangeEvent, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { useMutation } from "@tanstack/react-query";
// import { SubmitHandler } from "react-hook-form";
import axios from "axios";
import EditorLexical from "@/components/lexical/EditorLexical";
import RecoilTag from "@/common/tag/RecoilTag";
import useOutsideClick from "@/hooks/useOutsideClick";
import { tagState } from "@/store/tagState";
import { useRecoilValue } from "recoil";

type Inputs = {
	title: string;
	tags: string[];
	content: string;
};

interface ParentData {
	editData?: {
		title: string;
		tags: string[];
		content: string;
	};
	handleEditMode?: () => void;
	isEdit?: boolean;
}

const EditForum = ({ editData, handleEditMode, isEdit }: ParentData) => {
	const BASE_URL = import.meta.env.VITE_BASE_URL;
	const ACCESS_TOKEN = window.localStorage.getItem("access_token");
	const navigation = useNavigate();
	const { articleId } = useParams();
	console.log("페이지 랜더링 되는 중 ");

	//태그 드롭다운 & 태그 담을 데이터
	const [isTagOpen, setIsTagOpen] = useState<boolean>(false);
	const tagList = useRecoilValue(tagState);

	//react-hook-form
	// const {
	// 	register,
	// 	handleSubmit,
	// 	getValues,
	// 	setValue,
	// 	// watch,
	// 	formState: { errors },
	// } = useForm<Inputs>();

	// console.log("watch react-hook-fom===");
	// console.log(watch("tags"));

	//태그 온오프 함수
	const onOffTag = () => {
		setIsTagOpen(!isTagOpen);
	};

	const ref = useOutsideClick({
		onClickOutside: () => {
			setIsTagOpen(false);
		},
	});

	// console.log(getValues("tags"));
	// const [title, setTitle] = useState("");
	// const [content, setContent] = useSatet("");
	const [editorData, setEditorData] = useState<Inputs>({
		title: editData ? editData.title : "",
		tags: editData ? [...editData.tags] : [],
		content: editData ? editData.content : "",
	});

	//title 입력
	const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
		// console.log(e.target.value);
		setEditorData({
			...editorData,
			title: e.target.value,
		});
		// -> 페이지 렌더링 제거
	};

	//Editor에서 본문 가져오기
	const handleEditorData = (data: string) => {
		// console.log(data);
		// setValue("content", data);
		setEditorData({
			...editorData,
			content: data,
		});
	};

	//태그 가져오기  -> 랜더링..
	// useEffect(() => {
	// 	setEditorData({
	// 		...editorData,
	// 		tags:tagList
	// 	})
	// }, [editorData, tagList])

	//유효성 검증
	const isDisableTag = tagList.length <= 3;
	const isDisableTitle =
		editorData.title.length >= 5 && editorData.title.length <= 20;
	const isDisableContent = editorData.content.length >= 20;
	const isOverContent = editorData.content.length <= 15000;
	console.log(editorData.title.length);
	console.log(isDisableTitle);

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
							withCredentials: true,
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
	// const onSubmitNewForum: SubmitHandler<Inputs> = async (data) => {
	const onSubmitNewForum = async () => {
		const sendFinalData = {
			...editorData,
			tags: tagList,
		};
		try {
			const newArticleId =
				await sendNewForumMutation.mutateAsync(sendFinalData);
			console.log(`새 ${newArticleId} 게시글 등록!`);
			console.log("새 게시글 등록 성공");
			// //작성 된 게시글로 링크 이동 구현 필요 - ok
			// //응답으로 생성된 게시글 아이디 받아야 함. - ok
			// //굳이 iniital value 처리 할 필요 없다. - ok

			// //만들어진 페이지로 이동
			navigation(`/forum/detail/${newArticleId}`);
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
						withCredentials: true,
						accessToken: `Bearer ${ACCESS_TOKEN}`,
					},
				});
				console.log("게시글 수정 axios");
			} catch (err) {
				throw new Error(`게시글 수정 등록 파트 ${err}`);
			}
		},
	});

	// const onSubmitAmendForum: SubmitHandler<Inputs> = async (data) => {
	const onSubmitAmendForum = async () => {
		const sendFinalData = {
			...editorData,
			tags: tagList,
		};
		try {
			await amendNewForumMutation.mutateAsync(sendFinalData);
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

	const titleStyle = "font-bold text-lg my-1";
	const inputStyle =
		"bg-BASIC_WHITE rounded-xl border px-3 py-1 font-semibold text-sm border-BASIC_BLACK h-9 w-full";
	//유효성 버튼 설정
	const validBtnStyle =
		isDisableTag && isDisableTitle && isDisableContent && isOverContent
			? "blue_squareBtn"
			: "py-2 px-5 my-3 mx-2 text-center bg-LIGHT_GRAY_COLOR text-BASIC_WHITE rounded-lg font-medium";
	// console.log(validBtnStyle);

	return (
		<div className="flex flex-col mx-auto w-full px-5 text-BASIC_BLACK dark:bg-BASIC_BLACK dark:text-BASIC_WHITE max-w-[870px]">
			<div className="">
				<div className="my-5 text-3xl font-bold">여행 후기</div>
				<p className="my-3 text-sm font-base">
					여러분의 즐거웠던 여행 후기를 공유해주세요!
				</p>
			</div>
			<form
				className="my-3"
				// onSubmit={handleSubmit(
				// 	editData ? onSubmitAmendForum : onSubmitNewForum,
				// )}
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
						{/* {errors.title && ( */}
						{editorData.title && !isDisableTitle && (
							<span className="ml-2 text-xs font-normal text-POINT_COLOR">
								! 제목은 5자 이상 20자 미만으로 작성해주세요.
							</span>
						)}
					</div>
					<input
						type="text"
						placeholder="제목을 입력해주세요."
						className={inputStyle}
						defaultValue={editData ? editData.title : ""}
						onChange={onChangeTitle}
						// {...register("title", { required: true, minLength: 8 })}
					/>
				</div>
				<div className="mb-8 " ref={ref}>
					<div className={titleStyle}>
						태그
						{tagList && !isDisableTag && (
							<span className="ml-2 text-xs font-normal text-POINT_COLOR">
								! 태그는 최대 3개까지만 선택 가능합니다.
							</span>
						)}
					</div>
					<RecoilTag
						isTagOpen={isTagOpen}
						onOffTag={onOffTag}
						editData={editData}
					/>
				</div>

				<div className="mb-8 ">
					<div id="editor" className={titleStyle}>
						본문
						{editorData.content && !isDisableContent && (
							<span className="ml-2 text-xs font-normal text-POINT_COLOR">
								! 본문은 최소 30자 이상 작성해야 합니다.
							</span>
						)}
						{editorData.content && !isOverContent && (
							<span className="ml-2 text-xs font-normal text-POINT_COLOR">
								! 본문은 최대 15,000자 까지 작성 간으합니다.
							</span>
						)}
					</div>

					<EditorLexical
						handleEditorData={handleEditorData}
						editData={editData?.content}
						isEdit={isEdit}
					/>
				</div>

				<div className="flex justify-end">
					<button className="blue_squareBtn w-[123px] bg-LINE_POINT_COLOR cursor-pointer">
						취소
					</button>
					{/* <input
						type="submit"
						value="등록"
						className="blue_squareBtn w-[123px] cursor-pointer"
						disabled={!isDisableTag}
					/> */}
					<button
						className={`${validBtnStyle} w-[123px] cursor-pointer`}
						onClick={(event: React.MouseEvent) => {
							event.preventDefault();
							editData ? onSubmitAmendForum() : onSubmitNewForum();
							console.log("최종 버튼 클릭", editData);
						}}
						disabled={
							!isDisableTag ||
							!isDisableTitle ||
							!isDisableContent ||
							!isOverContent
						}
					>
						등록
					</button>
				</div>
			</form>
		</div>
	);
};

export default EditForum;
