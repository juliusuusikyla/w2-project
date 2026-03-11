import { defineConfig } from 'vite'
  import react from '@vitejs/plugin-react'

  export default defineConfig({
    base: '/w2-project/',
    plugins: [react()],
  })