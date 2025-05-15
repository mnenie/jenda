export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/icon',
    '@nuxt/fonts',
    '@una-ui/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/i18n',
    'motion-v/nuxt',
  ],
  future: {
    compatibilityVersion: 4,
  },
  i18n: {
    lazy: true,
    strategy: 'prefix',
    defaultLocale: 'en',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n',
      redirectOn: 'root',
    },
    experimental: {
      autoImportTranslationFunctions: true,
    },
  },
  devtools: {
    enabled: true,
  },
  colorMode: {
    preference: 'light',
  },
  una: {
    prefix: 'Una',
    global: true,
    themeable: true,
  },
  fonts: {
    families: [
      { name: 'Geist', src: '/geist.woff2' },
    ],
    processCSSVariables: true,
  },
  css: ['~/assets/styles/index.css'],
})
