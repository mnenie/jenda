import { createApp } from 'vue'
import { createHead } from '@unhead/vue'
import { vTooltip } from 'floating-vue'
import Vue3Marquee from 'vue3-marquee'

// @ts-expect-error: unresolved type definitions for vue-writer
import VueWriter from 'vue-writer'
import App from './App.vue'
import autoAnimatePlugin from './plugins/formkit'

import { pinia } from './store'
import { router } from './router'
import i18n from '@/shared/libs/i18n'

import './styles/index.css'
import '@unocss/reset/tailwind-compat.css'
import 'virtual:uno.css'
import 'floating-vue/dist/style.css'

const app = createApp(App)
// head plugin
const head = createHead()

app.use(pinia)
app.use(router)
app.use(i18n)
app.use(head)
app.use(autoAnimatePlugin)
app.use(Vue3Marquee)
app.use(VueWriter)
app.directive('tooltip', vTooltip)
app.mount('#app')
