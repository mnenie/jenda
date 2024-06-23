import { createApp } from 'vue';
import { router, pinia } from './providers';
import { createHead } from '@unhead/vue';
import App from './App.vue';
import './styles/primary/index.scss';

import { autoAnimatePlugin } from '@formkit/auto-animate/vue';

const app = createApp(App);
// head plugin
const head = createHead();

app.use(pinia);
app.use(router);
app.use(head);
app.use(autoAnimatePlugin);
app.mount('#app');
