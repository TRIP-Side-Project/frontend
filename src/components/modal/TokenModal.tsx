import { useNavigate } from "react-router-dom";

interface TokenModalTypes {
	noClick: () => void;
}

const TokenModal = ({ noClick }: TokenModalTypes) => {
	const navigation = useNavigate();
	const linkLogin = () => {
		window.localStorage.clear();
		navigation("/login");
	};

	const btnStyle =
		"p-3  mx-2 w-20 border border-BASIC_BLACK bg-BASIC_WHITE rounded-lg font-semibold hover:bg-MAIN_COLOR hover:border-0";

	return (
		<div className="fixed inset-0 z-50 flex items-end justify-center w-screen min-h-full p-4 overflow-y-auto text-center transition-opacity bg-gray-500 bg-opacity-75 sm:items-center sm:p-0">
			<div className="relative px-10 pb-10 overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl w-fit">
				<div className="flex flex-col items-center">
					<div className="my-10 text-xl font-semibold">
						로그인 만료 되었습니다. 다시 로그인 해주세요!
					</div>

					<div className="flex flex-row">
						<button className={btnStyle} type="submit" onClick={linkLogin}>
							예
						</button>
						<button className={btnStyle} type="submit" onClick={noClick}>
							아니오
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TokenModal;
