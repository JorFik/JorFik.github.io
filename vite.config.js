import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true, // Silencia las advertencias de dependencias externas
      },
    },
  },
  server: {
	port: 3000,
	host: '0.0.0.0',
  },
});