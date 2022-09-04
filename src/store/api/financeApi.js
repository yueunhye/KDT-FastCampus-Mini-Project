import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const financeApi = createApi({
  reducerPath: 'financeApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
  }),
  endpoints: builder => ({
    getProducts: builder.query({
      query: () => 'products',
      transformResponse: response => {
        return response.data
      },
    }),
    getRecommend: builder.query({
      query: () => '/products/customized',
      transformResponse: response => {
        return response.data
      },
    }),
    getSearch: builder.mutation({
      query: ({ query, tag, tagContent }) => ({
        url: `/products?query=${query}&tag=${tag}&tagContent=${tagContent}`,
        method: 'GET',
      }),
      transformResponse: response => {
        return response.data
      },
    }),
  }),
})
// useGetSearchQuery

export const {
  useGetProductsQuery,
  useGetSearchMutation,
  useGetRecommendQuery,
} = financeApi
