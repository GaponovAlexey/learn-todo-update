import type { NextPage } from 'next'
import { useGetPokemonByNameQuery } from '../components/redux/reducer'

const Home: NextPage = () => {
  const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur')
  console.log(data)

  return <div>start</div>
}

export default Home
