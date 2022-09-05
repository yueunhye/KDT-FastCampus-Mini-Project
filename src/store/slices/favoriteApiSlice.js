import { apiSlice } from '../api/apiSlice'

export const favoriteApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getFavorite: builder.query({
      query: () => 'products/concern'
    }),
    addFavorite: builder.mutation({
      query: id => ({
        url: 'products/concern',
        method: 'POST',
        body: { id }
      })
    }),
    deleteFavorite: builder.mutation({
      query: id => ({
        url: 'products/concern',
        method: 'DELETE',
        body: { id }
      })
    })
  })
})

export const {
  useGetFavoriteQuery,
  useAddFavoriteMutation,
  useDeleteFavoriteMutation
} = favoriteApiSlice
