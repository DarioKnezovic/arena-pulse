import './assets/style/main.scss';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

import { persistStatePlugin } from './plugins/persistState';

const app = createApp(App);

const vuetify = createVuetify({
  components,
  directives
});

const pinia = createPinia();
pinia.use(persistStatePlugin);

app.use(pinia);
app.use(router);

app.use(vuetify).mount('#app');
