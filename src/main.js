// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/en';
import VueLazyload from 'vue-lazyload';

Vue.use(ElementUI, { locale });
Vue.use(ElementUI);
Vue.config.productionTip = false;
Vue.use(VueLazyload, {
  error: 'static/images/loading.gif', // 这个是请求失败后显示的图片
  loading: 'static/images/loading.gif', // 这个是加载的loading过渡效果
  try: 2 // 这个是加载图片数量
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
