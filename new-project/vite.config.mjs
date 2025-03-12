import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'path';


export default defineConfig({
  plugins: [
    tailwindcss(),
  ],  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/styles.scss";`
      }
    }
    },
  
    assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.svg', '**/*.gif'], // Ensure Vite handles these image types
    optimizeDeps: {
        include: ['@tailwindcss/vite'],
    },
    build: {
        outDir: 'dist', // Output directory
        sourcemap: false, // Disable source maps for security
        minify: 'terser', // Minify using Terser
        assetsDir: 'public/assets',
        rollupOptions: {
          output: {
            manualChunks: (id) => {
              if (id.includes('node_modules')) {
                return 'vendor'; // Separate vendor dependencies
              }
            },
            assetFileNames: 'assets/[name].[hash][extname]' // Customize the output directory for assets
          },
        },
      },
      resolve: {
        alias: {
          '@': '/src'
        }
      }
    
})