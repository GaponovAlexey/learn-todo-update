// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { DataTypeAPI } from '../../components/type'

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function (req: NextApiRequest, res: NextApiResponse) {
  try {
    const allBooks = await prisma.bookSugesstion.findMany()
    return res.status(200).json(allBooks)
  } catch (error) {
    console.error('Request error', error)
    res.status(500).json({ error: 'Error creating question', success: false })
  } finally {
    await prisma.$disconnect()
  }
}
