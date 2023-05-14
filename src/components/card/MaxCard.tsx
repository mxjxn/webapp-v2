import React from 'react'
import { LinkComponent } from 'components/layout/LinkComponent'
import {
  Center,
  Heading,
  Text,
  Box,
  useTheme,
  useColorMode,
} from '@chakra-ui/react'

export function MaxCard(): any {
  const { theme } = useTheme()
  const { colorMode } = useColorMode()

  return (
    <Center>
      <Box
        boxShadow="md"
        backgroundColor={
          colorMode === 'light' ? `${theme}.100` : `${theme}.900`
        }
        color={colorMode === 'light' ? `${theme}.900` : `${theme}.300`}
        borderRadius="md"
        px={16}
        py={8}
        maxW="sm"
        textAlign="left"
      >
        <Heading as="h3" size="md" mb={2}>
          Max Jackson
        </Heading>
        <Text mb={2}>Artist and Web Developer</Text>
        <LinkComponent href="https://twitter.com/mxjxn">Twitter</LinkComponent>
        <LinkComponent href="https://fcast.me/mxjxn">Farcaster</LinkComponent>
      </Box>
    </Center>
  )
}
