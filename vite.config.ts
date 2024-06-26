import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tsconfigPaths from 'vite-tsconfig-paths';
import svgLoader from 'vite-svg-loader'
import {fileURLToPath, URL} from 'url'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), tsconfigPaths(), svgLoader()],
  
  resolve: {
     alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  }
  
})
