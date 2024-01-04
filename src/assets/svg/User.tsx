import { darkState } from "@/store/loginState";
import { useRecoilValue } from "recoil";
import { SVG } from "@/types/svg";

const User = ({ fillColor, width, height }: SVG) => {
	const darkMode = useRecoilValue(darkState);
	fillColor = darkMode.darkState === true ? "#ffffff" : "#000000";
	return (
		<svg fill={fillColor} width={width} height={height} viewBox="0 0 48 48">
			<title />
			<path d="M24,21A10,10,0,1,1,34,11,10,10,0,0,1,24,21ZM24,5a6,6,0,1,0,6,6A6,6,0,0,0,24,5Z" />
			<path d="M42,47H6a2,2,0,0,1-2-2V39A16,16,0,0,1,20,23h8A16,16,0,0,1,44,39v6A2,2,0,0,1,42,47ZM8,43H40V39A12,12,0,0,0,28,27H20A12,12,0,0,0,8,39Z" />
		</svg>
	);
};

export default User;
