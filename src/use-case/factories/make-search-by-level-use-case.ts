import { PrismaDigimonsRepository } from '@/repositories/prisma/prisma-digimons-repository'
import { GetDigimonsByLevelUseCase } from '../search-by-level'

export function makeSearchByLevelUseCase() {
  const digimonRepository = new PrismaDigimonsRepository()
  const makeGetDigimonsUseCase = new GetDigimonsByLevelUseCase(
    digimonRepository,
  )

  return makeGetDigimonsUseCase
}
