import { Cookies } from 'react-cookie'

const cookies = new Cookies()

export const setCookie = token => {
  return cookies.set('refreshToken', token, { path: '/' })
}

export const getCookie = () => {
  return cookies.get('refreshToken')
}
