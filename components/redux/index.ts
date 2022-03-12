import { configureStore } from '@reduxjs/toolkit'
import counterSlice, { myRTQuest } from './reducer'

export const store = configureStore({
  reducer: {
    card: counterSlice,
    [myRTQuest.reducerPath]: myRTQuest.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(myRTQuest.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
