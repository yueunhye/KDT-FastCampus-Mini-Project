import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// financeApi는 스토어에 등록하기 위한 이름
export const financeApi = createApi({
  // reducerPath 는 financeApi에 대한 이름
  reducerPath: 'financeApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
  }),
  // endpoints 는 url 주소의 파라미터를 정리하기 위한 키값
  endpoints: builder => ({
    getProducts: builder.query({
      query: () => `products/customized`,
      transformResponse: response => {
        return response.data
      },
    }),
    // addFacorite: builder.mutation({
    //   query: productId => `products/${productId}`,
    // }),
  }),
})
export const { useGetProductsQuery } = financeApi
