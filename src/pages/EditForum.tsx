import { useForm, SubmitHandler } from "react-hook-form";
import Button, { btnAttributes } from "@/common/button/Button";
import TextEditor from "@/components/TextEditor";

type Inputs = {
	title: string;
	tag: string;
	content: string;
};

const EditForum = () => {
	const {
		register,
		handleSubmit,
		// watch,
		formState: { errors },
	} = useForm<Inputs>();
	const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
	// console.log(watch("title"));

	const titleStyle = "font-bold text-lg my-1";
	const inputStyle =
		"bg-BASIC_WHITE rounded-xl border px-3 py-1 font-semibold text-sm border-BASIC_BLACK h-9 w-full";
	const submitBtn: btnAttributes = {
		width: "123px",
		text: "등록",
		type: "square",
	};

	const cancelBtn: btnAttributes = {
		width: "123px",
		bgColor: "LINE_POINT_COLOR",
		// border: "MAIN_COLOR",
		text: "취소",
		textColor: "BAISC_BLACK",
		type: "square",
	};
	return (
		<div className="flex flex-col w-[1200px] text-BASIC_BLACK ">
			<div className="">
				<div className="my-5 text-3xl font-bold">여행 후기</div>
				<p className="my-3 text-sm font-base">
					여러분의 즐거웠던 여행 후기를 공유해주세요!
				</p>
			</div>
			<form className="my-3" onSubmit={handleSubmit(onSubmit)}>
				{/* <div className="mb-8">
					<div className={titleStyle}>카테고리</div>
					<select className={inputStyle}>
						<option value="review">여행 후기</option>
						<option value="editor">에디터 추천</option>
					</select>
				</div> */}
				<div className="mb-8 ">
					<div className={titleStyle}>제목</div>
					<input
						type="text"
						placeholder="제목을 입력해주세요."
						className={inputStyle}
						defaultValue=""
						{...register("title")}
					/>
				</div>
				<div className="mb-8">
					<div className={titleStyle}>태그</div>
					<input
						type="text"
						placeholder="태그를 입력해주세요"
						className={inputStyle}
						{...register("tag", { required: true })}
					/>
				</div>
				<div className="mb-8 bg-yellow-200">
					<div id="editor" className={titleStyle}>
						본문
					</div>
					<TextEditor />
				</div>

				{errors.title && <span>This failed is required </span>}
				<input
					type="submit"
					className="px-3 py-2 bg-pink-400 cursor-pointer hover:bg-pink-200 "
				/>
			</form>
			<div className="flex flex-row justify-end">
				<Button btnInfo={cancelBtn} />
				<Button btnInfo={submitBtn} />
			</div>
		</div>
	);
};

export default EditForum;
