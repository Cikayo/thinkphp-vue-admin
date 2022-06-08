import Cookies from 'js-cookie'
const TOKEN_KEY = 'token';
const USER_KEY = 'user_name'

/**
 * 获取 token，默认 key 为 TOKEN_KEY
 * @returns 
 */
export function getToken(key = TOKEN_KEY) {
  return Cookies.get(key)
}

/**
 * 设置 token，默认 key 为 TOKEN_KEY，时间为 1 天（expires的值以“天”为单位，例如：0.5则表示12小时）
 * @param {*} token 要存储的值
 * @param {*} key 要存储的键
 * @returns 
 */
export function setToken(token, key = TOKEN_KEY) {
  Cookies.set(key, token, { expires: 1 })
}

/**
 * 移除 cookie，默认 key 为 TOKEN_KEY
 * @returns 
 */
export function removeToken(key = TOKEN_KEY) {
  Cookies.remove(key)
}

export function setStorage(val, key = USER_KEY) {
  window.localStorage.setItem(key, val)
}

export function getStorage(key = USER_KEY) {
  return window.localStorage.getItem(key)
}

export function removeStorage() {
  window.localStorage.removeItem()
}