import router from './index'

import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css'

import { getToken } from '@/utils/auth'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const whiteList = ['/login']

router.beforeEach(async(to, from, next) => {
  NProgress.start()
  let token = getToken()
  if(token) {
    if (to.path === '/login') {
      next({ path: '/' })
      NProgress.done()
    } else {
      next()
    }
  } else {
    if(whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }
})


router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})