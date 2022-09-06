import { apiSlice } from '../api/apiSlice'

const apiWithTags = apiSlice.enhanceEndpoints({ addTagTypes: ['getRecommend'] })

export const recommendApi = apiSlice.injectEndpoints({
  endpoints: builder => ({
    setRecommend: builder.query({
      query: () => ({
        url: 'products/customized',
        method: 'GET',
        transformResponse: response => {
          return response.data
        }
      })
    }),
    setMenberShip: builder.query({
      query: () => ({
        url: 'products/wisdom',
        method: 'GET',
        transformResponse: response => {
          return response.data
        }
      })
    }),
    setDetailProduct: builder.mutation({
      query: id => ({
        url: `products/${id}`,
        method: 'GET',
        transformResponse: response => {
          return response.data
        }
      }),
      invalidatesTags: ['getRecommend']
    })
  })
})

export const {
  useSetRecommendQuery,
  useSetMenberShipQuery,
  useSetDetailProductMutation
} = recommendApi
