import { makeGetDigimonsUseCase } from '@/use-case/factories/make-get-digimons-use-case'
import { FastifyRequest, FastifyReply } from 'fastify'

export async function getDigimonsUseCase(
  _: FastifyRequest,
  reply: FastifyReply,
) {
  const { digimons } = await makeGetDigimonsUseCase().execute()

  return reply.status(200).send(digimons)
}
