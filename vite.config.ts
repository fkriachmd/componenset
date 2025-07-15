import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/componenset/',
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks
          'react-vendor': ['react', 'react-dom'],
          'router-vendor': ['react-router-dom'],
          'lucide-vendor': ['lucide-react'],
          'react-live-vendor': ['react-live'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
})
