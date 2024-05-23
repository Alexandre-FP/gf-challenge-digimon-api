import { makeSearchByIdUseCase } from '../../../use-case/factories/make-search-by-id-use-case'
import { SearchByIdDigimonExistError } from '../../../use-case/errors/search-by-id-already-exist-error'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function searchByIdUseCase(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const searchDigimonsByIdParamsSchema = z.object({
    id: z.string(),
  })

  try {
    const { id } = searchDigimonsByIdParamsSchema.parse(request.params)

    const searchByNameUseCase = makeSearchByIdUseCase()

    const { digimons } = await searchByNameUseCase.execute({
      id,
    })

    return reply.status(200).send(digimons)
  } catch (err) {
    if (err instanceof SearchByIdDigimonExistError) {
      return reply.status(404).send({ message: err.message })
    }

    throw err
  }
}
