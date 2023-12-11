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
				target: "http://49.50.165.53",
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/proxy/, ""),
			},
		},
	},
});
