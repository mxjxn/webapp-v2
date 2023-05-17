import { ColorModeScript } from '@chakra-ui/react'
import { Html, Head, Main, NextScript } from 'next/document'
import { THEME_INITIAL_COLOR_MODE } from 'utils/config'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
				<script src="https://connect.manifoldxyz.dev/2.2.4/connect.umd.min.js" async></script>

				<script src="https://identity.manifoldxyz.dev/2.1.0/walletIdentity.umd.min.js" async></script>

				<link rel="stylesheet" href="https://identity.manifoldxyz.dev/2.1.0/walletIdentity.css" />
				<link rel="stylesheet" href="https://connect.manifoldxyz.dev/2.2.4/connect.css" />
				<link rel="stylesheet" href="https://connect.manifoldxyz.dev/2.2.4/connect.manifold-light.css" />
				<link rel="stylesheet" href="https://connect.manifoldxyz.dev/2.2.4/connect.manifold-dark.css" />

      </Head>
      <body>
        <ColorModeScript initialColorMode={THEME_INITIAL_COLOR_MODE} />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
