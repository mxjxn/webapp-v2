import React, { useEffect } from 'react'
import _ from 'lodash'
import artworks, { NFTMetadata } from 'data/mxjxn-artworks'

// imported components
import { Box, Grid, GridItem } from '@chakra-ui/react'
// my components
import { Head } from 'components/layout/Head'
import { MainGrid, TopRow } from 'components/Hero/styled'
import { TAnim, U } from 'components/Text'
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
  console.log({
    nfts,
    posts,
  })
  return (
    <>
      <Head />
      <main className={josefin.className}>
        <Box position={'relative'} margin={'auto'} p={'1em'}>
          <MainGrid>
            <GridItem
              pt={14}
              pb={7}
              colSpan={8}
              textAlign={{
                base: 'center',
              }}
            >
              <TAnim fontSize={'2.3em'}>Hi,</TAnim>
              <TAnim delay={0.5} fontSize={'1.5em'}>
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
            </GridItem>
            <GridItem
              colSpan={{
                base: 8,
                lg: 5,
              }}
            >
              <NFTGallery collectionName="Ethereal Realms" nfts={nfts} />
            </GridItem>
            <GridItem
              colSpan={{
                base: 8,
                lg: 3,
              }}
            >
              <FarcasterPosts posts={posts} />
            </GridItem>
          </MainGrid>
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
