import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  outdir: "../src/main/resources/static",

  optimizeDeps: {
    esbuildOptions: {
      // define global to globalThis for browser compatibility
      define: {
        global: "globalThis",
      },
    },
  },
})
