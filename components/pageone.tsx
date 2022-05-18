import { useState } from 'react'
import { useAddProductMutation, useGetmyRTQuestQuery } from './redux/reducer'

const Pageone = ({ refetch }: any) => {
  const { isLoading, error } = useGetmyRTQuestQuery('')

  const [addProduct, { data }] = useAddProductMutation()
  const [datas, setdatas] = useState(data) || []

  const handleCreate = async () => {
    const title = prompt('name')
    await addProduct(title)
    refetch()
  }

  return (
    <div>
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>error...`${error}`</h1>}
      <h1>start</h1>
      <div>
        <button onClick={handleCreate}>add new post</button>
      </div>
      <ul>
        {datas?.map((el: any) => (
          <div key={el.id}>{el.bookAuthor}</div>
        ))}
      </ul>
    </div>
  )
}

export default Pageone
