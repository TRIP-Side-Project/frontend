// import Whale from "@/assets/img/Whale.png";
import err404 from "@/assets/img/error404.jpg";
interface errProps {
	err: string;
}

const ErrState = ({ err }: errProps) => {
	return (
		<div className="w-full h-screen pt-20 overflow-y-auto text-center dark:bg-BASIC_BLACK">
			<div className="flex flex-col justify-center">
				<img src={err404} className="scale-50" alt="데이터 불러오기 실패 " />
				<div className="font-mono text-lg font-semibold">
					아래와 같은 문제로 데이터를 불러오지 못했어요
				</div>
				<div className="font-mono font-semibold text-md">{err}</div>
			</div>
		</div>
	);
};

export default ErrState;
