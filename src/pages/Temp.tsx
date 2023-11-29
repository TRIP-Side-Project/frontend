import { tempState } from "@/store/tempState";
import { useRecoilState, useResetRecoilState } from "recoil";

const Temp = () => {
	const [number, setNumber] = useRecoilState(tempState);
	const resetNumber = useResetRecoilState(tempState);

	const increase = () => {
		setNumber((prev) => ({
			...prev,
			count: prev.count + 1,
		}));
	};

	const decrease = () => {
		setNumber((prev) => ({
			...prev,
			count: prev.count - 1,
		}));
	};

	const reset = () => {
		resetNumber();
	};

	return (
		<div className="flex items-center justify-center m-auto">
			<div className="w-32 h-40 bg-yellow-300 p-auto">
				<p className="mb-20 text-2xl text-center">{number.count}</p>
				<button
					onClick={increase}
					className="w-10 h-10 bg-pink-300 border rounded-lg border-black-200"
				>
					{" "}
					+{" "}
				</button>
				<button
					onClick={decrease}
					className="w-10 h-10 bg-pink-300 border rounded-lg border-black-200"
				>
					{" "}
					-{" "}
				</button>
				<button
					onClick={reset}
					className="w-10 h-10 bg-pink-300 border rounded-lg border-black-200"
				>
					{" "}
					reset{" "}
				</button>
			</div>
		</div>
	);
};

export default Temp;
