import { baseApi, DataTypeAPI, iPost } from './../../type'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const userAPI = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseApi }),
  tagTypes: ['myUser'],
  endpoints: (build) => ({
    fetchAllUsers: build.query<DataTypeAPI[]>({
      query: () => ({
        url: '',
        
      }),
      providesTags: ['myUser']
    }),
    CreatePost: build.mutation<DataTypeAPI[], DataTypeAPI[]>({
      query: (post) => ({
        url: '',
        method: 'POST',
        body: post,
      }),
    invalidatesTags: ['myUser']  
    }),
  }),
})

export const { useFetchAllUsersQuery } = userAPI
