import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import federation  from '@originjs/vite-plugin-federation'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    federation({
      name: 'host-app',
      remotes:{
        'remote_app': "http://localhost:5001/assets/remoteEntry.js", //svelte app
        // 'payment_app': "http://localhost:5002/assets/remoteEntry.js" //react app

      },
      shared: {
        svelte: {
          version: '^5.2.7', // Match the Svelte version in both apps
          requiredVersion: '^5.2.7',
        },
        // react: {
        //   version: '^18.3.1', // Match React version used in `payment` app
        // },
        // 'react-dom': {
        //   version: '^18.3.1', // Match React DOM version
        // },
      }
      // shared:['svelte']
    })
  ],
  build: {
    target: 'esnext', // Ensure compatibility with modern browsers
    minify: false,    // Disable minification for debugging (optional)
    cssCodeSplit: true, // Ensure CSS is split for optimization
  },
  server: {
    port: 5000
  }
})
