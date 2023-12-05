import { SVG } from "@/types/svg";

const ArrowUp = ({ width, height }: SVG) => {
	return (
		<svg
			width={width}
			height={height}
			viewBox="0 0 48 48"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M0 0h48v48H0z" fill="none" />
			<g id="Shopicon">
				<polygon points="6.586,30.586 9.414,33.414 24,18.828 38.586,33.414 41.414,30.586 24,13.172 	" />
			</g>
		</svg>
	);
};

export default ArrowUp;
