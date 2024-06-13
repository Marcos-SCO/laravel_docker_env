import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue';

// Read the PORT environment variable or default to 5002
const port = parseInt(process.env.PORT, 10) || 5002;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    port: port, // Set to the desired port
    host: true, // This allows external connections
    strictPort: true, // Ensure Vite fails if port is already in use
    watch: {
      usePolling: true, // Needed for some Docker setups
    }
  }
})
