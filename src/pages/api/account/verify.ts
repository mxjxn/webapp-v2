import { NextApiRequest, NextApiResponse } from 'next'
import { SiweMessage } from 'siwe'
import { withSessionRoute } from 'utils/server'
// import prisma
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default withSessionRoute(async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(req.method, '/api/account/verify', req.session)

  if (req.method === 'POST') {
    try {
      const { message, signature } = req.body
      const siweMessage = new SiweMessage(message)
      const fields = await siweMessage.validate(signature)

      if (fields.nonce !== req.session.nonce)
        return res.status(422).json({ message: 'Invalid nonce.' })

      // Find or create a user with the given wallet address
      const user = await prisma.user.upsert({
        where: { wallet: fields.address },
        update: {},
        create: { wallet: fields.address },
      })
      console.log('login success!')
      console.log({ user })
      req.session.siwe = fields
      req.session.userId = user.wallet
      await req.session.save()
      return res.json({ ok: true })
    } catch (ex) {
      console.error(ex)
      return res.json({ ok: false })
    }
  }

  res.setHeader('Allow', ['POST'])
  return res.status(405).end(`Method ${req.method} Not Allowed`)
})
