import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		tsconfigPaths(),
		eslint({
			cache: false,
			include: ["./src/**/*.ts", "./src/**/*.tsx"],
		}),
	],
	server: {
		proxy: {
			"/proxy": {
				target: "https://apigw.tmoney.co.kr:5556/gateway/koIbtList/v1",
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/proxy/, ""),
			},
		},
	},
});
