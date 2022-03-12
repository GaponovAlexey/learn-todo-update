export const BaseApi = 'https://jsonplaceholder.typicode.com'

export const fetchApi = {
  async getAll() {
    const res = await fetch(BaseApi)
    const data = await res.json()
    return data
  },
}
