// create-admin.js
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  const contractAddress = process.env.ADMIN_ADDRESS

  const admin = await prisma.admin.create({
    data: {
      contractAddress: contractAddress,
    },
  })

  console.log('Admin created:', admin)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
