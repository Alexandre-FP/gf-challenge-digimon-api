import { makeSearchByLevelUseCase } from '@/use-case/factories/make-search-by-level-use-case'
import { SearchByLevelDigimonExistError } from '@/use-case/errors/search-by-level-already-exist-error'
import { z } from 'zod'
import { FastifyReply, FastifyRequest } from 'fastify'

export async function searchByLevelUseCase(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const searchDigimonsParamsSchema = z.object({
    level: z.string(),
  })

  try {
    const { level } = searchDigimonsParamsSchema.parse(request.params)

    const searchByLevelUseCase = makeSearchByLevelUseCase()

    const { digimons } = await searchByLevelUseCase.execute({
      level,
    })

    return reply.status(200).send(digimons)
  } catch (err) {
    if (err instanceof SearchByLevelDigimonExistError) {
      return reply.status(404).send({
        message: err.message,
      })
    }
    throw err
  }
}
