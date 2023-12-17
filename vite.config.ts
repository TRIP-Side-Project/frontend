import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";
import eslint from "vite-plugin-eslint";
import ckeditor5 from "@ckeditor/vite-plugin-ckeditor5";
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		tsconfigPaths(),
		eslint({
			cache: false,
			include: ["./src/**/*.ts", "./src/**/*.tsx"],
		}),
		ckeditor5({ theme: require.resolve("@ckeditor/ckeditor5-theme-lark") }),
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
