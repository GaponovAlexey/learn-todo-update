import { configureStore } from '@reduxjs/toolkit'
import { myRTQuest } from './reducer'

export const store = configureStore({
  reducer: {
    [myRTQuest.reducerPath]: myRTQuest.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(myRTQuest.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
