import { PrismaDigimonsRepository } from '@/repositories/prisma/prisma-digimons-repository'
import { GetDigimonsByNameUseCase } from '../search-by-name'

export function makeSearchByNamelUseCase() {
  const digimonRepository = new PrismaDigimonsRepository()
  const makeSearchByNamelUseCase = new GetDigimonsByNameUseCase(
    digimonRepository,
  )

  return makeSearchByNamelUseCase
}
