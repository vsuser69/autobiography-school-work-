import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 10000,
    open: true,
    host: '0.0.0.0',
    allowedHosts: ['localhost', '127.0.0.1', '::1', '192.168.1.100', 'autobiography-school-work.onrender.com']
  }
})
