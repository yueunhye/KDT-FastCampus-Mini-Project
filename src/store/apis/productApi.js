import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://mini-project-919dd.asia-southeast1.firebasedatabase.app/',
  }),
  endpoints: builder => ({
    getProducts: builder.query({
      query: () => `.json`,
      transformResponse: response => {
        return response.data
      },
    }),
  }),
})

export const { useGetProductsQuery } = productApi
