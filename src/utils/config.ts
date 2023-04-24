import { ThemingProps } from '@chakra-ui/react'
import { mainnet, sepolia, polygon, optimism, arbitrum } from '@wagmi/core/chains'
import styles from '../styles'

export const SITE_NAME = 'MXJXN'
export const SITE_DESCRIPTION = 'MXJXN.xyz'
export const SITE_URL = 'https://mxjxnxyz.vercel.app'

export const THEME_COLOR_SCHEME: ThemingProps['colorScheme'] = 'teal'
export const THEME_CONFIG = {
  initialColorMode: styles.config.initialColorMode,
  ...styles,
}

export const SOCIAL_TWITTER = 'mxjxn'
export const SOCIAL_GITHUB = 'mxjxn/mxjxnxyz-v2'

export const ETH_CHAINS = [mainnet, sepolia, polygon, optimism, arbitrum]

export const SERVER_SESSION_SETTINGS = {
  cookieName: SITE_NAME,
  password: process.env.SESSION_PASSWORD ?? 'UPDATE_TO_complex_password_at_least_32_characters_long',
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
  },
}
