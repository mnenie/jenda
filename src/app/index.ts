import { createApp } from 'vue';
import { router, pinia } from './providers';
import { createHead } from '@unhead/vue';
import App from './App.vue';
import i18n from '@/shared/lib/i18n';

import './styles/primary/index.scss';
import 'floating-vue/dist/style.css';

import { autoAnimatePlugin } from '@formkit/auto-animate/vue';
import { vTooltip } from 'floating-vue';

const app = createApp(App);
// head plugin
const head = createHead();

app.use(pinia);
app.use(router);
app.use(i18n);
app.use(head);
app.use(autoAnimatePlugin);
app.directive('tooltip', vTooltip);
app.mount('#app');
