import { apiSlice } from '../api/apiSlice'

const apiWithTags = apiSlice.enhanceEndpoints({ addTagTypes: ['Favorite'] })

export const favoriteApiSlice = apiWithTags.injectEndpoints({
  endpoints: builder => ({
    getFavorite: builder.query({
      query: () => 'products/concern',
      transformResponse: response => response.data,
      providesTags: ['Favorite']
    }),
    addFavorite: builder.mutation({
      query: id => ({
        url: 'products/concern',
        method: 'POST',
        body: { id }
      }),
      invalidatesTags: ['Favorite']
    }),
    deleteFavorite: builder.mutation({
      query: id => ({
        url: 'products/concern',
        method: 'DELETE',
        body: { id }
      }),
      invalidatesTags: ['Favorite']
    })
  })
})

export const {
  useGetFavoriteQuery,
  useAddFavoriteMutation,
  useDeleteFavoriteMutation
} = favoriteApiSlice
