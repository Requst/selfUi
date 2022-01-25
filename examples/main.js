import Vue from 'vue'
import App from './App.vue'


Vue.config.productionTip = false
// // 全部引入
// import '../components/css/index.scss'
// import MUI from '../components/lib/index'
// Vue.use(MUI)

// 全部引入-2
import 'self-ui4/dist/css/index.css'
import MUI from 'self-ui4'
Vue.use(MUI)

new Vue({
  render: h => h(App)
}).$mount('#app')
