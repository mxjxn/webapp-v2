import React from 'react'
import { Badge, Flex, Text, useColorModeValue } from '@chakra-ui/react'
import { useNetwork, useAccount } from 'wagmi'
import { useLoggedIn } from 'hooks/useLoggedIn'
import { GetNetworkColor } from 'utils/network'
import { THEME_COLOR_SCHEME } from 'utils/config'
import _ from 'lodash'

export function NetworkStatus() {
  const network = useNetwork()
  const { address } = useAccount()
  const { loggedInAddress } = useLoggedIn()
  const bgColor = useColorModeValue(
    `${THEME_COLOR_SCHEME}.50`,
    `${THEME_COLOR_SCHEME}.800`
  )
  const textColor = useColorModeValue(
    `${THEME_COLOR_SCHEME}.900`,
    `${THEME_COLOR_SCHEME}.50`
  )
  const renderText = () => {
    console.log({ address, loggedInAddress })
    if (address && _.isEmpty(loggedInAddress)) {
      return (
        <Badge colorScheme="green" fontSize="2xs" ml={1}>
          Connected
        </Badge>
      )
    } else if (address && loggedInAddress) {
      return (
        <Badge colorScheme="green" fontSize="2xs" ml={1}>
          Logged in
        </Badge>
      )
    } else {
      return 'Not Connected'
    }
  }

  return (
    <Flex alignItems="center" gap={2} zIndex={2} bgColor={bgColor} p={1}>
      <Text color={textColor} fontSize="xs">
        {renderText()}
      </Text>
      <Badge
        colorScheme={GetNetworkColor(network.chain?.network)}
        fontSize="2xs"
      >
        {network.chain?.name ?? 'Ethereum'}
      </Badge>
    </Flex>
  )
}
