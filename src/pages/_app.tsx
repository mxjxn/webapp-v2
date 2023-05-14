import type { AppProps } from 'next/app'
import { Layout } from 'components/layout'
import { Web3Provider } from 'providers/Web3'
import { ChakraProvider } from 'providers/Chakra'
import { useIsMounted } from 'hooks/useIsMounted'
import { LoggedInProvider } from 'hooks/useLoggedIn'
import { Seo } from 'components/layout/Seo'
import 'styles/globals.css'
import 'utils/loadFonts'

export default function App({ Component, pageProps }: AppProps) {
  const isMounted = useIsMounted()

  return (
    <>
      <ChakraProvider>
        <Seo />
        <Web3Provider>
          <LoggedInProvider>
            {isMounted && (
              <Layout>
                <Component {...pageProps} />
              </Layout>
            )}
          </LoggedInProvider>
        </Web3Provider>
      </ChakraProvider>
    </>
  )
}
