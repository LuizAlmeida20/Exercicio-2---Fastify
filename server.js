// Import the framework and instantiate it
import Routes from "./routes.js"
import Fastify from 'fastify'
const fastify = Fastify({
    logger: true
})

fastify.register(Routes)

// Run the server!
try {
    await fastify.listen({ port: 3000 })
} catch (err) {
    fastify.log.error(err)
    process.exit(1)
}