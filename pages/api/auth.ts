import { authorize } from '@liveblocks/node'
import { NextApiRequest, NextApiResponse } from 'next'

const secret = process.env.LIVEBLOCKS_SECRET_KEY

export default async function auth(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const room = req.body.room
  const result = await authorize({ room, secret })
  return res.status(result.status).end(result.body)
}
