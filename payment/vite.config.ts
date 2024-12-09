import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import federation from '@originjs/vite-plugin-federation'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'payment_app',
      exposes:{
        './Payment': "./src/components/Payment.tsx"
      },
      shared: ['react', 'react-dom']
    }),
    
  ],
  build: {
    target: 'esnext', // Ensure compatibility with modern browsers
    minify: false,    // Disable minification for debugging (optional)
    cssCodeSplit: true, // Ensure CSS is split for optimization
  },
  server: {
    port: 5002
  }
})
