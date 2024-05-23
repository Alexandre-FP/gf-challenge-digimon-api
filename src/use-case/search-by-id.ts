import { DigimonsRepository } from '../repositories/digimon-repository'
import { SearchByIdDigimonExistError } from './errors/search-by-id-already-exist-error'
import { Digimon } from '@prisma/client'

interface GetDigimonsByIdUseCaseRequest {
  id: string
}

interface GetDigimonsByIdUseCaseResponse {
  digimons: Digimon
}

export class GetDigimonsByIdUseCase {
  constructor(private digimonsRepository: DigimonsRepository) {}

  async execute({
    id,
  }: GetDigimonsByIdUseCaseRequest): Promise<GetDigimonsByIdUseCaseResponse> {
    const digimons = await this.digimonsRepository.findById(id)

    if (!digimons) {
      throw new SearchByIdDigimonExistError()
    }

    return {
      digimons,
    }
  }
}
