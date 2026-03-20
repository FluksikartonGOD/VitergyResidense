import { config } from './config.js'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2026-03-03',
  devtools: { enabled: true },
  vite: {
    optimizeDeps: {
      include: ['@vue/devtools-core', '@vue/devtools-kit'],
    },
  },
  modules: [
    '@nuxt/icon',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@nuxt/fonts',
    '@nuxtjs/i18n',
    '@pinia/nuxt',
  ],
  icon: {
    mode: 'svg',
    provider: 'none', // don't call /api/_nuxt_icon
    clientBundle: {
      scan: true, // scans <Icon name="..."> in your components
      includeCustomCollections: true, // include @iconify-json/* you installed
      // optional: list icons if you build names dynamically:
      icons: [
        'mdi:close',
        'mdi:keyboard-arrow-down',
        'circle-flags:en',
        'circle-flags:bg',
        'material-symbols:menu-rounded',
      ],
    },
  },
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
    pageTransition: { name: 'cube', mode: '' },
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
