import {defineConfig} from 'vite'
import {svelte} from '@sveltejs/vite-plugin-svelte'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: "/fem-recipe-page/",
  plugins: [
    svelte(),
    tailwindcss()
  ],
  server: {
    hmr: {
      overlay: true
    },
    watch: {
      usePolling: false
    }
  }
})
