import React from 'react'
import _ from 'lodash'
import { LinkComponent } from 'components/layout/LinkComponent'
import {
  VStack,
  Grid,
  Text,
  Box,
  useTheme,
  useColorMode,
  GridItem,
  Image,
} from '@chakra-ui/react'
import type { NFTMetadata } from 'data/mxjxn-artworks'

type NFTGalleryProps = {
  nfts: NFTMetadata[]
  collectionName: string
}

export default function NFTGallery(props: NFTGalleryProps) {
  const { theme } = useTheme()
  const { colorMode } = useColorMode()
  const { collectionName, nfts } = props

  // if collectionName exists, filter the results by nft.attributes where trait_type: "Collection" and value = collectionName
  const filteredList = _.filter(nfts, (n: any, i: number) => {
    let val
    val = _.findIndex(n.attributes, {
      trait_type: 'Collection',
      value: collectionName,
    })
    return val > 0
  })
  const displayList = collectionName ? filteredList : nfts

  console.log({
    collectionName,
    filteredList,
    displayList,
  })

  return (
    <Grid
      padding={0}
      gridRow={'3'}
      bg={colorMode === 'dark' ? 'whiteAlpha.100' : 'blackAlpha.100'}
      gridColumn={'2 / 8'}
    >
      <VStack m={'0.2em'} ml={'.41em'}>
        <Box w="100%">
          <Text as={'p'}>
            <Box
              as="span"
              display={'inline-block'}
              transform={'skew(-20deg)'}
              pt={'0.15em'}
              pb={'0em'}
              px={'0.38em'}
              pl={'1em'}
              ml={'-1em'}
              mr={'.8em'}
              bg={colorMode === 'dark' ? '#992288' : '#ffaa99'}
              pos={'relative'}
              h="100%"
            >
              {' '}
              <Box
                as="span"
                display={'inline-block'}
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'calc(100% + .2em)',
                  height: '2px',
                  position: 'absolute',
                  bottom: 1,
                  left: '-0.1em',
                  bg: colorMode == 'dark' ? 'whatsapp.400' : 'red.400',
                  zIndex: -1,
                }}
                transform={'skew(20deg)'}
                fontWeight={700}
              >
                Works on Auction
              </Box>
            </Box>
            <Text as={'span'} mt={2}>
              I sell my work on-chain via MXJXN Artworks and MXJXN Editions.
            </Text>
          </Text>
          <Grid
            gridTemplateColumns={'repeat(4, 2fr)'}
            gridTemplateRows={'repeat(4, 2fr)'}
          >
            {displayList.length &&
              _.map(displayList, (nft, i) => {
                return <NFTGridItem nft={nft} />
              })}
          </Grid>
        </Box>
      </VStack>
    </Grid>
  )
}

const NFTGridItem = ({ nft }: React.PropsWithChildren<any>) => {
  return (
    <GridItem m={'.3em'} bg={'blue'}>
      <Image src={`images/${nft.image}`} />
    </GridItem>
  )
}
