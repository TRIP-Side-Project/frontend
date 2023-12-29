import { SVG } from "@/types/svg";

const BackToList = ({ fillColor, width, height }: SVG) => {
	const whiteColor = "#ffffff";

	return (
		<svg
			width={width}
			height={height}
			viewBox="0 0 25 25"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
        d="M22.0586 11.0294C22.0586 15.4897 18.4307 19.1176 13.9704 19.1176H9.68802L13.5792 23.0088L12.5395 24.0485L6.87332 18.3823L12.541 12.7147L13.5807 13.7544L9.68802 17.647H13.9704C17.6189 17.647 20.588 14.6779 20.588 11.0294C20.588 7.38087 17.6189 4.41175 13.9704 4.41175H3.5542V2.94116H13.9704C18.4307 2.94116 22.0586 6.5691 22.0586 11.0294Z"
        fill={localStorage.getItem("theme") === "dark" ? whiteColor : fillColor}
      />

		</svg>
	);
};

export default BackToList;
