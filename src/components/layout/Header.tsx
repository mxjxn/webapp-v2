import React from 'react'
import { Flex, useColorModeValue, Spacer, Heading } from '@chakra-ui/react'
import { SITE_NAME } from 'utils/config'
import { LinkComponent } from './LinkComponent'
import { ThemeSwitcher } from './ThemeSwitcher'
import { ConnectKitButton } from 'connectkit'
import { NetworkStatus } from './NetworkStatus'
import { THEME_COLOR_SCHEME } from 'utils/config'

interface Props {
  className?: string
}

export function Header(props: Props) {
  const className = props.className ?? ''

  // affix this header to the top even when scrolling

  return (
    <Flex
      as="header"
      position="sticky"
      top={0}
      zIndex={1}
      className={className}
      bg={useColorModeValue(`${THEME_COLOR_SCHEME}.100`, `${THEME_COLOR_SCHEME}.900`)}
      px={4}
      py={2}
      mb={8}
      alignItems="center">
      <LinkComponent href="/">
        <Heading as="h1" size="md">
          {SITE_NAME}
        </Heading>
      </LinkComponent>

      <Spacer />

      <Flex alignItems="center" gap={4}>
        <NetworkStatus />
        <ConnectKitButton theme="retro" />
        <ThemeSwitcher />
      </Flex>
    </Flex>
  )
}
