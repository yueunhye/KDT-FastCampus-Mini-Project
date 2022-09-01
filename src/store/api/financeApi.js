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
  }),
})

export const { useGetProductsQuery } = financeApi
