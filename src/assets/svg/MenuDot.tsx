import { MenuSVGTypes } from "@/types/svg";

const MenuDot = ({ fillColor, width, height, onClick }: MenuSVGTypes) => {
	fillColor = fillColor ? fillColor : "#222222";

	return (
		<div onClick={onClick} className="px-2 w-fit">
			<svg
				fill={fillColor}
				width={width}
				height={height}
				viewBox="0 0 32 32"
				enableBackground="new 0 0 32 32"
				id="Glyph"
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M16,13c-1.654,0-3,1.346-3,3s1.346,3,3,3s3-1.346,3-3S17.654,13,16,13z"
					id="XMLID_287_"
				/>
				<path
					d="M6,13c-1.654,0-3,1.346-3,3s1.346,3,3,3s3-1.346,3-3S7.654,13,6,13z"
					id="XMLID_289_"
				/>
				<path
					d="M26,13c-1.654,0-3,1.346-3,3s1.346,3,3,3s3-1.346,3-3S27.654,13,26,13z"
					id="XMLID_291_"
				/>
			</svg>
		</div>
	);
};

export default MenuDot;
