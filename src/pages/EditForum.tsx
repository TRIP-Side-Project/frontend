import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { useMutation } from "@tanstack/react-query";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import EditorLexical from "@/components/lexical/EditorLexical";
import Tag, { TagItem } from "@/common/tag/Tag";
// import useOutsideClick from "@/hooks/useOutsideClick";

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
	//새글 등록은 editData === undefined

	//태그 드롭다운 & 태그 담을 데이터
	const [isTagOpen, setIsTagOpen] = useState<boolean>(false);
	const [selectTag, setSelectTag] = useState<string[]>([]);
	console.log("상태에 담긴 배열 값 ");
	console.log(selectTag); //배열에 담김 -ok

	//react-hook-form
	const {
		register,
		handleSubmit,
		getValues,
		setValue,
		// watch,
		formState: { errors },
	} = useForm<Inputs>();

	// console.log("watch react-hook-fom===");
	// console.log(watch("tags"));

	//태그 온오프 함수
	const onOffTag = () => {
		setIsTagOpen(!isTagOpen);
	};

	// const ref = useOutsideClick({
	// 	onClickOutside: () => {
	// 		setIsTagOpen(!isTagOpen);
	// 	},
	// });

	console.log(getValues("tags"));
	// setValue("tags", ["테스트중"]);

	useEffect(() => {
		console.log(editData?.tags);
		if (editData) {
			setSelectTag(editData.tags);
			const updateTag = [...selectTag];
			setValue("tags", updateTag);
		}
	}, [editData, selectTag, setValue]);

	//태그 선택 함수
	// const handleSelectTag = (tag: string) => {
	// 	console.log("폼: ", tag); //--ok 입력 확인
	// 	const currentTags = getValues("tags");
	// 	if (currentTags.includes(tag)) {
	// 		const updatedTags = currentTags.filter((e) => e! == tag);
	// 		setValue("tags", updatedTags);
	// 	} else {
	// 		const updatedTags = [...currentTags, tag];
	// 		setValue("tags", updatedTags);
	// 	}
	// };

	//태그 제외 함수
	// const handleDeleteTag = (tagIdx: number) => {
	// 	console.log("폼: ", tagIdx); //--Ok 입력 확인
	// 	const currentTags = getValues("tags");
	// 	currentTags.splice(tagIdx, 1);
	// 	setValue("tags", currentTags);
	// };

	// const showDeleteTag = (tagIdx: number) => {
	// 	setSelectTag((prevTag) => {
	// 		const tagArr = [...prevTag];
	// 		tagArr.splice(tagIdx, 1);
	// 		return tagArr;
	// 	});
	// };

	//태그 유효성 검증
	const isDisableTag = selectTag.length <= 3;
	// console.log(isDisableTag);
	//게시글 본문 유효성 검증
	// const isDisableContent = getValues("content").length >= 20;

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
		console.log(data);
		console.log(`리액트 훅 로직 시작`);
		try {
			const newArticleId = await sendNewForumMutation.mutateAsync(data);
			console.log(`새 ${newArticleId} 게시글 등록!`);
			console.log("새 게시글 등록 성공");
			// //작성 된 게시글로 링크 이동 구현 필요 - ok
			// //응답으로 생성된 게시글 아이디 받아야 함. - ok
			// //굳이 iniital value 처리 할 필요 없다. - ok

			// //만들어진 페이지로 이동
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

	//Editor에서 본문 가져오기
	const handleEditorData = (data: string) => {
		setValue("content", data);
	};

	const titleStyle = "font-bold text-lg my-1";
	const inputStyle =
		"bg-BASIC_WHITE rounded-xl border px-3 py-1 font-semibold text-sm border-BASIC_BLACK h-9 w-full";

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
				<div className="mb-8 ">
					<div className={titleStyle}>
						태그
						{!isDisableTag && (
							<span className="ml-2 text-xs font-normal text-POINT_COLOR">
								! 태그는 최대 3개까지만 선택 가능합니다.
							</span>
						)}
					</div>
					<div className="flex flex-row w-full px-3 text-sm font-semibold border bg-BASIC_WHITE rounded-xl border-BASIC_BLACK h-9">
						{selectTag.map((el, idx) => (
							<TagItem
								key={idx}
								tagData={el}
								tagIdx={idx}
								// handleDeleteTag={() => handleDeleteTag(idx)}
								// showDeleteTag={() => showDeleteTag(idx)}
							/>
						))}
						<input
							type="text"
							placeholder={selectTag.length === 0 ? "태그를 선택해주세요" : ""}
							className="w-full outline-none "
							onClick={onOffTag}
							autoComplete="off"
							defaultValue={editData ? editData.tags : []}
							{...register("tags")}
						/>
					</div>
				</div>
				{isTagOpen && (
					<Tag
						setSelectTag={setSelectTag}
						// handleSelectTag={handleSelectTag}
					/>
				)}
				<div className="mb-8 ">
					<div id="editor" className={titleStyle}>
						본문
						{/* {!isDisableContent && (
							<span className="ml-2 text-xs font-normal text-POINT_COLOR">
								! 본문은 최소 20자 이상 작성해야 합니다.
							</span>
						)} */}
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
