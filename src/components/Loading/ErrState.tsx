import Whale from "@/assets/img/Whale.png";
interface errProps {
	err: string;
}

const ErrState = ({ err }: errProps) => {
	return (
		<div className="w-full h-screen pt-20 overflow-y-auto text-center dark:bg-BASIC_BLACK">
			<img src={Whale} className="scale-50" alt="데이터 불러오기 실패 " />
			<div className="font-mono text-lg font-semibold">
				현재 네트워크가 불안해욥! 데이터를 불러오지 못했어요
				<span>{err}</span>
			</div>
		</div>
	);
};

export default ErrState;
