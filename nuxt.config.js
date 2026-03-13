import { config } from './config.js'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2026-03-03',
  devtools: { enabled: true },
  vite: {
    optimizeDeps: {
      include: [
        '@vue/devtools-core',
        '@vue/devtools-kit',
      ]
    }
  },
  modules: ['@nuxt/icon', '@nuxtjs/tailwindcss', '@vueuse/nuxt', '@nuxt/fonts', '@nuxtjs/i18n', '@pinia/nuxt'],
  i18n: {
    locales: [
      { code: 'bg', iso: 'bg-BG', file: 'bg.js' },
      { code: 'en', iso: 'en-US', file: 'en.js' },
    ],
    lazy: true,
    langDir: 'locales',
    defaultLocale: 'bg',
    strategy: 'prefix_except_default',
  },
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
