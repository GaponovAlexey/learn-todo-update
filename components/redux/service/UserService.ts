import { baseApi, DataTypeAPI, iPost } from './../../type';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const userAPI = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseApi }),
  endpoints: build => ({
    fetchAllUsers: build.query<iPost[], number>({
      query: (limit = 5) => ({
        url: '/posts',
        params: {
          _limit: limit
        }
      })
    })
  })
})


export const { useFetchAllUsersQuery } = userAPI