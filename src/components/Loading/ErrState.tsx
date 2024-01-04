// import Whale from "@/assets/img/Whale.png";
import err404 from "@/assets/img/error404.png";
interface errProps {
	err: string;
}

const ErrState = ({ err }: errProps) => {
	return (
		<div className="flex flex-col my-10 text-center bg-BASIC_WHITE dark:bg-BASIC_BLACK">
			<div className="flex flex-col items-center text-BASIC_BLACK dark:text-BASIC_WHITE">
				<img src={err404} className="w-96" alt="데이터 불러오기 실패 " />
				<div className="font-mono font-semibold text-md">
					아래와 같은 문제로 데이터를 불러오지 못했어요 ..
				</div>
				<div className="font-mono text-sm font-semibold">{err}</div>
			</div>
		</div>
	);
};

export default ErrState;
