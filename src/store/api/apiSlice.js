import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { getCookie } from '../../utils/cookie'

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_URL,
  credentials: 'include',
  prepareHeaders: headers => {
    const accessToken = getCookie('accessToken')
    console.log('헤더에 토큰 잘 들어감')
    if (accessToken) {
      headers.set('authorization', `Bearer ${accessToken}`)
    }
    return headers
  }
})

export const apiSlice = createApi({
  baseQuery,
  endpoints: builder => ({})
})
