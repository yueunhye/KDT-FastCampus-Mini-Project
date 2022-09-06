import { apiSlice } from '../api/apiSlice'

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
      })
    })
  })
})

export const {
  useSetRecommendQuery,
  useSetMenberShipQuery,
  useSetDetailProductMutation
} = recommendApi
