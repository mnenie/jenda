import { createApp } from 'vue';
import { router, pinia } from './providers';
import App from './App.vue';
import './styles/primary/index.scss';

import { autoAnimatePlugin } from '@formkit/auto-animate/vue';

const app = createApp(App);

app.use(pinia);
app.use(router);
app.use(autoAnimatePlugin);
app.mount('#app');
