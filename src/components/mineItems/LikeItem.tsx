import Temp from "@/assets/img/jeju2.png";
import Close from "@/assets/svg/Close";
import { LikeMerchanProps } from "@/types/myProfile";

const Likeitem = ({ data }: LikeMerchanProps) => {
	console.log(data);
	return (
		<div className="flex flex-row w-full p-2 border rounded-lg whitespace-nowrap bg-BASIC_WHITE">
			<img src={Temp} className="rounded-lg w-[130px] h-[100px] mr-3" />
			<div className="flex flex-col flex-1 text-BASIC_BLACK">
				<div className="flex flex-row justify-between">
					<div className="text-lg font-semibold">
						제주로 떠나는 여행 우도 제주도 비행기 어쩌구 저저구 어쩌꾸
						저저ㅉ구적구
					</div>
					<button
						type="button"
						className="ms-auto -mx-1.5  -my-1.5 justify-center items-center flex-shrink-0 text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
						data-dismiss-target="#toast-notification"
						aria-label="Close"
					>
						<Close fillColor={"#111111"} width={"20px"} height={"20px"} />
					</button>
				</div>

				<div className="flex-1 text-sm text-LIGHT_GRAY_COLOR">
					네이버 상품띠
				</div>
				<div className="flex justify-end text-base">$ 1,000,000원</div>
			</div>
		</div>
	);
};

export default Likeitem;
