import React from 'react'
import _ from 'lodash'
import { Grid, useColorMode } from '@chakra-ui/react'

import { TopRow } from 'components/Hero/styled'
import { T, TAnim, U, BAnim } from 'components/Text'

function Hello() {
  return (
    <>
      <TopRow>
        <Grid display={{ base: 'block' }} p="0" m="0">
          <TAnim fontSize={'2.3em'}>Hi,</TAnim>
          <TAnim delay={0.5} fontSize={'1.5em'}>
            I&apos;m
          </TAnim>
          <TAnim
            delay={0.75}
            fontWeight={'900'}
            fontSize={'2.5em'}
            fontStyle={'italic'}
          >
            <U>Max Jackson</U>.
          </TAnim>
        </Grid>
      </TopRow>
      <Grid
        p={1}
        gridColumn={{
          base: '1 / 8',
        }}
        gridRow="2"
        textAlign="center"
      >
        <BAnim delay={1.3} bg={'transparent'}>
          <T>I&apos;m an</T>
          <T color={'red.400'}>Artist and Developer</T>
          <T>based in Boston.</T>
        </BAnim>
      </Grid>
    </>
  )
}

function Hero() {
  return <Hello />
}

export default Hero
