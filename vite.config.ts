import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  base: "/hvv-tender-frontend/",
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, "src") },
      { find: "@public", replacement: path.resolve(__dirname, "public") },
      { find: "@app", replacement: path.resolve(__dirname, "src/app") },
      { find: "@shared", replacement: path.resolve(__dirname, "src/shared") },
      { find: "@pages", replacement: path.resolve(__dirname, "src/pages") }
    ],
  },
  preview: {
    port: 3000,
    strictPort: true,
  },
  server: {
    port: 3000,
    host: true,
    watch: {
      usePolling: true,
    },
  },
});
