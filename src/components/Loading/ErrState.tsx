// import Whale from "@/assets/img/Whale.png";
import err404 from "@/assets/img/error404.png";
import { useNavigate } from "react-router-dom";
interface errProps {
	err: string;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
}

const ErrState = ({ err }: errProps) => {
	const isTokenProblem = String(err).includes("401");
	const errText = isTokenProblem
		? "로그인이 만료 되었어요 재로그인 해주세요."
		: err;
	const navigate = useNavigate();

	const linkLogin = (e: React.MouseEvent) => {
		e.preventDefault();
		navigate("/login");
	};

	return (
		<div className="flex flex-col my-10 text-center bg-BASIC_WHITE dark:bg-BASIC_BLACK">
			<div className="flex flex-col items-center text-BASIC_BLACK dark:text-BASIC_WHITE">
				<img src={err404} className="w-96" alt="데이터 불러오기 실패 " />
				<div className="font-mono font-semibold text-md">
					아래와 같은 문제로 데이터를 불러오지 못했어요 ..
				</div>
				<div className="font-mono text-sm font-semibold">{errText}</div>
				{isTokenProblem === true ? (
					<button className="blue_squareBtn" onClick={linkLogin}>
						로그인으로 이동
					</button>
				) : null}
			</div>
		</div>
	);
};

export default ErrState;
