export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/icon',
    '@nuxt/fonts',
    '@una-ui/nuxt',
  ],
  future: {
    compatibilityVersion: 4,
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
})
