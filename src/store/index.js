import { defineStore } from 'pinia'
import { post } from '@/utils/request'
import { userLoginUrl, userLogoutUrl } from '@/api'
import { getToken, setToken, removeToken, getStorage, setStorage } from '@/utils/auth'

const useUser = defineStore('store', {
  state: () => {
    return {
      token: getToken(),
      username: getStorage(),
    }
  },
  actions: {
    // 用户登录
    login(data) {
      return new Promise((resolve, reject) => {
        post(userLoginUrl, data).then(res => {
          this.token = res.token
          this.username = data.username
          setToken(res.token)
          setStorage(data.username)
          resolve(res)
        }).catch(err => {
          reject(err)
        })
      })
    },
    // 用户登出
    logout() {
      return new Promise((resolve, reject) => {
        post(userLogoutUrl).then(res => {
          this.token = ''
          this.username = ''
          removeToken()
          setStorage('')
          resolve(res)
        }).catch(err => {
          reject(err)
        })
      })
    }
  }
})
export default useUser
