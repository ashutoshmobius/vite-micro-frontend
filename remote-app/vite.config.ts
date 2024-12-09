import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import federation from '@originjs/vite-plugin-federation'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    federation({
      name: 'remote_app',
      exposes:{
        './Login': "./src/lib/components/Login/index.ts"
      },
      shared: {
        svelte: {
          version: '^5.2.7', // Match the Svelte version in both apps
          requiredVersion: '^5.2.7',
        },
      }
    }),
    
  ],
  build: {
    target: 'esnext', // Ensure compatibility with modern browsers
    minify: false,    // Disable minification for debugging (optional)
    cssCodeSplit: true, // Ensure CSS is split for optimization
  },
  server: {
    port: 5001
  }
})
