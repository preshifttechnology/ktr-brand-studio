import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  // Replace YOUR-REPO with your actual GitHub repo name, e.g. 'ktr-brand-studio'
  base: process.env.GITHUB_PAGES ? '/ktr-brand-studio/' : '/',
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
})
