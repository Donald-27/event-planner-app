import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'classic', // Better compatibility
      babel: {
        plugins: [
          ['@babel/plugin-transform-react-jsx', { runtime: 'automatic' }]
        ]
      }
    })
  ],
  server: {
    port: 3000,
    open: true,
    strictPort: true, // Prevent automatic port switching
  },
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'react-calendar'
    ]
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true // Fixes commonjs/ES module conflicts
    }
  }
});