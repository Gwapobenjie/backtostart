import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/backtostart/",  // Ensure this is the correct base URL for your GitHub Pages
  build: {
    outDir: 'dist',  // Make sure the output is directed to 'dist' folder
  },
  server: {
    proxy: {
      "/api": {
        target: "http://127.0.0.1:9000",  // Your backend server URL
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
