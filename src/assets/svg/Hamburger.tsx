import { darkState } from "@/store/loginState";
import { SVG } from "@/types/svg";
import { useRecoilValue } from "recoil";

const Hamburger = ({ fillColor, width, height }: SVG) => {
	const darkMode = useRecoilValue(darkState);
	fillColor = darkMode.darkState === true ? "#ffffff" : "#222222";

	return (
		<svg
			width={width}
			height={height}
			viewBox="-0.5 0 25 25"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M2 12.32H22"
				stroke={fillColor}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M2 18.32H22"
				stroke={fillColor}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M2 6.32001H22"
				stroke={fillColor}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export default Hamburger;
