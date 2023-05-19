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
      variant="elevated"
      display="block"
      bg={`${bg}.100`}
    >
      <CardBody py={1} pb={0} px={0} mx={0}>
        <VStack spacing={0}>
          <Box
            bg={`${bg}.50`}
            width="xs"
            roundedTop={6}
            px={4}
            py={0}
            mx={1}
            mt={0}
          >
            <Box ml={'-0.75em'} mt={'0.25em'} mb={'-0.25em'} w="100%">
              <RiDoubleQuotesL />
            </Box>
            <Box p={'0.5em'} fontSize="xs" display="block">
              {linebreakToParagraphs(text)}
            </Box>
            <Box mt={'-0.5em'} mb={'0.5em'} mr={'-0.75em'} textAlign={'right'}>
              <RiDoubleQuotesR />
            </Box>
          </Box>
          {image && (
            <Center width="xs" bg={`blackAlpha.400`} py={3} px={5} mx={1}>
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
          <Box display="block" p={[0, 1]}>
            on WarpCast
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

  return (
    <>
      <VStack display="flex" flexDirection="column" spacing={4}>
        <Box
          as="h2"
          bg={colorMode === 'dark' ? `${colors[0]}.200` : `${colors[1]}.200`}
          width="xs"
          textAlign="center"
          rounded={12}
          p={2}
          borderBottom={`1px solid ${
            colorMode === 'dark' ? '#ffffff33' : '#00000033'
          }`}
        >
          Recent casts
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
							alt={''}
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
