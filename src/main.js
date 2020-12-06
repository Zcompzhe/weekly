// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './style/reset.css';
import Vue from 'vue';

import VueRouter from 'vue-router';
import App from './App';
import routes from './router';

// store为实例化生成的
import store from './store';

import Config from './config/index';

import Sto from 'store';

import axios from 'axios';

//import { Message, loading } from 'element-ui';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(VueRouter);
Vue.use(ElementUI);

Vue.prototype.$axios = axios;
Vue.prototype.$loading = ElementUI.loading;
Vue.prototype.$message = ElementUI.Message;
Vue.prototype.$sto = Sto;
Vue.prototype.$conf = Config;

Vue.config.productionTip = false

// 创建路由实例
const router = new VueRouter({
  routes: routes,
  mode: 'history',
  strict: process.env.NODE_ENV === 'development' // 生产环境使用严格模式
})

router.beforeEach((to, from, next) => {
  const token = sessionStorage.getItem("token");
  const exp = sessionStorage.getItem("token-expired");
  const now = new Date().getTime();
  if (to.path === "/login") {
    if (token && exp && now - exp < 30000) {
      next("/");
    } else {
      next();
    }
  } else {
    // token每过3小时需刷新一次
    if (token && exp && now - exp < 10800000) {
      next();
    } else {
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("token-expired");
      next("/login");
    }
  }
});

// router.afterEach((transition) => {
// })

window.$config = {};

//dev
window.$config.PIC = 'http://172.16.14.20:8080';
// window.$config.PIC = 'http://localhost:8080';
//dev
window.$config.HOST = 'http://116.228.229.189:18081'



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
