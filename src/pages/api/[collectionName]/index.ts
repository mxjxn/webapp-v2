// pages/api/[collectionName]/index.ts
import { NextApiRequest, NextApiResponse } from 'next'
import artworksData from 'data/mxjxn-artworks'
import type { NFTMetadata } from 'data/mxjxn-artworks'
import _ from 'lodash'
// import editionsData from 'data/mxjxn-editions';

interface CollectionQuery
  extends Partial<{
    collectionName: string
  }> {}

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const { collectionName } = req.query as CollectionQuery

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

  if (_.isEmpty(collectionData)) {
    res.status(404).json({ message: 'NFT not found' })
  } else {
    res.status(200).json(collectionData)
  }
}

export default handler
