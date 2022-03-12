import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CounterState, TodoType } from '../type'

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { fetchApi } from '../service/api'

export const myRTQuest = createApi({
  reducerPath: 'redux/reducer',
  baseQuery: fetchBaseQuery<TodoType, string>(fetchApi.getAll()),
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: (id) => `todos/${id}`,
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

export const { useGetPokemonByNameQuery } = myRTQuest
