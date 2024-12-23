import react from "@vitejs/plugin-react"
import path from "path"
import {defineConfig} from "vite"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
            "@api": path.resolve(__dirname, "./src/api/api"),
            "@assets": path.resolve(__dirname, "./src/assets"),
            "@store": path.resolve(__dirname, "./src/store"),
            "@pages": path.resolve(__dirname, "./src/pages"),
            "@components": path.resolve(__dirname, "./src/components")
        }
    }
})