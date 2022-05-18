import { useAddProductMutation, useGetmyRTQuestQuery } from './redux/reducer'

const Pageone = () => {
  const { isLoading, error } = useGetmyRTQuestQuery('')

  const [addProduct] = useAddProductMutation()

  const handleCreate = async () => {
    const title = prompt('name')
    await addProduct(title).unwrap()
  }

  return (
    <div>
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>error...`${error}`</h1>}
      <h1>start</h1>
      <div>
        <button onClick={handleCreate}>add new post</button>
      </div>
      <ul></ul>
    </div>
  )
}

export default Pageone
