import { useState } from "react";
import Close from "@/assets/svg/Close";
import Alarm from "@/assets/svg/Alarm";

const RTnoti = () => {
	const [toggle] = useState(true);

	if (toggle === true) {
		return (
			<div
				id="Reac-Time-Notification"
				className="absolute right-0 z-50 w-full max-w-xs p-4 text-gray-900 bg-pink-200 rounded-lg shadow-xl top-7 dark:bg-gray-800 dark:text-gray-300"
				role="alert"
			>
				<div className="flex mb-3">
					<span className="text-sm font-semibold text-gray-900 dark:text-white">
						딩동!
					</span>
					<button
						type="button"
						className="ms-auto -mx-1.5  -my-1.5 justify-center items-center flex-shrink-0 text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
						data-dismiss-target="#toast-notification"
						aria-label="Close"
					>
						<Close fillColor={"#222222"} width={"15px"} height={"15px"} />
					</button>
				</div>
				<div className="flex items-center">
					<div className="relative">
						{/* relative inline-flex  */}
						<span className="flex items-center justify-center w-6 h-6 z-20 bg-blue-600 rounded-full">
							<Alarm fillColor={"#ffffff"} width={"15px"} height={"15px"} />
							<span className="sr-only">Message icon</span>
						</span>
					</div>
					<div className="flex-1 text-sm font-normal ms-3">
						<div className="text-sm font-semibold text-gray-900 dark:text-white">
							경주 관련 상품이 새롭게 등록 되었습니다.
						</div>
						<span className="text-xs font-medium text-blue-600 dark:text-blue-500">
							a few seconds ago
						</span>
					</div>
				</div>
			</div>
		);
	}

	return <></>;
};

export default RTnoti;
