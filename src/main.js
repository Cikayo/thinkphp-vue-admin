import Vue from 'vue'
import App from './App'
import router from './router'

import 'normalize.css/normalize.css'

import ElementUI from 'element-ui';
import './router/permission'
import 'element-ui/lib/theme-chalk/index.css'
import './styles/index.scss'

const app = document.createElement('div')
app.setAttribute('id', 'app')
document.body.append(app)

Vue.use(ElementUI);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')