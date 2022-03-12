import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { useGetmyRTQuestQuery } from '../components/redux/reducer'
import { fetchApi } from '../components/service/api'

const Home: NextPage = () => {
  const { data, error, isLoading } = useGetmyRTQuestQuery('bulba')

  console.log(data)

  return <div>start</div>
}

export default Home
