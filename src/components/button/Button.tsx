export interface btnAttributes {
	width: string;
	// height: string;
	text: string;
	bgColor?: string;
	border?: string;
	position?: string;
	type: "circle" | "square";
}

interface btnTypes {
	btnInfo: btnAttributes;
}

const Button = ({ btnInfo }: btnTypes) => {
	const { width, bgColor, border, position, text, type } = btnInfo;
	const basicStyle = type === "circle" ? "blue_circleBtn" : `blue_squareBtn`;
	const bg = bgColor ? `bg-${bgColor}` : "";
	const borderStyle = border ? `border border-${border}` : "";
	const float = position ? `float-${position}` : "";
	const btnStyle = `${basicStyle} w-[${width}] ${float} ${bg} ${borderStyle} `;
	console.log(btnStyle);
	//circle | square

	return (
		<div>
			<button className={btnStyle}>{text}</button>
		</div>
	);
};

export default Button;
