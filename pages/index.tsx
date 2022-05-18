import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { useActions } from '../components/hooks/useActions'
import Pageone from '../components/pageone'
import { useAddProductMutation } from '../components/redux/reducer'
import { userAPI } from '../components/redux/service/UserService'

const Home: NextPage = () => {
  const [newProduct, setnewProduct] = useState('')
  const [ { } ] = userAPI.useFetchAllUsersQuery('')
  const { fetchUsers } = useActions()
  useEffect(() => {
    fetchUsers()
  }, [])

  const [addProduct, { isLoading }] = useAddProductMutation()

  const handlerAddProduct = async () => {
    if (newProduct) {
      await addProduct({ id: Date.now(), title: newProduct }).unwrap()
      setnewProduct('')
    }
  }

  //text

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      <h1>start</h1>
      <Pageone />

      <input
        type='text'
        value={newProduct}
        onChange={(e) => setnewProduct(e.target.value)}
      />
      <button onClick={handlerAddProduct}>send</button>
      <ul>
        <h2>
          {users?.map?.((el: any) => (
            <div key={el.id}>
              {el.bookAuthor}-{el.title}
            </div>
          ))}
        </h2>
      </ul>
    </div>
  )
}

export default Home
