// https://nuxt.com/docs/api/configuration/nuxt-config
import {} from '@pinia/nuxt';

export default defineNuxtConfig({
  ssr: false,
  app: {
    baseURL: '/seguro-de-vida',
  },
  //css: ['~/assets/scss/main.scss'],
  vite: {
    optimizeDeps: {
      exclude: ['@braze/web-sdk'],
    },
  },
  modules: ['@nuxt/image-edge', 'nuxt-svgo', '@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt'],
  piniaPersistedstate: {
    /*cookieOptions: {
      sameSite: 'strict',
    },*/
    storage: 'sessionStorage',
  },
  svgo: {
    global: false,
    componentPrefix: 'icon',
    defaultImport: 'component',
  },
  image: {
    domains: ['localhost'],
    quality: 80,
    format: ['webp'],
  },
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },
});
