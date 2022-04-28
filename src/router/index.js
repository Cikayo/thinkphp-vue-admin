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
        component: () => import('@/pages/about')
      }
    ]
  },
  {
    path: '/system',
    component: Layout,
    redirect: '/system/user/list',
    children: [
      {
        path: 'role/list',
        component: () => import('@/pages/system/role/list')
      },
      {
        path: 'user/list',
        component: () => import('@/pages/system/user/list')
      },
      {
        path: 'menu/list',
        component: () => import('@/pages/system/menu/list')
      }
    ]
  }
]

const router = new Router({
  mode: 'hash', // 路由模式
  routes 
})


export default router;