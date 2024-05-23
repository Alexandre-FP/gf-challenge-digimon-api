import { GetDigimonsByIdUseCase } from '../search-by-id'
import { PrismaDigimonsRepository } from '../../repositories/prisma/prisma-digimons-repository'

export function makeSearchByIdUseCase() {
  const digimonRepository = new PrismaDigimonsRepository()
  const makeSearchByIdUseCase = new GetDigimonsByIdUseCase(digimonRepository)

  return makeSearchByIdUseCase
}
