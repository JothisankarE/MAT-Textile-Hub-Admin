import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production';
  const isVercel = process.env.VERCEL === '1' || process.env.VITE_ADMIN_SUBPATH === 'true';

  return {
    plugins: [react()],
    base: (isProduction || isVercel) ? '/admin/' : '/',
    build: {
      outDir: 'dist',
      emptyOutDir: true,
    }
  }
})

