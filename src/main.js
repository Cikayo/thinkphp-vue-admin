import Vue from 'vue'
import { createPinia, PiniaVuePlugin } from 'pinia'
import App from './App'
import router from './router'
import './router/permission'

import TTable from './components/TTable'

import 'normalize.css/normalize.css'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'

import './styles/index.scss'

const app = document.createElement('div')
app.setAttribute('id', 'app')
document.body.append(app)

Vue.use(PiniaVuePlugin)
Vue.use(ElementUI, { size: 'small' });

Vue.component('t-table', TTable)

const pinia = createPinia()

new Vue({
  router,
  pinia,
  render: h => h(App)
}).$mount('#app')