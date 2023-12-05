import { SVG } from "@/types/svg";

const ArrowComment = ({ fillColor, width, height }: SVG) => {
	fillColor = fillColor ? `${fillColor}` : "#000000";
	return (
		<svg
			width={width}
			height={height}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g id="Arrow / Arrow_Sub_Down_Right">
				<path
					id="Vector"
					d="M13 11L18 16M18 16L13 21M18 16H10.1969C9.07899 16 8.5192 16 8.0918 15.7822C7.71547 15.5905 7.40973 15.2839 7.21799 14.9076C7 14.4798 7 13.9201 7 12.8V3"
					stroke={fillColor}
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</g>
		</svg>
	);
};

export default ArrowComment;
