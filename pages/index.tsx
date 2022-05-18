import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../components/hooks/redux'
import { useActions } from '../components/hooks/useActions'
import { fetchUsers } from '../components/redux/myReducer'
import { useAddProductMutation } from '../components/redux/reducer'
import { baseApi } from '../components/type'
import Pageone from './pageone'

const Home: NextPage = () => {
  const { users } = useAppSelector((state) => state.reducer)
  const { fetchUsers } = useActions()
  const [newProduct, setnewProduct] = useState('')

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
      {/* <Pageone /> */}

      <input
        type='text'
        value={newProduct}
        onChange={(e) => setnewProduct(e.target.value)}
      />
      <button onClick={handlerAddProduct}>send</button>
      <ul>
        <h2>
          {users?.map?.((el: DataTypeAPI) => (
            <div key={el.id}>
              {el.autors}-{el.title}
            </div>
          ))}
        </h2>
      </ul>
    </div>
  )
}

export default Home
