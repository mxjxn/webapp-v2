import React, { useEffect } from 'react'
import { useAccount, useNetwork, useSignMessage } from 'wagmi'
import { useLoggedIn } from 'hooks/useLoggedIn'
import { Button, Text } from '@chakra-ui/react'
import { shortenAddress } from 'utils/address'
import { SITE_NAME } from 'utils/config'
import { SiweMessage } from 'siwe'

export const LoginButton = () => {
  const { signMessageAsync } = useSignMessage()
  const { chain } = useNetwork()
  const { address } = useAccount()
  const { loggedInAddress, setLoggedInAddress } = useLoggedIn()

  useEffect(() => {
    const handler = async () => {
      try {
        const res = await fetch('/api/account')
        const json = await res.json()
        if (json.address) {
          setLoggedInAddress(json.address)
        }
      } catch (_error) {}
    }

    // 1. page loads
    handler()

    // 2. window is focused (in case user logs out of another window)
    window.addEventListener('focus', handler)
    return () => window.removeEventListener('focus', handler)
  }, [setLoggedInAddress])

  // signin function
  const signIn = async () => {
    try {
      const chainId = chain?.id
      if (!address || !chainId) return

      // 1. Get random nonce from API
      const nonceRes = await fetch('/api/account/nonce')
      const nonce = await nonceRes.text()

      // 2. Create SIWE message with pre-fetched nonce and sign with wallet
      const message = new SiweMessage({
        domain: window.location.host,
        address,
        statement: `Sign in with Ethereum to ${SITE_NAME}.`,
        uri: window.location.origin,
        version: '1',
        chainId,
        nonce: nonce,
      })

      // 3. Sign message
      const signature = await signMessageAsync({
        message: message.prepareMessage(),
      })

      // 3. Verify signature
      const verifyRes = await fetch('/api/account/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message, signature }),
      })

      if (!verifyRes.ok) throw new Error('Error verifying message')

      setLoggedInAddress(address)
    } catch (error) {
      console.error(error)
      setLoggedInAddress('')
    }
  }

  async function logout() {
    await fetch('/api/account/logout')
    setLoggedInAddress('')
  }

  if (!address) {
    return <></>
  }
  if (address && !loggedInAddress) {
    return (
      <Button size="sm" onClick={signIn}>
        Log in
      </Button>
    )
  }
  if (address && loggedInAddress) {
    return <Button onClick={logout}>Logout</Button>
  }
  return <div></div>
}
