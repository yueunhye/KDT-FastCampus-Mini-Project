import { apiSlice } from "./apiSlice";

export const searchApiSlice = apiSlice.injectEndpoints({
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

export const { useGetProductsQuery, useGetSearchMutation } = searchApiSlice