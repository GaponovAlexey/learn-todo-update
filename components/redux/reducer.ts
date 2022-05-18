import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseApi, DataTypeAPI } from '../type'

export const myRTQuest = createApi({
  reducerPath: 'redux/reducer',
  baseQuery: fetchBaseQuery({ baseUrl: baseApi }),
  tagTypes: ['tag/todo'],
  endpoints: (build) => ({
    getmyRTQuest: build.query({
      query: () => `/hello`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }: any) => ({ type: 'tag/todo', id })),
              { type: 'tag/todo', id: 'LIST' },
            ]
          : [{ type: 'tag/todo', id: 'LIST' }],
    }),
    
    addProduct: build.mutation({
      query: (body) => ({
        url: '/hello',
        method: 'POST',
        body,
      }),
      transformResponse: (rawResult: { result: { post: DataTypeAPI } }, meta) => {
        return rawResult.result.post
      },
      invalidatesTags: [{ type: 'tag/todo', id: 'LIST' }],
    }),
  }),
})

export const { useGetmyRTQuestQuery, useAddProductMutation } = myRTQuest
