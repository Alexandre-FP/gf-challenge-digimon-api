import { makeSearchByNamelUseCase } from '@/use-case/factories/make-search-by-name-use-case'
import { SearchByNameDigimonExistError } from '@/use-case/errors/search-by-name-already-exist-error'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function searchByNameUseCase(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const searchDigimonsParamsSchema = z.object({
    name: z.string(),
  })

  try {
    const { name } = searchDigimonsParamsSchema.parse(request.params)

    const searchByNameUseCase = makeSearchByNamelUseCase()

    const { digimons } = await searchByNameUseCase.execute({
      name,
    })

    return reply.status(200).send(digimons)
  } catch (err) {
    if (err instanceof SearchByNameDigimonExistError) {
      return reply.status(404).send({ message: err.message })
    }

    throw err
  }
}
