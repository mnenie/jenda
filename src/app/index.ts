import { createApp } from 'vue';
import { router, pinia } from './providers';
import App from './App.vue';
import '@/app/styles/primary/index.scss';

const app = createApp(App);

app.use(pinia);
app.use(router);

app.mount('#app');
