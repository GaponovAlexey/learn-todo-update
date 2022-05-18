import { useEffect, useLayoutEffect, useState } from 'react'
import { useActions } from '../components/hooks/useActions'
import {
  useFetchAllUsersQuery,
  userAPI,
} from '../components/redux/service/UserService'
import { DataTypeAPI, iPost } from '../components/type'

const Pageone = () => {
  const { isLoading, error } = userAPI.useFetchAllUsersQuery('')

  const [createPost, { data }] = userAPI.useCreatePostMutation()

  const handleCreate = async () => {
    const title = prompt('name')
  }

  if (isLoading) {
    return <h1>Loading...</h1>
  }
  if (error) {
    return <h1>error...`${error}`</h1>
  }
  return (
    <div>
      <h1>start</h1>
      <div>
        <button onClick={handleCreate}>add new post</button>
      </div>
      <ul>
       
      </ul>
    </div>
  )
}

export default Pageone
