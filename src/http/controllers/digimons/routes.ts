import { getDigimonsUseCase } from './get-digimons'
import { searchByLevelUseCase } from './search-by-level'
import { searchByNameUseCase } from './search-by-name'
import { searchByIdUseCase } from './search-by-id'
import { FastifyInstance } from 'fastify'

export async function digimonsRoutes(app: FastifyInstance) {
  app.get('/digimons', getDigimonsUseCase)

  app.get('/digimon/name/:name', searchByNameUseCase)

  app.get('/digimon/level/:level', searchByLevelUseCase)

  app.get('/digimon/:id', searchByIdUseCase)
}
