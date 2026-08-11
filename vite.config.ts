import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // 相对路径：同时兼容自定义域（根路径）与 GitHub Pages 默认域（/prime-agent-cn/ 子路径）
  base: './',
  server: {
    port: 5173,
    host: true,
  },
})
