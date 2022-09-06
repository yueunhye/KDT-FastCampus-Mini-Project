import { getCookie } from '../../utils/cookie'
import { apiSlice } from '../api/apiSlice'

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    login: builder.mutation({
      query: ({ email, password }) => ({
        url: 'login',
        method: 'POST',
        body: { email, password }
      }),
      transformResponse: response => {
        return response.data
      }
    }),
    signUp: builder.mutation({
      query: data => ({
        url: 'join',
        method: 'POST',
        body: { ...data }
      })
    }),
    refreshData: builder.mutation({
      query: data => ({
        url: 'reissue',
        method: 'POST',
        body: { ...data }
      }),
      transformResponse: response => {
        return response.data
      }
    }),
    userDetail: builder.mutation({
      query: data => ({
        url: 'join/detail',
        method: 'POST',
        body: { ...data }
      })
    }),
    detailPass: builder.query({
      query: () => ({
        url: 'join/detail-skip',
        method: 'GET'
      })
    }),
    inquireUserData: builder.query({
      query: () => ({
        url: 'members',
        method: 'GET'
      }),
      transformResponse: response => {
        return response.data
      }
    }),
    editUserData: builder.mutation({
      query: data => ({
        url: 'members',
        method: 'PATCH',
        body: { ...data }
      })
    }),
    logout: builder.mutation({
      query: () => ({
        url: 'logout',
        method: 'POST',
        body: {
          accessToken: getCookie('accessToken'),
          refreshToken: getCookie('refreshToken')
        }
      })
    })
  })
})

export const {
  useLoginMutation,
  useSignUpMutation,
  useRefreshDataMutation,
  useUserDetailMutation,
  useDetailPassQuery,
  useInquireUserDataQuery,
  useEditUserDataMutation,
  useLogoutMutation
} = userApiSlice
