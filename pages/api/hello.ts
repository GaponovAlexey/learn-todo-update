// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { DataTypeAPI } from '../../components/type'

const data = [
  { id: 1, name: 'Vadim', email: 'vikram@gmail.com' },
  { id: 2, name: 'slavik', email: 'slavik@gmail.com' },
  { id: 3, name: 'igor', email: 'igor@gmail.com' },
  { id: 4, name: 'taras', email: 'taras@gmail.com' },
]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<DataTypeAPI[]>
) {
  res.status(200).json(data)
}
