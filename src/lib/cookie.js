import Cookies from 'js-cookie'

import config from '@/config'

import Fingerprint from 'fingerprintjs'

export const TOKEN_KEY = 'user_token'

export const USER_KEY = 'user_id'

export const DEVICE_ID_KEY = 'device_id'

const { cookieExpires } = config

export const setToken = (token) => {
  Cookies.set(TOKEN_KEY, token, { expires: cookieExpires || 1 })
}

export const getToken = () => {
  const token = Cookies.get(TOKEN_KEY)
  if (token) return token
  else return false
}
export const setUer = (user_id) => {
  Cookies.set(USER_KEY, user_id, { expires: cookieExpires || 1 })
}
export const getUser = () => {
  const user_id = Cookies.get(USER_KEY)
  if (user_id) return user_id
  else return false
}
export const setDeviceId = (key) => {
  Cookies.set(DEVICE_ID_KEY, key, { expires: cookieExpires || 10 })
}

export const getDeviceId = () => {
  let fingerprint = Cookies.get(DEVICE_ID_KEY)
  if (!fingerprint) {
    fingerprint = new Fingerprint().get()
    setDeviceId(fingerprint)
  }
  return fingerprint
}
