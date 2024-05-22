import { prisma } from '@/lib/prisma'
import { getDigimonList } from '@/services/service-digimon'

async function main() {
  const digimonList = await getDigimonList()

  await prisma.digimon.createMany({
    data: digimonList,
    skipDuplicates: true,
  })
}

main()
  .catch((error) => { 
    console.error(error)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
