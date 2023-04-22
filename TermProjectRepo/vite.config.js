import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    server: {
        proxy: {
            "/process-word": {
                target: "http://localhost:5000",
                changeOrigin: true,
                secure: false,
            },
        },
    },
    plugins: [react()],
    root: "src",
});
