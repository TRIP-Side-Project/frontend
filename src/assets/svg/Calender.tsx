import { SVG } from "@/types/svg";

const Calender = ({ fillColor, width, height }: SVG) => {
	fillColor = fillColor ? `${fillColor}` : "#000000";

	return (
		<svg
			width={width}
			height={height}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M4.875 10V16C4.875 18.2091 6.62109 20 8.775 20H14.625C16.7789 20 18.525 18.2091 18.525 16V10C18.525 7.79086 16.7789 6 14.625 6H8.775C6.62109 6 4.875 7.79086 4.875 10Z"
				stroke={fillColor}
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M13.875 7C13.875 7.41421 14.2108 7.75 14.625 7.75C15.0392 7.75 15.375 7.41421 15.375 7H13.875ZM15.375 4C15.375 3.58579 15.0392 3.25 14.625 3.25C14.2108 3.25 13.875 3.58579 13.875 4H15.375ZM8.02502 7C8.02502 7.41421 8.36081 7.75 8.77502 7.75C9.18924 7.75 9.52502 7.41421 9.52502 7H8.02502ZM9.52502 4C9.52502 3.58579 9.18924 3.25 8.77502 3.25C8.36081 3.25 8.02502 3.58579 8.02502 4H9.52502ZM8.02502 11.286C8.02502 11.7002 8.36081 12.036 8.77502 12.036C9.18924 12.036 9.52502 11.7002 9.52502 11.286H8.02502ZM11.7 11.286L12.4488 11.3295C12.4496 11.315 12.45 11.3005 12.45 11.286H11.7ZM11.0797 12.5674L11.5748 13.1307L11.5748 13.1307L11.0797 12.5674ZM9.75002 13L9.67768 12.2535C9.29329 12.2907 9.00002 12.6138 9.00002 13C9.00002 13.3862 9.29329 13.7093 9.67768 13.7465L9.75002 13ZM11.0797 13.4326L11.5748 12.8693L11.5748 12.8693L11.0797 13.4326ZM11.7 14.714H12.45C12.45 14.6995 12.4496 14.685 12.4488 14.6705L11.7 14.714ZM9.52502 14.714C9.52502 14.2998 9.18924 13.964 8.77502 13.964C8.36081 13.964 8.02502 14.2998 8.02502 14.714H9.52502ZM13.1549 10.2937C12.8438 10.5671 12.8132 11.041 13.0867 11.3521C13.3602 11.6633 13.8341 11.6938 14.1452 11.4203L13.1549 10.2937ZM14.625 10H15.375C15.375 9.70541 15.2026 9.4381 14.9342 9.31668C14.6658 9.19525 14.3511 9.24219 14.1299 9.43668L14.625 10ZM13.875 16C13.875 16.4142 14.2108 16.75 14.625 16.75C15.0392 16.75 15.375 16.4142 15.375 16H13.875ZM15.375 7V4H13.875V7H15.375ZM9.52502 7V4H8.02502V7H9.52502ZM9.52502 11.286C9.52502 11.0973 9.59439 10.9906 9.69381 10.9129C9.81323 10.8196 10.0076 10.7505 10.2375 10.7505C10.4674 10.7505 10.6618 10.8196 10.7812 10.9129C10.8807 10.9906 10.95 11.0973 10.95 11.286H12.45C12.45 10.6177 12.1538 10.0817 11.7047 9.73087C11.2757 9.39568 10.7389 9.2505 10.2375 9.2505C9.73618 9.2505 9.19932 9.39568 8.7703 9.73087C8.32128 10.0817 8.02502 10.6177 8.02502 11.286H9.52502ZM10.9513 11.2425C10.9339 11.5413 10.7991 11.8155 10.5845 12.0041L11.5748 13.1307C12.0955 12.673 12.4085 12.0222 12.4488 11.3295L10.9513 11.2425ZM10.5845 12.0041C10.3707 12.1921 10.0956 12.28 9.82237 12.2535L9.67768 13.7465C10.3686 13.8135 11.0533 13.5891 11.5748 13.1307L10.5845 12.0041ZM9.82237 13.7465C10.0956 13.72 10.3707 13.8079 10.5845 13.9959L11.5748 12.8693C11.0533 12.4109 10.3686 12.1865 9.67768 12.2535L9.82237 13.7465ZM10.5845 13.9959C10.7991 14.1845 10.9339 14.4587 10.9513 14.7575L12.4488 14.6705C12.4085 13.9778 12.0955 13.327 11.5748 12.8693L10.5845 13.9959ZM10.95 14.714C10.95 14.9027 10.8807 15.0094 10.7812 15.0871C10.6618 15.1804 10.4674 15.2495 10.2375 15.2495C10.0076 15.2495 9.81323 15.1804 9.69381 15.0871C9.59439 15.0094 9.52502 14.9027 9.52502 14.714H8.02502C8.02502 15.3823 8.32128 15.9183 8.7703 16.2691C9.19932 16.6043 9.73618 16.7495 10.2375 16.7495C10.7389 16.7495 11.2757 16.6043 11.7047 16.2691C12.1538 15.9183 12.45 15.3823 12.45 14.714H10.95ZM14.1452 11.4203L15.1202 10.5633L14.1299 9.43668L13.1549 10.2937L14.1452 11.4203ZM13.875 10V16H15.375V10H13.875Z"
				fill={fillColor}
			/>
		</svg>
	);
};

export default Calender;