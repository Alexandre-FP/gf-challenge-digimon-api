import { DigimonsRepository } from '@/repositories/digimon-repository'
import { SearchByNameDigimonExistError } from './errors/search-by-name-already-exist-error'
import { Digimon } from '@prisma/client'

interface GetDigimonsByNameUseCaseRequest {
  name: string
}

interface GetDigimonsByNameUseCaseResponse {
  digimons: Digimon
}

export class GetDigimonsByNameUseCase {
  constructor(private digimonsRepository: DigimonsRepository) {}

  async execute({
    name,
  }: GetDigimonsByNameUseCaseRequest): Promise<GetDigimonsByNameUseCaseResponse> {
    const digimons = await this.digimonsRepository.findByName(name)

    if (!digimons) {
      throw new SearchByNameDigimonExistError()
    }

    return {
      digimons,
    }
  }
}
