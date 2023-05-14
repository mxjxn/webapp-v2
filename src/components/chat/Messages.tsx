import { HStack, Box, Text, useColorMode } from '@chakra-ui/react'

export interface Message {
  id: string
  author: string
  content: string
  createdAt: Date
}

export const BotMessage = ({ message }: { message: Message }) => {
  const { colorMode } = useColorMode()
  return (
    <HStack>
      <Box
        borderRadius="md"
        py={3}
        px={2}
        border="1px solid #77777744"
        bg={colorMode === 'dark' ? 'whatsapp.700' : 'whatsapp.200'}
        color={colorMode === 'dark' ? 'gray.100' : 'gray.900'}
        maxW="70%"
      >
        <Text fontSize="xs">{message.content}</Text>
      </Box>
    </HStack>
  )
}

export const UserMessage = ({ message }: { message: Message }) => {
  const { colorMode } = useColorMode()
  return (
    <HStack justifyContent="flex-end">
      <Box
        borderRadius="md"
        p={3}
        bg={colorMode === 'dark' ? 'whiteAlpha.700' : 'blackAlpha:700'}
        color={colorMode === 'dark' ? 'blackAlpha.800' : 'whiteAlpha:800'}
        maxW="70%"
      >
        <Text fontSize="xs">{message.content}</Text>
      </Box>
    </HStack>
  )
}

export const TypingIndicator = () => (
  <HStack>
    <Box borderRadius="md" p={3} as="i" maxW="70%">
      <Text>Bot is typing...</Text>
    </Box>
  </HStack>
)
