import {fileURLToPath, URL} from "url"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url))},
      { find: '@views', replacement: fileURLToPath(new URL('./src/views', import.meta.url))},
      { find: '@hooks', replacement: fileURLToPath(new URL('./src/hooks', import.meta.url))},
      { find: '@components', replacement: fileURLToPath(new URL('./src/components', import.meta.url))},
      { find: '@ui', replacement: fileURLToPath(new URL('./src/components/ui', import.meta.url))},
      { find: '@contexts', replacement: fileURLToPath(new URL('./src/contexts', import.meta.url))},
      { find: '@services', replacement: fileURLToPath(new URL('./src/services', import.meta.url))},
      { find: '@utils', replacement: fileURLToPath(new URL('./src/utils', import.meta.url))},
      { find: '@actions', replacement: fileURLToPath(new URL('./src/actions', import.meta.url))},
    ]
  }
})
