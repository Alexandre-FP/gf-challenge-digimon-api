import { DigimonsRepository } from '@/repositories/digimon-repository'
import { SearchByLevelDigimonExistError } from './errors/search-by-level-already-exist-error'
import { Digimon } from '@prisma/client'

interface GetDigimonsByLevelUseCaseRequest {
  level: string
}

interface GetDigimonsByLevelUseCaseResponse {
  digimons: Digimon[]
}

export class GetDigimonsByLevelUseCase {
  constructor(private digimonsRepository: DigimonsRepository) {}

  async execute({
    level,
  }: GetDigimonsByLevelUseCaseRequest): Promise<GetDigimonsByLevelUseCaseResponse> {
    const digimons = await this.digimonsRepository.findBylevel(level)

    if (!digimons) {
      throw new SearchByLevelDigimonExistError()
    }

    return {
      digimons,
    }
  }
}
