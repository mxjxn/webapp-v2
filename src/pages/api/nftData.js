import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function getNFTData() {
  const nfts = await prisma.nFT.findMany({
    include: {
      owner: true,
    },
  })

  return nfts.map((nft) => ({
    tokenId: nft.tokenId,
    image: nft.image,
    attributes: nft.attributes,
    ownerOf: nft.ownerId,
    owner: nft.owner,
  }))
}
