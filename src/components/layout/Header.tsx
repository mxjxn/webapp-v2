import React from 'react'
import {
  Text,
  Button,
  Box,
  Flex,
  useColorModeValue,
  Spacer,
  Heading,
} from '@chakra-ui/react'
import { WavyBoi } from 'components/elements/flashy'
import { titanOne } from 'utils/loadFonts'
import { LoginButton } from './LoginButton'
import { SITE_NAME } from 'utils/config'
import { LinkComponent } from './LinkComponent'
import { ThemeSwitcher } from './ThemeSwitcher'
import { ConnectKitButton } from 'connectkit'
import { THEME_COLOR_SCHEME } from 'utils/config'
import localFont from 'next/font/local'

const font = localFont({ src: '../../pages/fonts/boon-700.otf' })

interface Props {
  className?: string
}

export function Header(props: Props) {
  const className = props.className ?? ''

  return (
    <Flex
      position="sticky"
      top={0}
      zIndex={1}
      className={className}
      px={{
        base: '2vw',
      }}
      py={2}
      textAlign="center"
    >
      <Box
        display="flex"
        flexFlow="row"
        alignItems="center"
        justifyContent="space-between"
        marginX="auto"
        width={{
          base: '100vw',
        }}
        maxH={'100vh'}
        maxW={'7xl'}
      >
        <LinkComponent href="/">
          {/* SITE_NAME */}

          <Box fontSize={'2xl'}>
            <Box
              className={titanOne.className}
              letterSpacing={'wide'}
              as={'span'}
              position={'relative'}
              pr={3}
            >
              <WavyBoi as={'span'} display={'inline-block'} hue={181} span={50}>
                MXJXN
              </WavyBoi>
              <WavyBoi fontSize={'0.75em'} as={'span'} hue={110} span={80}>
                XYZ
              </WavyBoi>
            </Box>
          </Box>
        </LinkComponent>

        <Spacer />

        <Flex alignItems="center" gap={4}>
          <ConnectKitButton theme="web95" />
          <LoginButton />
          <ThemeSwitcher />
        </Flex>
      </Box>
    </Flex>
  )
}
