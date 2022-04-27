import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout'

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: () => import('@/pages/Home')
      },
      {
        path: '/about',
        component: () => import('@/pages/About')
      }
    ]
  },
]

const router = new Router({
  mode: 'hash', // 路由模式
  routes 
})


export default router;