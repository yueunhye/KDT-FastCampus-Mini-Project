import { apiSlice } from '../api/apiSlice'

const apiWithTags = apiSlice.enhanceEndpoints({ addTagTypes: ['Cart'] })

export const cartApiSlice = apiWithTags.injectEndpoints({
  endpoints: builder => ({
    getCart: builder.query({
      query: () => 'members/cart',
      transformResponse: response => response.data,
      providesTags: ['Cart']
    }),
    addCart: builder.mutation({
      query: id => ({
        url: 'members/cart',
        method: 'POST',
        body: { id }
      }),
      invalidatesTags: ['Cart']
    }),
    deleteCart: builder.mutation({
      query: id => ({
        url: 'members/cart',
        method: 'DELETE',
        body: { id }
      }),
      invalidatesTags: ['Cart']
    })
  })
})

export const { useGetCartQuery, useAddCartMutation, useDeleteCartMutation } =
  cartApiSlice
