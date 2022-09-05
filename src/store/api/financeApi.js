import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const financeApi = createApi({
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
    getRecommend: builder.query({
      query: () => '/products/customized',
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
  useUpdateTokenMutation,
  useGetSearchMutation,
  useGetRecommendQuery
} = financeApi
