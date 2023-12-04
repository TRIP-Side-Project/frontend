import Close from "@/assets/svg/Close";
import { useState } from "react";

interface ModalAttributes {
	title: string;
	content: string;
	toggle: () => void;
}

interface ModalTypes {
	modal: ModalAttributes;
}

const BasicModal = ({ modal }: ModalTypes) => {
	const [isSubmit] = useState(true);
	const { title, content, toggle } = modal;
	console.log(title, content, toggle);

	return (
		<div className="fixed inset-0 z-10 flex items-end justify-center w-screen min-h-full p-4 overflow-y-auto text-center transition-opacity bg-gray-500 bg-opacity-75 sm:items-center sm:p-0">
			<div className="relative px-10 pb-10 overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl ">
				<button className="float-right px-3 py-2 bg-red-300" onClick={toggle}>
					<Close fillColor={"#333333"} width={"18px"} height={"18px"} />
				</button>
				<div>안돼용!</div>
				<div>내용을 작성 작성 작성 작성 슝슝슝</div>
				{isSubmit && (
					<>
						<button type="submit">예</button>
						<button type="submit">아니오</button>
					</>
				)}
			</div>
		</div>
	);
};

export default BasicModal;
