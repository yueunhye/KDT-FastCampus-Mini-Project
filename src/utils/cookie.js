import { Cookies } from 'react-cookie'

const cookies = new Cookies()

export const setCookie = ({ accessToken, refreshToken }) => {
  cookies.set('refreshToken', refreshToken, { path: '/' })
  cookies.set('accessToken', accessToken, { path: '/' })
  return
}

export const getCookie = token => {
  return cookies.get(token)
}

export const removeCookie = token => {
  return cookies.remove(token)
}
