import { DataTypeAPI, UserStateType, baseApi } from '../type'
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

export const fetchUsers = createAsyncThunk('todo/slice', async () => {
  const res = await fetch(baseApi)
  const data = await res.json()
  return data
})

const initialState: UserStateType = {
  users: [],
  isLoading: false,
  error: '',
  count: 0,
}

const mySlice = createSlice({
  name: 'todo/slice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users.push(...action.payload)
    })
  },
})

export const allActions = mySlice.actions
export default mySlice.reducer
