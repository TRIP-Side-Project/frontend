import { SVG } from "@/types/svg";

const Sun = ({ fillColor, width, height }: SVG) => {
	//h,w 800px {fillColor}
	return (
		<svg
			width={width}
			height={height}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<circle cx="12" cy="12" r="5" stroke={fillColor} strokeWidth="1.5" />
			<path
				d="M12 2V4"
				stroke={fillColor}
				strokeWidth="1.5"
				strokeLinecap="round"
			/>
			<path
				d="M12 20V22"
				stroke={fillColor}
				strokeWidth="1.5"
				strokeLinecap="round"
			/>
			<path
				d="M4 12L2 12"
				stroke={fillColor}
				strokeWidth="1.5"
				strokeLinecap="round"
			/>
			<path
				d="M22 12L20 12"
				stroke={fillColor}
				strokeWidth="1.5"
				strokeLinecap="round"
			/>
			<path
				d="M19.7778 4.22266L17.5558 6.25424"
				stroke={fillColor}
				strokeWidth="1.5"
				strokeLinecap="round"
			/>
			<path
				d="M4.22217 4.22266L6.44418 6.25424"
				stroke={fillColor}
				strokeWidth="1.5"
				strokeLinecap="round"
			/>
			<path
				d="M6.44434 17.5557L4.22211 19.7779"
				stroke={fillColor}
				strokeWidth="1.5"
				strokeLinecap="round"
			/>
			<path
				d="M19.7778 19.7773L17.5558 17.5551"
				stroke={fillColor}
				strokeWidth="1.5"
				strokeLinecap="round"
			/>
		</svg>
	);
};

export default Sun;
