'use client'
import { Box, Flex, SimpleGrid, VStack } from '@chakra-ui/react'
import models from '../../utils/openai-models'
import _ from 'lodash'

export default function ModelSelector() {
  // this function should display the list of models.
  return (
    <VStack align="left" fontSize="2xs">
      <Box
        maxW="xl"
        h="60vh"
        mx="auto"
        mt={10}
        p={2}
        boxShadow="md"
        borderRadius="md"
      >
        <VStack spacing={2} align="stretch" h="100%">
          <Flex direction="column" flex="1" overflowY="auto" pr={2}>
            <SimpleGrid p={4} columns={1} spacing={2}>
              {_.map(models.data, (m) => (
                <Box key={m.id}>{m.id}</Box>
              ))}
            </SimpleGrid>
          </Flex>
        </VStack>
      </Box>
    </VStack>
  )
}
