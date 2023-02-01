import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        destination: resolve(__dirname, './pages/destination/index.html'),
        crew: resolve(__dirname, './pages/crew/index.html'),
        technology: resolve(__dirname, './pages/technology/index.html')
      },
    },
  },
})