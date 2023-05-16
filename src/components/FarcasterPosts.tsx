import { useState } from 'react'
import {
  Box,
  Text,
  Card,
  CardBody,
  VStack,
  Center,
  useColorMode,
  CardFooter,
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
  Image,
  CardHeader,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import _ from 'lodash'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri'

export type Img = {
  type: string
  url: string
  sourceUrl: string
}

export type FarcasterPost = {
  text: string
  image: string
  reactions: { count: number }
  replies: { count: number }
  timestamp: Date
  hash: string
}

export type FarcasterPostsProps = {
  posts?: FarcasterPost[]
}

export type FarcasterPostProps = {
  post: FarcasterPost
}

// styles
// colormode
const colors = ['whiteAlpha', 'blackAlpha']

const MotionBox = motion(Box)

const linebreakToParagraphs = (text: string) => {
  const pps = text.split('\n')
  return (
    <Box>
      {_.map(pps, (p) => (
        <Text as="p" key={String(p + Math.floor(Math.random() * 1000))} my={2}>
          {p}
        </Text>
      ))}
    </Box>
  )
}

function FarcasterCard({ text, image, hash, timestamp, onImageClick }: any) {
  const { colorMode } = useColorMode()
  const bg = colorMode == 'dark' ? colors[0] : colors[1]
  return (
    <Card
      borderBottom={`1px solid ${
        colorMode === 'dark' ? '#ffffff33' : '#00000033'
      }`}
			minW={'350px'}
      variant="elevated"
      display="block"
      bg={`${bg}.100`}
    >
      <CardBody py={1} pb={0} px={0} mx={0}>

        <VStack alignItems={'stretch'} spacing={0}>
				
          <Box bg={`${bg}.200`} roundedTop={6} px={4} py={0} mx={1} mt={0}>
            {image && (
              <Center py={3} px={5} mx={1}>
                <MotionBox
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Image
                    alt={text}
                    src={image}
                    onClick={onImageClick}
                    cursor="pointer"
                    height={200}
                    width={'auto'}
                  />
                </MotionBox>
              </Center>
            )}
          </Box>
          <Box roundedTop={6} px={4} py={0} mx={1} mt={0}>
            <Box
							mx={'1.5em'} 
							px={'1.5em'}
							position={'absolute'}
							ml={'-.7em'}
							mt={'.2em'}
						>
              <RiDoubleQuotesL />
            </Box>
            <Box
							mx={'1.5em'} 
							px={'1.5em'}
							pb={0}
							fontSize="xs"
							display="block"
						>
              {linebreakToParagraphs(text)}
            </Box>
            <Box
							mt={'-1em'}
							mr={'0em'}
							mx={'1.5em'} 
							position={'absolute'}
							right="0px"
						>
              <RiDoubleQuotesR />
            </Box>
          </Box>
        </VStack>
      </CardBody>

      <CardFooter
        py={0}
        px={3}
        m={0}
        mb={1}
        mx={1}
        roundedBottom={4}
        bg={`${bg}.200`}
        color={colorMode === 'dark' ? 'gray.400' : 'gray.600'}
      >
        {/* name / avatar / datetime */}
        {/* 💙 / 💬 */}
        <Box
          p={0}
          pl={0}
          pb={0}
          roundedTop={4}
          m={0}
          pr={5}
          fontSize="xs"
          display="flex"
          alignItems="baseline"
          flexDirection="row"
          fontStyle="italic"
        >
          <Box pr={2}>
            <ArrowForwardIcon />
          </Box>
          <Box display="block" as="u">
            <a href="https://warpcast.com/mxjxn">mxjxn</a>
          </Box>
          <Box display="block" py={0} px={2}>
            {' '}
            on WarpCast{' '}
          </Box>
          <Box display="block" as="u">
            <a href={`https://warpcast.com/mxjxn/${hash}`}>
              {new Date(timestamp).toLocaleDateString('en-us', {
                weekday: 'short',
                month: 'short',
                day: 'numeric',
                hour12: true,
                hour: '2-digit',
                minute: '2-digit',
              })}
            </a>
          </Box>
        </Box>
      </CardFooter>
    </Card>
  )
}

// : React.FC<FarcasterPostsProps>
function FarcasterPosts({ posts }: FarcasterPostsProps) {
  const [selectedImage, setSelectedImage] = useState(null)
  const { onOpen, isOpen, onClose } = useDisclosure()
  const { colorMode } = useColorMode()

	const farcasterIconSrc = `/images/fc-arch-${colorMode == 'dark' ? 'dark' : 'light'}.png`

  return (
    <>
      <VStack
        display="flex"
        alignItems={'stretch'}
        flexDirection="column"
        spacing={4}
      >
        <Box
          bg={colorMode === 'dark' ? `${colors[0]}.200` : `${colors[1]}.200`}
          rounded={12}
          borderBottom={`1px solid ${
            colorMode === 'dark' ? '#ffffff33' : '#00000033'
          }`}
					pt={'.5em'}
					pb={'.2em'}
        >
					<Image
						alt={'Farcaster logo'}
						pos={'absolute'}
						mt={'-.75em'}
						ml={'-.3em'}
						height={'2.75em'}
						width={'auto'}
						src={farcasterIconSrc}
					/>
          <Text
						as="h2"
						display="inline"
						pl={'3em'}
						letterSpacing={'0.2em'}
					>
						Recent casts
					</Text>
        </Box>

        {posts &&
          posts.map((post: any) => (
            <FarcasterCard
              text={post.text}
              image={post.image}
              key={post.text}
              hash={post.hash}
              timestamp={post.timestamp}
              reactions={post.reactions}
              replies={post.replies}
              onImageClick={() => {
                setSelectedImage(post.image)
                onOpen()
              }}
            />
          ))}
      </VStack>
      <Modal isOpen={isOpen} onClose={onClose} size="full">
        <ModalOverlay bgColor="gray.900" />
        <ModalContent
          as={motion.div}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          mx="auto"
          my="auto"
          maxW="90%"
          maxH="90%"
          boxShadow="2xl"
          borderRadius="md"
          bgColor="transparent"
        >
          {selectedImage && (
            <Image
              src={selectedImage}
              height="90vh"
              width="90vw"
              margin="auto"
              objectFit="contain"
              onClick={() => {
                setSelectedImage(null)
                onClose()
              }}
              cursor="zoom-out"
            />
          )}
        </ModalContent>
      </Modal>
    </>
  )
}

export default FarcasterPosts
