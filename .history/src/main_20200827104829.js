import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios f

Vue.config.productionTip = false;
Vue.use(ElementUI);

new Vue({
  el: '#app',
  render: h => h(App)
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
