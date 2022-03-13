import { useEffect, useLayoutEffect, useState } from 'react'
import { useActions } from '../components/hooks/useActions'
import {
  useFetchAllUsersQuery,
  userAPI,
} from '../components/redux/service/UserService'
import { DataTypeAPI, iPost } from '../components/type'

const Pageone = () => {
  const [limit, setlimit] = useState(10)

  const { data, isLoading, error } = userAPI.useFetchAllUsersQuery(limit)
  useLayoutEffect(() => {
    setInterval(() => {
      setlimit(2)
    }, 3000)
  }, [])
  if (isLoading) {
    return <h1>Loading...</h1>
  }
  if (error) {
    return <h1>error...`${error}`</h1>
  }
  return (
    <div>
      <h1>start</h1>
      <button onClick={() => refetch()}>ref</button>
      <ul>
        {data?.map((el: iPost) => (
          <ul key={el.id}>
            <h3>{el.title}</h3>
            <p>{el.body}</p>
          </ul>
        ))}
      </ul>
    </div>
  )
}

export default Pageone
