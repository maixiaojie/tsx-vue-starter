import Vue from 'vue';
import VueCompositionApi from '@vue/composition-api';
import App from './App';
import router from './router/index'

Vue.config.productionTip = false;
Vue.use(VueCompositionApi);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
