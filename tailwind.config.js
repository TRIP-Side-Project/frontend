/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				MAIN_COLOR: "#5999D4",
				SPECIAL_COLOR: "#FFE03B",
				POINT_COLOR: "#FF5959",
				BASIC_BLACK: "#333333",
				BTN_COLOR: "#5999D4",
				BTN_HOVER_COLOR: "#2C6CA6",
				LIGHT_GRAY_COLOR: "#AAAAAA",
				DARK_GRAY_COLOR: `#666666`,
				BASIC_WHITE: "#FAFAFA",
				ITEM_BG_COLOR: "#F5F5F5",
				LINE_POINT_COLOR: "rgba(89, 153, 212, 0.25)",
				ETC_COLOR: "#464BD8",
			},
			dropShadow: {
				toggle: "3px 0px 4px 0px rgba(255, 255, 255, 0.25)",
			},
			fontSize: {
				exs: ["8px", "10px"],
				esm: ["12px", "14px"],
			},
		},
	},
	plugins: [],
	darkMode: "class",
};
