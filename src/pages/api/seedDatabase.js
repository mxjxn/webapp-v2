import { PrismaClient } from '@prisma/client'
import { ethers } from 'ethers'
import axios from 'axios'
import { mxjxnArtworksAddress as contractAddress, mxjxnArtworksABI } from 'abis'
import { withSessionRoute } from 'utils/server'

const prisma = new PrismaClient()
const providerUrl = process.env.QUIKNODE_RPC

const startTokenId = 1
const endTokenId = 19

export default withSessionRoute(seedDatabase);

async function seedDatabase(req, res) {

	/*
	if(req.session.user) {
		console.log({ 
			user: req.session.user
		})
	}
	*/

  const provider = new ethers.providers.JsonRpcProvider(providerUrl)
  const contract = new ethers.Contract(
    contractAddress,
    mxjxnArtworksABI,
    provider
  )

  // Check if the collection exists, and create it if not
  let collection = await prisma.collection.findUnique({
    where: { contractAddress },
  })
  let collectionName = 'MXJXN Artworks'
  if (!collection) {
    collection = await prisma.collection.create({
      data: {
        contractAddress,
        name: collectionName,
        // coverImage: collectionCoverImage,
      },
    })
  }

  for (let tokenId = startTokenId; tokenId <= endTokenId; tokenId++) {
    try {
      const ownerOf = await contract.ownerOf(tokenId)
      const tokenURI = await contract.tokenURI(tokenId)
      const metadataResponse = await axios.get(tokenURI)
      const metadata = metadataResponse.data

      const existingUser = await prisma.user.findUnique({
        where: { wallet: ownerOf },
      })
      if (!existingUser) {
        await prisma.user.create({
          data: {
            wallet: ownerOf,
          },
        })
      }

      await prisma.nFT.upsert({
        where: { contractAddress_tokenId: { contractAddress, tokenId } },
        update: {
          tokenURI,
          ownerId: ownerOf,
          image: metadata.image,
          attributes: metadata.attributes,
        },
        create: {
          contractAddress,
          tokenId: Number(tokenId),
          tokenURI,
          ownerId: ownerOf,
          image: metadata.image,
          attributes: metadata.attributes,
        },
      })
    } catch (error) {
      console.error(`Error fetching tokenId ${tokenId}:`, error.message)
    }
  }
}

seedDatabase().finally(() => {
  prisma.$disconnect()
})
