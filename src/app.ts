import fastify from 'fastify'
import { ZodError } from 'zod'
import { env } from './env'
import { digimonsRoutes } from './http/controllers/digimons/routes'

export const app = fastify()

app.register(digimonsRoutes)

app.setErrorHandler((error, _, reply) => {
  // linha para exessao de erro global da aplicação
  if (error instanceof ZodError) {
    return reply
      .status(400)
      .send({ message: 'Validation error.', issues: error.format() })
  }

  if (env.NODE_ENV !== 'production') {
    console.error(error)
  } else {
    // TODO:
  }

  return reply.status(500).send({ message: 'Internal server Error' })
})
