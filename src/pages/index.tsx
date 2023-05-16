import React, { useEffect } from 'react'
import _ from 'lodash'
import artworks, { NFTMetadata } from 'data/mxjxn-artworks'

// imported components
import { Box, Flex, Text, useColorMode } from '@chakra-ui/react'
// my components
import { Head } from 'components/layout/Head'
import { MainGrid, TopRow } from 'components/Hero/styled'
import { Title, TAnim, U } from 'components/Text'
import NFTGallery from 'components/gallery/NFTGallery'
// data
import { getCleanFarcasterPosts } from 'lib/getCleanFarcasterPosts'

import { josefin } from 'utils/loadFonts'
import FarcasterPosts, { FarcasterPost } from 'components/FarcasterPosts'

interface HomeProps {
  nfts: NFTMetadata[]
  posts: FarcasterPost[]
}
export default function Home({ nfts, posts }: HomeProps) {
	const { colorMode } = useColorMode();
  console.log({
    nfts,
    posts,
  })
  return (
    <>
      <Head />
      <main className={josefin.className}>

        <Box
					position={'relative'}
					maxW={'100%'}
					margin={'auto'}
					p={'1em'}
				>
					<Text
						as="div"
						px={'2em'}
						pt={'2em'}
						bg={`green.${colorMode == 'dark' ? "800" : 200}`}
					>
						<TAnim fontSize={'2.3em'}>Hi,</TAnim>
						<TAnim delay={0.5} fontSize={'1.5em'}>
						{' '}
						I'm{' '}
						</TAnim>
						<TAnim
						delay={0.75}
						fontWeight={'900'}
						fontSize={'2.5em'}
						fontStyle={'italic'}
						>
						<U>Max Jackson</U>.
						</TAnim>
						<Box py={'3em'}>
							I'm an artist and web developer from Boston. I'm especially passionate about Web3 and AI.
						</Box>
					</Text>
          <Flex
						width={'100%'}
            px={'1em'}
            gap={'1em'}
            justifyContent={'flex-start'}
            flexDir={{ base: 'row' }}
          >
            <Box
							px={'3em'}
							pt={'2em'}
							pb={7}
						>
              <Flex
								flexDir={'column'}
							>
                <Box>
                  <Title letterSpacing={'1em'}>Cryptoart</Title>
                </Box>
                <Box>
                  <NFTGallery
                    title="Ethereal Realms"
                    showAll={false}
                    description={`are pure AI artworks that dare you to enter into the awe inspiring world of AI.`}
                    collectionName="Ethereal Realms"
                    nfts={nfts}
                  />
                </Box>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </main>
    </>
  )
}

export async function getStaticProps() {
  const cleanPosts = await getCleanFarcasterPosts()
  const nfts = artworks

  return {
    props: {
      nfts,
      posts: cleanPosts,
    },
    revalidate: 120,
  }
}
