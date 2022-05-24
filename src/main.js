import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';
Vue.use(ElementUI);

import '@/styles/index.scss' // 全局 css
import '@/icons' // icons
import './permission' // 权限控制

import '@/components/index.js' // 全局组件

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router,

}).$mount('#app')