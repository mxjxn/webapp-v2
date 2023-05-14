import React, { useState, useEffect } from 'react'
import { Flex, Image, TextProps } from '@chakra-ui/react'

interface Props extends TextProps {
  images: any[]
  duration: number
}

const Slider: React.FC<Props> = ({ images, duration = 5000 }) => {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, duration)

    return () => clearInterval(interval)
  }, [duration, images.length])

  return (
    <Flex flex={1} alignItems={'start'} align={'center'} position={'relative'}>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image}
          alt={`Slide ${index}`}
          position="absolute"
          maxH={'100vh'}
          top="0"
          left="0"
          objectFit="cover"
          opacity={index === current ? 1 : 0}
          transition="opacity 2s"
        />
      ))}
    </Flex>
  )
}

export default Slider
