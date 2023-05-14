import {
  Box,
  Flex,
  SimpleGrid,
  VStack,
  useColorModeValue,
  Input,
  Button,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react'
import React, { useState, useEffect, useRef } from 'react'
import {
  BotMessage,
  UserMessage,
  TypingIndicator,
  Message,
} from 'components/chat/Messages'

import axios from 'axios'
import { THEME_COLOR_SCHEME as scheme } from 'utils/config'

import _ from 'lodash'

const botName = 'mxjxn-bot'

type MessageType = 'bot' | 'user'

interface ConversationMessage {
  type: MessageType
  message: Message
}

const ChatUI = () => {
  const [userInput, setUserInput] = useState('')
  const [conversation, setConversation] = useState<ConversationMessage[]>([])
  const chatContainerRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const backgroundColor = useColorModeValue('blue.100', 'blue.900')
  const textColor = useColorModeValue('gray.900', 'gray.300')

  const [botTyping, setBotTyping] = useState(false)

  useEffect(() => {
    // Focus the input field whenever the conversation changes
    inputRef.current?.focus()
    chatContainerRef.current?.scrollIntoView({ behavior: 'auto' })
    console.log({ conversation })
  }, [conversation])

  const stringConvo = (convo: ConversationMessage[]) =>
    _.reduce(
      convo,
      (a, c) => {
        console.log({ c })
        a = a.concat(`\n${c.type}: ${c.message.content}\n`)
        return a
      },
      ''
    )

  // if user pressed enter and message isnt empty, send message
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && userInput) {
      handleSendMessage()
    }
  }

  const handleSendMessage = async () => {
    if (!userInput) return // Ignore empty messages

    const newMessage: Message = {
      id: Date.now().toString(),
      author: 'user',
      content: userInput,
      createdAt: new Date(),
    }

    setUserInput('')
    setConversation((convo) =>
      convo.concat({ type: 'user', message: newMessage })
    )

    setBotTyping(true) // Set the bot to typing mode
    try {
      const history = stringConvo(conversation)
      const response = await axios.post('/api/bot', {
        message: userInput,
        history,
      })
      const botMessage: Message = {
        id: Date.now().toString(),
        author: botName,
        content: response.data.message,
        createdAt: new Date(),
      }
      setConversation((convo) =>
        convo.concat({ type: 'bot', message: botMessage })
      )
    } catch (error) {
      console.log('Error sending message:', error)
    } finally {
      setBotTyping(false) // Set the bot to not typing mode
    }
  }

  return (
    <Box
      backgroundColor={backgroundColor}
      color={textColor}
      maxW="lg"
      h="60vh"
      mx="auto"
      mt={10}
      p={2}
      boxShadow="md"
      borderRadius="md"
    >
      <VStack spacing={2} align="stretch" h="100%">
        <Flex
          direction="column"
          flex="1"
          overflowY="auto"
          pr={2}
          sx={{
            /* change the scrollbar handle color */
            '&::-webkit-scrollbar-thumb': {
              bg: `${scheme}.200`,
            },
          }}
        >
          <SimpleGrid p={4} columns={1} spacing={2}>
            {conversation.map((entry) =>
              entry.type === 'bot' ? (
                <BotMessage key={entry.message.id} message={entry.message} />
              ) : (
                <UserMessage key={entry.message.id} message={entry.message} />
              )
            )}
          </SimpleGrid>
          <div ref={chatContainerRef} />
        </Flex>
        {botTyping ? <TypingIndicator /> : <Box p="3" />}

        <InputGroup mt={4}>
          <Input
            variant="filled"
            ref={inputRef}
            placeholder="Type your message here..."
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleSendMessage}>
              Send
            </Button>
          </InputRightElement>
        </InputGroup>
      </VStack>
    </Box>
  )
}

export default ChatUI
