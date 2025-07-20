import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react({ jsxRuntime: 'automatic' }),
    VitePWA({
      workbox: {
        // Stratégie de cache pour réduire le JavaScript non utilisé
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/kit\.fontawesome\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'fontawesome-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365 // 365 jours
              }
            }
          },
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'StaleWhileRevalidate',
            options: {
              cacheName: 'google-fonts-stylesheets',
            }
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-webfonts',
              expiration: {
                maxEntries: 30,
                maxAgeSeconds: 60 * 60 * 24 * 365 // 365 jours
              }
            }
          }
        ]
      },
      registerType: 'autoUpdate',
      devOptions: {
        enabled: false
      }
    })
  ],
  server: {
    open: true,
  },
  build: {
    // Optimisation pour réduire le JavaScript inutilisé
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Séparer les dépendances node_modules
          if (id.includes('node_modules')) {
            if (id.includes('react')) {
              return 'react-vendor';
            }
            if (id.includes('react-router')) {
              return 'router-vendor';
            }
          }
          // Séparer les fichiers JSON
          if (id.includes('.json')) {
            return 'data';
          }
          // Séparer les pages
          if (id.includes('/pages/')) {
            const fileName = id.split('/').pop()?.replace('.jsx', '');
            return `page-${fileName}`;
          }
        }
      }
    },
    // Minification avancée
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Supprimer les console.log en production
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug'],
        // Supprimer le code mort
        dead_code: true,
        // Optimisations supplémentaires
        passes: 2,
        unsafe: true,
        unsafe_arrows: true,
        unsafe_comps: true,
        unsafe_math: true,
        unsafe_methods: true,
      },
      mangle: {
        safari10: true,
      },
    },
    // Code splitting plus agressif
    chunkSizeWarningLimit: 500,
    // Optimisation du tree-shaking
    target: 'esnext',
    // Éviter de dupliquer le code
    commonjsOptions: {
      include: [/node_modules/],
      transformMixedEsModules: true,
    },
  },
  esbuild: {
    // Optimisations ESBuild
    target: 'esnext',
    minifyIdentifiers: true,
    minifySyntax: true,
    minifyWhitespace: true,
    treeShaking: true,
  },
});
