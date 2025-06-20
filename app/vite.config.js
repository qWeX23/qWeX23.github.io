import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/', // Set to '/' if using a custom domain (CNAME present), otherwise '/qWeX23.github.io/'
  plugins: [react()],
})
