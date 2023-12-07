import { SVG } from "@/types/svg";

const ArrowLeft = ({ fillColor, width, height }: SVG) => {
	fillColor = "#000000";
	return (
		<svg
			width={width}
			height={height}
			viewBox="0 0 1024 1024"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fill={fillColor}
				d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"
			/>
		</svg>
	);
};

export default ArrowLeft;
