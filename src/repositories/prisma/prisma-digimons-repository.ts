import { DigimonsRepository } from "../digimon-repository";
import { prisma } from "@/lib/prisma";

export class PrismaDigimonsRepository implements DigimonsRepository {
  async findById(id: string) {
    const digimon = await prisma.digimon.findUnique({
      where: {
        id
      }
    })

    return digimon
  }

  async allDigimon(){
    const digimon = await prisma.digimon.findMany({})

    return digimon
  }

  async findByName(name: string) {
    const digimon = await prisma.digimon.findFirst({
      where: {
        name
      }
    })

    return digimon
  }

  async findBylevel(level: string) {
    const digimon = await prisma.digimon.findMany({
      where: {
        level 
      }
    })

    return digimon
  }
}