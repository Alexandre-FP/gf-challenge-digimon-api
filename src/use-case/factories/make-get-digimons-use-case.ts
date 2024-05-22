import { PrismaDigimonsRepository } from '@/repositories/prisma/prisma-digimons-repository'
import { GetDigmonsUseCase } from '../get-digimons'

export function makeGetDigimonsUseCase() {
  const digimonsRepository = new PrismaDigimonsRepository()
  const makeGetDigimonsUseCase = new GetDigmonsUseCase(digimonsRepository)

  return makeGetDigimonsUseCase
}
