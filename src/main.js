import Vue from 'vue';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import store from './store';
import './components/atoms'
const bus = new Vue();

Vue.prototype.$bus = bus;
Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount('#app');
