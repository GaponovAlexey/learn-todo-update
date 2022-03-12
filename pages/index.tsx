import type { NextPage } from 'next'
import { useState } from 'react'
import {
  useGetmyRTQuestQuery,
  useAddProductMutation,
} from '../components/redux/reducer'

const Home: NextPage = () => {
  const { data: count, error } = useGetmyRTQuestQuery('')
  console.log(count);
  
  const [addProduct, { isLoading }] = useAddProductMutation()

  const [newProduct, setnewProduct] = useState('')

  const handlerAddProduct = async () => {
    if (newProduct) {
      await addProduct({ id: Date.now(), title: newProduct }).unwrap()
      setnewProduct('')
    }
  }

  if (isLoading) {
    return <div>Loading...</div>
  }
  return (
    <div>
      <h1>start</h1>
      <input
        type='text'
        value={newProduct}
        onChange={(e) => setnewProduct(e.target.value)}
      />
      <button onClick={handlerAddProduct}>send</button>
      <ul>
        <li>
          {count?.map?.((el) => (
            <li key={el.id}>{el.title}</li>
          ))}
        </li>
      </ul>
    </div>
  )
}

export default Home
