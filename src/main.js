import Vue from 'vue'
import App from './App.vue'

import router from './router'

import x2js from 'x2js' // xml数据处理插件
Vue.prototype.$x2js = new x2js() // 创建x2js对象，挂到vue原型上

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
