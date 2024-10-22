import { createApp } from 'vue';
import App from './App.vue';
import router from './router/routes.js';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './style.css';

createApp(App).use(router).mount('#app');
