'use client'
import { Web3Provider } from 'providers/Web3'
import { ChakraProvider } from 'providers/Chakra'
import { Seo } from 'components/layout/Seo'
import { useIsMounted } from 'hooks/useIsMounted'
import { Layout } from 'components/layout'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const isMounted = useIsMounted()
  return (
    <html lang="en">
      <body>
        <Seo />
        <ChakraProvider>
          <Web3Provider>{isMounted && <Layout>{children}</Layout>}</Web3Provider>
        </ChakraProvider>
      </body>
    </html>
  )
}
