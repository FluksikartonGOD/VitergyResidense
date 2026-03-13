import { config } from './config.js'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2026-03-03',
  devtools: { enabled: true },
  modules: ['@nuxt/icon', '@nuxtjs/tailwindcss', '@vueuse/nuxt', '@nuxt/fonts'],
  css: ['~/assets/css/main.css'],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: './tailwind.config.js',
  },
  fonts: {
    defaults: {
      weights: [300, 400, 600, 700, 900],
      styles: ['normal'],
      subsets: ['cyrillic-ext', 'cyrillic'],
    },
  },
  app: {
    // trailingSlash: 'append', // or 'remove',
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
  },
  runtimeConfig: {
    mongodbUri: config.mongodbUri,
  },
})
