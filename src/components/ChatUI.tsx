import {
  Box,
  VStack,
  HStack,
  Text,
  useColorMode,
  Input,
  Button,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react'
import { FC, useState } from 'react'

interface Msg {
  message: string
}

const BotMessage = ({ message }: Msg) => (
  <HStack>
    <Box borderRadius="md" p={3} border="1px solid #77777777" maxW="70%">
      <Text>{message}</Text>
    </Box>
  </HStack>
)

const UserMessage = ({ message }: Msg) => (
  <HStack justifyContent="flex-end">
    <Text maxW="70%">{message}</Text>
  </HStack>
)

type MessageType = 'bot' | 'user'

interface Message {
  type: MessageType
  message: string
}

const ChatUI: FC = () => {
  const { colorMode } = useColorMode()
  const [userInput, setUserInput] = useState('')

  const botMessages = [
    'Hello! How can I help you today?',
    'Sure, I can help with that.',
    'Thank you for using our services!',
  ]

  const userMessages = [
    'Hi, I need help with my account.',
    'Great, thank you!',
    "You're welcome!",
  ]

  // Create a single array of messages with the correct order
  const convo: Message[] = botMessages.reduce(
    (result: Message[], botMessage, index) => {
      const userMessage = userMessages[index] || ''
      return result.concat([
        { type: 'bot', message: botMessage },
        { type: 'user', message: userMessage },
      ])
    },
    []
  )

  const handleSendMessage = () => {
    // Logic to handle sending the user's message
    console.log('User input:', userInput)
    setUserInput('')
  }

  return (
    <Box
      backgroundColor={colorMode === 'light' ? 'gray.100' : 'gray.900'}
      color={colorMode === 'light' ? 'gray.900' : 'gray.300'}
      maxW="md"
      mx="auto"
      mt={10}
      p={6}
      boxShadow="md"
      borderRadius="md"
    >
      <VStack spacing={4} align="stretch">
        {convo.map((entry, index) =>
          entry.type === 'bot' ? (
            <BotMessage key={`bot-${index}`} message={entry.message} />
          ) : (
            <UserMessage key={`user-${index}`} message={entry.message} />
          )
        )}
      </VStack>
      <InputGroup mt={4}>
        <Input
          variant="filled"
          placeholder="Type your message here..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <InputRightElement width="4.5rem">
          <Button h="1.75rem" size="sm" onClick={handleSendMessage}>
            Send
          </Button>
        </InputRightElement>
      </InputGroup>
    </Box>
  )
}

export default ChatUI
