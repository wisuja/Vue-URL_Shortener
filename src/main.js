import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const app = createApp(App);

app.config.globalProperties.server_url =
  'https://vue-url-shortener-api.herokuapp.com/api/';

app.use(router).mount('#app');
