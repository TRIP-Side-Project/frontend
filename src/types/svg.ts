export type SVG = {
	fillColor?: string;
	innerColor?: string;
	width: string;
	height: string;
	onClick?: () => void;
};

export interface MenuSVGTypes extends SVG {
	onClick?: () => void;
}
