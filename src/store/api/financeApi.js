import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// financeApi는 스토어에 등록하기 위한 이름
export const financeApi = createApi({
  // reducerPath 는 financeApi에 대한 이름
  reducerPath: 'financeApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL
  }),
  // endpoints 는 url 주소의 파라미터를 정리하기 위한 키값
  endpoints: builder => ({
    getProducts: builder.query({
      query: () => `products/customized`,
      transformResponse: response => {
        return response.data
      }
    })
    // 토큰업데이트
    // updateToken: builder.mutation({
    //   query: tokens => ({
    //     url: '/reissue',
    //     method: 'POST',
    //     body: tokens,
    //   }),
    // }),
    // // 관심 상품
    // getFavorite: builder.query({
    //   query: token => 'products/concern',
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //   },
    // }),
    // addFavorite: builder.mutation({
    //   query: ({ token, id }) => ({
    //     url: 'products/concern',
    //     method: 'POST',
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //     },
    //     body: { id },
    //   }),
    // }),
    // deleteFavorite: builder.mutation({
    //   query: id => ({
    //     url: 'product/concern',
    //     method: 'DELETE',
    //     body: { id },
    //   }),
    // }),
  })
})
export const {
  useGetProductsQuery,
  useGetFavoriteQuery,
  useAddFavoriteMutation,
  useDeleteFavoriteMutation,
  useUpdateTokenMutation
} = financeApi
