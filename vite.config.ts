import { resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const rootDir = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  base: "./",
  build: {
    outDir: "dist/client",
    rollupOptions: {
      input: {
        landing: resolve(rootDir, "index.html"),
        english: resolve(rootDir, "en/index.html"),
        spanish: resolve(rootDir, "es/index.html")
      }
    }
  },
  optimizeDeps: {
    include: ["react", "react-dom/client"]
  },
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    warmup: {
      clientFiles: ["./src/main.tsx"]
    }
  }
});
