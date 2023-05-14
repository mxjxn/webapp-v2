import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Box, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

interface Props {
  className?: string
}

export function ThemeSwitcher(props: Props) {
  const className = props.className ?? ''
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div
        style={{ display: 'inline-block' }}
        key={useColorModeValue('light', 'dark')}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
        className={className}
        onClick={toggleColorMode}
        whileHover={{ cursor: 'pointer' }}
      >
        {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
      </motion.div>
    </AnimatePresence>
  )
}
