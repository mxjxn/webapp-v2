import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    res.status(405).end() // Method Not Allowed
    return
  }

  const { userId, count } = req.body
  console.log('GET FarcasterPosts\n', { userId, count })

  const farcasterPostsUri = `https://api.warpcast.com/v2/casts?fid=${userId}&limit=${count}`

  const config = {
    mode: 'cors',
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${process.env.WARPCAST_TOKEN}`,
    },
  }

  type Fetcher = (uri: string) => Promise<any>
  const fetcher: Fetcher = (uri: string) =>
    fetch(uri, config as RequestInit).then((res) => res.json())

  const data = fetcher(farcasterPostsUri)
  console.log({ farcasterData: data })

  return res.status(200).json(data)
}
