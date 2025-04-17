import { createApp } from 'vue'
import { createHead } from '@unhead/vue'
import { vTooltip } from 'floating-vue'
import Vue3Marquee from 'vue3-marquee'
// @ts-expect-error: unresolved type definitions for vue-writer
import VueWriter from 'vue-writer'
import { DataLoaderPlugin } from 'unplugin-vue-router/data-loaders'
import { PiniaColada, type PiniaColadaOptions } from '@pinia/colada'
import { PiniaColadaRetry } from '@pinia/colada-plugin-retry'
import App from './App.vue'
import i18nPlugin from './plugins/i18n'
import autoAnimatePlugin from './plugins/formkit'
import dayjsPlugin from './plugins/dayjs'

import { pinia } from './store'
import { router } from './router'

import './styles/index.css'
import '@unocss/reset/tailwind-compat.css'
import 'virtual:uno.css'
import 'floating-vue/dist/style.css'

const app = createApp(App)
// head plugin
const head = createHead()

app.use(pinia)
app.use(router)
app.use(PiniaColada, {
  plugins: [
    PiniaColadaRetry(),
  ],
} satisfies PiniaColadaOptions)
app.use(DataLoaderPlugin, {
  router,
})
app.use(i18nPlugin)
app.use(head)
app.use(autoAnimatePlugin)
app.use(dayjsPlugin)
app.use(Vue3Marquee)
app.use(VueWriter)
app.directive('tooltip', vTooltip)
app.mount('#app')
