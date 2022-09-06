import { fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { apiSlice } from './apiSlice'

export const financeApi = apiSlice.injectEndpoints({
  reducerPath: 'financeApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL
  }),
  endpoints: builder => ({
    getProducts: builder.query({
      query: () => '/products',
      transformResponse: response => {
        return response.data
      }
    }),
    getSearch: builder.mutation({
      query: ({ query, tag, tagContent }) => ({
        url: `/products?query=${query}&tag=${tag}&tagContent=${tagContent}`,
        method: 'GET'
      }),
      transformResponse: response => {
        return response.data
      }
    })
  })
})
export const {
  useGetProductsQuery,
  useUpdateTokenMutation,
  useGetSearchMutation,
  useGetRecommendQuery
} = financeApi
