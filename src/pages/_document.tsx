import { ColorModeScript } from '@chakra-ui/react'
import { Html, Head, Main, NextScript } from 'next/document'
import { THEME_INITIAL_COLOR_MODE } from 'utils/config'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <ColorModeScript initialColorMode={THEME_INITIAL_COLOR_MODE} />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
