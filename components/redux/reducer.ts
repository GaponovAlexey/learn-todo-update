import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BaseApi } from '../service/api'

export const myRTQuest = createApi({
  reducerPath: 'redux/reducer',
  tagTypes: ['tag/todo'],
  baseQuery: fetchBaseQuery({ baseUrl: BaseApi }),
  endpoints: (build) => ({
    getmyRTQuest: build.query({
      query: (ids) => `/todos/${ids}`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'tag/todo', id })),
              { type: 'tag/todo', id: 'LIST' },
            ]
          : [{ type: 'tag/todo', id: 'LIST' }],
    }),
    addProduct: build.mutation({
      query: (body) => ({
        url: '/todos/',
        method: 'POST',
        body,
      }),
      invalidatesTags: [{type: 'tag/todo', id: 'LIST'}]
    }),
  }),
})

export const { useGetmyRTQuestQuery, useAddProductMutation } = myRTQuest
