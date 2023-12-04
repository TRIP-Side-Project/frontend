import { SVG } from "@/types/svg";

const NextOutline = ({ fillColor, width, height }: SVG) => {
	return (
		<svg
			width={width}
			height={height}
			viewBox="0 0 50 50"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
      <path
        d="M25 12.5L22.7656 14.6766L31.4844 23.4375H12.5V26.5625H31.4844L22.7656 35.2703L25 37.5L37.5 25L25 12.5Z"
        fill={fillColor}
      />
      <path
        d="M25 46.875C20.6735 46.875 16.4442 45.5921 12.8469 43.1884C9.24959 40.7848 6.44581 37.3683 4.79014 33.3712C3.13448 29.3741 2.70128 24.9757 3.54533 20.7324C4.38938 16.4891 6.47277 12.5913 9.53205 9.53205C12.5913 6.47277 16.4891 4.38938 20.7324 3.54533C24.9757 2.70128 29.3741 3.13448 33.3712 4.79014C37.3683 6.44581 40.7848 9.24959 43.1884 12.8469C45.5921 16.4442 46.875 20.6735 46.875 25C46.8684 30.7996 44.5616 36.3597 40.4607 40.4607C36.3597 44.5616 30.7996 46.8684 25 46.875ZM25 6.25001C21.2916 6.25001 17.6665 7.34968 14.5831 9.40995C11.4996 11.4702 9.09641 14.3986 7.67727 17.8247C6.25813 21.2508 5.88681 25.0208 6.61029 28.658C7.33376 32.2951 9.11952 35.636 11.7418 38.2583C14.364 40.8805 17.7049 42.6663 21.3421 43.3897C24.9792 44.1132 28.7492 43.7419 32.1753 42.3227C35.6014 40.9036 38.5298 38.5004 40.5901 35.417C42.6503 32.3335 43.75 28.7084 43.75 25C43.7442 20.029 41.7669 15.2632 38.2519 11.7482C34.7368 8.2331 29.971 6.2558 25 6.25001Z"
        fill={fillColor}
      />
		</svg>
	);
};

export default NextOutline;
