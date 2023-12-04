import { useState } from "react";

export interface ModalAttributes {
	title?: string;
	content: string;
	isClick: () => void;
}

interface ModalTypes {
	modal: ModalAttributes;
}

const BasicModal = ({ modal }: ModalTypes) => {
	const [isSubmit] = useState(true);
	const { title, content, isClick } = modal;
	const btnStyle =
		"p-3  mx-2 w-20 border border-BASIC_BLACK bg-BASIC_WHITE rounded-lg font-semibold hover:bg-MAIN_COLOR hover:border-0";
	console.log(title);

	return (
		<div className="fixed inset-0 z-10 flex items-end justify-center w-screen min-h-full p-4 overflow-y-auto text-center transition-opacity bg-gray-500 bg-opacity-75 sm:items-center sm:p-0">
			<div className="relative px-10 pb-10 overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl w-fit">
				<div className="flex flex-col items-center">
					{/* <div className="my-3 font-semibold">{title}</div> */}
					<div className="my-10 text-xl font-semibold">{content}</div>
					{isSubmit && (
						<div className="flex flex-row">
							<button className={btnStyle} type="submit">
								예
							</button>
							<button className={btnStyle} type="submit" onClick={isClick}>
								아니오
							</button>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default BasicModal;
