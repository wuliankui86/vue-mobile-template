import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import '@/styles/index.scss'

// 全局插件
import './plugin'

// 兼容ie
import 'core-js/stable'
import 'regenerator-runtime/runtime'

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
