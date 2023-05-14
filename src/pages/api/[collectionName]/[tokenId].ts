// pages/api/[collectionName]/[tokenId].ts
import { NextApiRequest, NextApiResponse } from 'next'
import artworksData from 'data/mxjxn-artworks'
import type { NFTMetadata } from 'data/mxjxn-artworks'
// import editionsData from 'data/mxjxn-editions';

interface TokenQuery
  extends Partial<{
    collectionName: string
    tokenId: string
  }> {}

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const { collectionName, tokenId } = req.query as TokenQuery

  const parsedTokenId = parseInt(tokenId!)
  type CollectionData = Array<NFTMetadata>
  let collectionData: CollectionData = []

  switch (collectionName) {
    case 'mxjxn-artworks':
      collectionData = artworksData
      break
    case 'mxjxn-editions':
      // collectionData = editionsData;
      break
    default:
      res.status(400).json({ message: 'Invalid collection name' })
      return
  }
  const nft = collectionData.find((n) => n.tokenId === parsedTokenId)

  if (!nft) {
    res.status(404).json({ message: 'NFT not found' })
  } else {
    res.status(200).json(nft)
  }
}

export default handler
