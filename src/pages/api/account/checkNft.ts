import { NextApiRequest, NextApiResponse } from 'next'
import { ethers } from 'ethers'

const ERC721_ABI = [
  // Add the necessary ERC721 ABI functions here
  {
    constant: true,
    inputs: [
      {
        name: 'owner',
        type: 'address',
      },
      {
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'tokenOfOwnerByIndex',
    outputs: [
      {
        name: '',
        type: 'uint256',
      },
    ],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
]

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { walletAddress, nftContractAddress, tokenId } = req.body

  if (!walletAddress || !nftContractAddress || !tokenId) {
    return res
      .status(400)
      .json({
        error:
          'Missing walletAddress, nftContractAddress, or tokenId in the request body',
      })
  }

  try {
    // https://indulgent-radial-hexagon.discover.quiknode.pro//
    const provider = new ethers.providers.JsonRpcProvider(
      `https://indulgent-radial-hexagon.discover.quiknode.pro/${process.env.QUIKNODE_ID}`
    )
    //const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${process.env.INFURA_PROJECT_ID}`);
    const nftContract = new ethers.Contract(
      nftContractAddress,
      ERC721_ABI,
      provider
    )

    const ownerOfToken = await nftContract.ownerOf(tokenId)

    if (ownerOfToken.toLowerCase() === walletAddress.toLowerCase()) {
      res.status(200).json({ hasNFT: true })
    } else {
      res.status(200).json({ hasNFT: false })
    }
  } catch (error) {
    console.error('Error checking NFT ownership:', error)
    res.status(500).json({ error: 'Failed to check NFT ownership' })
  }
}
