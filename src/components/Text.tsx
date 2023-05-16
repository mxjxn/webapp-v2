import React, { PropsWithChildren } from 'react'
import _ from 'lodash'
import {
  Text,
  useColorMode,
  useColorModeValue,
  shouldForwardProp,
  chakra,
  Box,
  TextProps,
  BoxProps,
} from '@chakra-ui/react'
import { motion, isValidMotionProp, MotionProps } from 'framer-motion'

const U: React.FC<TextProps> = ({ children, ...props }) => {
  const { colorMode } = useColorMode()
  return (
    <Text
      as={'span'}
      position={'relative'}
      _after={{
        content: "''",
        width: 'calc(100% + .2em)',
        height: '2px',
        position: 'absolute',
        bottom: 1,
        left: '-0.1em',
        bg: colorMode == 'dark' ? 'whatsapp.400' : 'red.400',
        zIndex: -1,
      }}
      {...props}
    >
      {children}
    </Text>
  )
}

type Merge<P, T> = Omit<P, keyof T> & T

// type ChakraProps = Omit<MotionProps, keyof TextProps> & TextProps & { transition?: any, delay?: number }


const TAnim: React.FC<TextProps & {delay?: number}> = ({ children, fontSize, ...props }) => {
  return (
    <Box
			as={motion.span}
      position={'relative'}
      ml={2}
      initial={
        {
          opacity: 0,
          marginBottom: '-1em',
        } as MotionProps['initial']
      }
      animate={
        {
          opacity: 1,
          marginBottom: '0',
        } as MotionProps['animate']
      }
      transition={'0.8 linear'} /*duration: 0.8, delay: _.get(props, 'delay', 0),*/
			fontSize={fontSize}
      {...props}
    >
      {children}
    </Box>
  )
}
const BAnim: React.FC<TextProps & {delay?: number}> = ({
  children,
  ...props
}: React.PropsWithChildren) => {
  const colorModeValue = useColorModeValue('blackAlpha.100', 'whiteAlpha.100')
  return (
    <Box
			as={motion.div}
      p={2}
      borderRadius={30}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={"0.8 linear"}
      bg={_.get(props, 'bg', colorModeValue)}
      {...props}
    >
      <Box position={'relative'} top={'50%'} transform={'translate(0,-50%)'}>
        {children}
      </Box>
    </Box>
  )
}

const T: React.FC<TextProps> = ({
  children,
  ...props
}: React.PropsWithChildren) => (
  <Text ml={2} as={'span'} {...props}>
    {children}
  </Text>
)

const Title: React.FC<TextProps> = ({ children, ...props }) => (
	<Text
		fontSize={'2em'}
		pl={'.1em'}
		pb={'.2em'}
		{...props}
	>
	{children}
	</Text>
)

export { Title, T, TAnim, BAnim, U }
