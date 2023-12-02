export interface btnAttributes {
	width: string;
	height: string;
	text: string;
	bgColor?: string;
	border?: string;
	type: "circle" | "square";
}

interface btnTypes {
	btnInfo: btnAttributes;
}

const Button = ({ btnInfo }: btnTypes) => {
	const { width, height, bgColor, border, text, type } = btnInfo;
	const basicStyle = type === "circle" ? "blue_circleBtn" : `blue_squareBtn`;
	const bg = bgColor ? `bg-${bgColor}` : "";
	const borderStyle = border ? `border border-${border}` : "";
	console.log(width, height, bg, borderStyle);
	const btnStyle = `${basicStyle} `;

	//circle | square

	return (
		<div>
			<button className={btnStyle}>{text}</button>
		</div>
	);
};

export default Button;
