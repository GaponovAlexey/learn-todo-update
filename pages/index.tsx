import type { NextPage } from 'next'
import { useState } from 'react'
import Pageone from '../components/pageone'
import { useGetmyRTQuestQuery } from '../components/redux/reducer'

const Home: NextPage = () => {
  const { data, refetch } = useGetmyRTQuestQuery({ pollingInterval: 1000 })
  return (
    <div>
      <Pageone refetch={refetch}/>
      <button onClick={() => refetch()}>refetch</button>
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
