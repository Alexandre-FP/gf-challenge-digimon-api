import { Digimon } from '@prisma/client'

export interface DigimonsRepository {
  findById(id: string): Promise<Digimon | null>
  allDigimon(): Promise<Digimon[]>
  findByName(name: string): Promise<Digimon | null>
  findBylevel(level: string): Promise<Digimon[] | null>
}
