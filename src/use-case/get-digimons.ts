import { DigimonsRepository } from '@/repositories/digimon-repository'
import { Digimon } from '@prisma/client'

interface GetDigimonsUseCaseResponse {
  digimons: Digimon[]
}

export class GetDigmonsUseCase {
  constructor(private digimonsRepository: DigimonsRepository) {}

  async execute(): Promise<GetDigimonsUseCaseResponse> {
    const digimons = await this.digimonsRepository.allDigimon()

    return {
      digimons,
    }
  }
}
