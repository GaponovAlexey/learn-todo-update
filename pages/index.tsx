import type { NextPage } from 'next'
import { useState } from 'react'
import Pageone from '../components/pageone'
import { useGetmyRTQuestQuery } from '../components/redux/reducer'

const Home: NextPage = () => {
  const [newProduct, setnewProduct] = useState('')

  const { data } = useGetmyRTQuestQuery({ pollingInterval: 400 })
  console.log(data)

  return (
    <div>
      <Pageone />
      <input
        style={{ outline: 'none' }}
        type='text'
        value={newProduct}
        onChange={(e) => setnewProduct(e.target.value)}
      />
      <button>send</button>
      <ul>
        <h2>
          {data &&
            data?.map((el: any) => <div key={el.id}>{el.bookAuthor}</div>)}
        </h2>
      </ul>
    </div>
  )
}

export default Home
