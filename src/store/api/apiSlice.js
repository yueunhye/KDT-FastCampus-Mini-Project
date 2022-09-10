import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { getCookie } from '../../utils/cookie'

const baseQuery = fetchBaseQuery({
  // baseUrl: import.meta.env.VITE_API_URL,
  baseUrl: 'https://conan.pll0123.com',
  credentials: 'include',
  prepareHeaders: headers => {
    const accessToken = getCookie('accessToken')
    if (accessToken) {
      headers.set('Authorization', `Bearer ${accessToken}`)
    }
    return headers
  }
})

export const apiSlice = createApi({
  baseQuery,
  endpoints: builder => ({})
})
