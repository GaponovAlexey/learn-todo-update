import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { myRTQuest } from './reducer'
import mySlice from './myReducer'
import { userAPI } from './service/UserService'


export const store = configureStore({
  reducer: {
    reducer: mySlice,
    [userAPI.reducerPath]: userAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userAPI.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
