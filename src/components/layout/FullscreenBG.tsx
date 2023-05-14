import { useColorMode, Box } from '@chakra-ui/react'

function FullScreenOverlay({ children }: any) {
  const { colorMode } = useColorMode()

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      bottom={0}
      bgImg="bg.jpg"
      bgSize="cover"
      bgPosition="center"
      bgBlendMode="multiply"
      zIndex={-1}
    >
      <Box
        bg={`${colorMode === 'light' ? 'white' : 'gray.900'}`}
        opacity={0.8}
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
      />
      <Box position="relative" zIndex={1} p={4}>
        {children}
      </Box>
    </Box>
  )
}

export default FullScreenOverlay
