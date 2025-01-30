import path from "path"
import { fileURLToPath } from "url";
import { defineConfig } from "vite"

import react from "@vitejs/plugin-react"

const __dirname = path.dirname(fileURLToPath(import.meta.url));
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
            "@api": path.resolve(__dirname, "./src/api/api"),
            "@assets": path.resolve(__dirname, "./src/assets"),
            "@store": path.resolve(__dirname, "./src/store"),
            "@pages": path.resolve(__dirname, "./src/pages"),
            "@components": path.resolve(__dirname, "./src/components"),
        }
    }
})