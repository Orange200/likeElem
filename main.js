// #ifndef VUE3
import Vue from 'vue'
import App from './App'
// import ElementUI from 'node_modules/element-ui'
// import 'node_modules/element-ui/lib/theme-chalk/index.css';
// main.js，注意要在use方法之后执行
import uView from "uview-ui";
Vue.use(uView);
// 如此配置即可
uni.$u.config.unit = 'rpx'

Vue.config.productionTip = false

// Vue.use(ElementUI);

App.mpType = 'app'
// Vue.use(ElementUI)
const app = new Vue({
  ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
  createSSRApp
} from 'vue'
import App from './App.vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif