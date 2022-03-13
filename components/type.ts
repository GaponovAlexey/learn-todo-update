export const baseApi = process.env.NEXT_PUBLIC_DB_API
// export const baseApi = process.env.NEXT_PUBLIC_DB_API_USERS

export interface CounterState {
  data: object
}

export interface TodoType {
  userId: number
  id: number
  title: string
  completed: boolean
}

export interface DataTypeAPI {
  id: number
  name: string
  email: string
}

export interface UserStateType {
  users: DataTypeAPI[]
  isLoading: boolean
  error: string
  count: number
}

export interface iPost {
  id: number
  title: string
  body: string
}