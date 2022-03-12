import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CounterState, TodoType } from '../type'

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { fetchApi } from '../service/api'

export const myRTQuest = createApi({
  reducerPath: 'redux/reducer',
  baseQuery: fetchBaseQuery<TodoType, string>({ baseUrl: fetchApi.getAll() }),
  endpoints: (builder) => ({
    getmyRTQuest: builder.query({
      query: () => `/todos`,
    }),
  }),
})

const initialState: CounterState = {
  data: [],
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {},
})

export default counterSlice.reducer

export const { useGetmyRTQuestQuery } = myRTQuest
