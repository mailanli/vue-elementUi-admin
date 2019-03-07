import Vue from 'vue'
import 'normalize.css/normalize.css'// CSS重置的现代替代方案
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'babel-polyfill'
import '@/assets/styles/index.scss' // 全局样式
import App from './App'
import router from './router'
import store from './store'
import i18n from './lang' // 国际化
import './icons' // icon
import './errorLog'// 错误日志
import './permission' // 权限控制
import './mock' // 仿真数据
import './assets/ionicon/css/ionicons.css' // 图标
import * as filters from './filters' // 全局滤波器
Vue.use(Element, {
  size: 'medium', // 设置元素默认大小
  i18n: (key, value) => i18n.t(key, value)
})

// 注册全局实用过滤器。
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App)
})
