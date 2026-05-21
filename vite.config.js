import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  server: {
    allowedHosts: true,
  },
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
      manifest: {
        name: 'AmuChat - AI Character Chat',
        short_name: 'AmuChat',
        description: '自分好みのAIキャラクターとチャットできるアプリ',
        theme_color: '#0e0e11',
        background_color: '#0e0e11',
        display: 'standalone',
        icons: [
          {
            src: 'https://placehold.co/192x192/111111/ffffff?text=AC',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'https://placehold.co/512x512/111111/ffffff?text=AC',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
})
