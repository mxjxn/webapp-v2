import React, { useState } from 'react'
import { motion } from 'framer-motion'
import _ from 'lodash'
import {
  VStack,
  Grid,
  Text,
  Box,
  useTheme,
  useColorMode,
  GridItem,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
  Flex,
} from '@chakra-ui/react'
import type { NFTMetadata } from 'data/mxjxn-artworks'

type NFTGalleryProps = {
  title: string
  description?: string
  nfts: NFTMetadata[]
  collectionName: string
  rowLength?: number
  showAll?: boolean
}

export default function NFTGallery({
  nfts,
  collectionName,
  title,
  description,
  rowLength = 4,
  showAll = true,
}: NFTGalleryProps) {
  const { colorMode } = useColorMode()
  const { onOpen, isOpen, onClose } = useDisclosure()
  const [selectedImage, setSelectedImage] = useState(null)
  const [hidden, setHidden] = useState(!showAll)

  // if collectionName exists, filter the results by nft.attributes where trait_type: "Collection" and value = collectionName
  const filteredList = _.filter(nfts, (n: any, i: number) => {
    let val
    val = _.findIndex(n.attributes, {
      trait_type: 'Collection',
      value: collectionName,
    })
    return val > 0
  })
  const nftList = collectionName ? filteredList : nfts
  const collapsedList = _.slice(nftList, 0, rowLength)
  const displayList = showAll ? nftList : collapsedList

  // console.log({ })

  return (
    <Box
			bg="blue"
		>
      <VStack m={'0.2em'} ml={'.41em'}>
        <Box w="100%">
          <Text as={'p'}>
            <Box
              as="span"
              display={'inline-block'}
              transform={'skew(-20deg)'}
              pt={'.2em'}
              pb={'.1em'}
              px={'0.38em'}
              pl={'3em'}
              ml={'-3em'}
              mr={'.8em'}
              bg={colorMode === 'dark' ? '#992288' : '#ffaa99'}
              pos={'relative'}
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
                {title}
              </Box>
            </Box>
            <Text as={'span'}>{description}</Text>
          </Text>

          <Flex
            width={'100%'}
            flexWrap={'wrap'}
            flexDir={'row'}
            justifyContent={'space-between'}
            pt={'1em'}
          >
            {displayList.length &&
              _.map(displayList, (nft, i) => {
                return (
                  <NFTGridItem
                    onOpen={() => {
                      setSelectedImage(nft.image)
                      onOpen()
                    }}
                    nft={nft}
                  />
                )
              })}
          </Flex>
        </Box>
      </VStack>

      <Modal isOpen={isOpen} onClose={onClose} size="full">
        <ModalOverlay bgColor="gray.900" />
        <ModalContent
          as={motion.div}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          mx="auto"
          my="auto"
          maxW="90%"
          maxH="90%"
          boxShadow="2xl"
          borderRadius="md"
          bgColor="transparent"
        >
          {selectedImage && (
            <Image
              alt=""
              src={'/images/' + selectedImage}
              height="90vh"
              width="90vw"
              margin="auto"
              objectFit="contain"
              onClick={() => {
                setSelectedImage(null)
                onClose()
              }}
              cursor="zoom-out"
            />
          )}
        </ModalContent>
      </Modal>
    </Box>
  )
}

const NFTGridItem = ({ nft, onOpen }: {nft:NFTMetadata, onOpen:Function}) => {
  return (
    <Box
      p={'.3em'}
      py={'.6em'}
      onClick={() => {
        onOpen()
      }}
    >
      <Box p={'0.1em'}>
        <Image
					alt={`Title: ${nft.name}`}
          width={{
						base: '105px',
						sm: '130px',
						md: '145px',
						lg: '185px',
					}}
          height={'auto'}
          src={`images/${nft.image}`}
        />
      </Box>
			<Box
			>
				{nft.listing_id}
			</Box>
    </Box>
  )
}
