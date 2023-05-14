import { defineConfig } from '@wagmi/cli'
import { actions, hardhat } from '@wagmi/cli/plugins'
import ARTWORKS_ABI from './abis/ArtworksABI'
import EDITIONS_ABI from './abis/EditionsABI'

export default defineConfig({
  out: 'src/abis.ts',
  contracts: [
    {
      abi: ARTWORKS_ABI,
      name: 'MXJXN Artworks',
      address: '0x2E40C7A7AADA89B814C9A1708b4FF4d143AeF60a',
    },
    {
      abi: EDITIONS_ABI,
      name: 'MXJXN Editions',
      address: '0x707c45204afa2abed0c322e1458540ddb0320851',
    }
  ],
  plugins: [
    actions({
      getContract: true,
      readContract: true,
    }),
  ],
})
