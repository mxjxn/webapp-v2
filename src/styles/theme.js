import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  styles: {
    global: {
    },
  },
  textStyles: {
    xs: {
      fontSize: '10px',
    },
  },
  colors: {
    black: '#333333',
    white: '#e7e7e7',
    purp: {
      50: '#ffe6fd',
      100: '#f8b8fc',
      200: '#ec8af5',
      300: '#de5cf0',
      400: '#ce2eeb',
      500: '#ae15d1',
      600: '#830fa3',
      700: '#660976',
      800: '#420448',
      900: '#1b001b',
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'bold',
      },
      variants: {
        'with-shadow': {
          boxShadow: '0 0 2px 2px #efdfde',
        },
      },
    },
  },
})

export default theme
