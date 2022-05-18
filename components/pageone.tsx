import { userAPI } from './redux/service/UserService'

const Pageone = () => {
  const { isLoading, error } = userAPI.useFetchAllUsersQuery('')

  const [createPost, { data }] = userAPI.useCreatePostMutation()

  const handleCreate = async () => {
    const title = prompt('name')
    await createPost(title).unwrap()
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
