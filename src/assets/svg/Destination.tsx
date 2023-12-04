import { SVG } from "@/types/svg";

const Destination = ({ fillColor, width, height }: SVG) => {
	return (
		<svg
			width={width}
			height={height}
			viewBox="0 0 24 24"
			fill="white"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fill-rule="evenodd"
				clip-rule="evenodd"
				d="M19.6574 6.08574C21.0314 2.47813 18.0185 -1.28935 15.1313 0.428154L1.93564 8.28284C-0.769368 9.89283 -0.601861 14.7751 2.20388 16.0894L5.30388 17.5424C5.45509 17.6133 5.59241 17.7238 5.70661 17.8666C5.82082 18.0093 5.90925 18.181 5.96599 18.37L7.12835 22.2464C8.18092 25.7522 12.0856 25.9616 13.3736 22.5803L19.6574 6.08574Z"
				stroke={fillColor}
			/>
		</svg>
	);
};

export default Destination;
