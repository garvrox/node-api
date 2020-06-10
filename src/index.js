import Koa from 'Koa'
import KoaRouter from 'koa-router'
import json from 'koa-json'
import logger from './middlewares/logger'
import responseTime from './middlewares/responseTime'
import { ApolloServer } from 'apollo-server-koa'
import schema from './schema'
import resolvers from './resolvers'
import dataSources from './datasources'

// App
const app = new Koa()

// Middlewares
app.use(json())
app.use(logger)
app.use(responseTime)

const server = new ApolloServer({ 
    typeDefs: schema, 
    resolvers, 
    dataSources: () => dataSources,
})

const router = new KoaRouter()

router.get('/', async ctx => ctx.body = { 'msg': 'Hello World' })
app.on('error', (err, ctx) => {
    log.error('server error', err, ctx)
})

// Router Middleware
app.use(router.routes())
app.use(router.allowedMethods())

// GraphQL MiddleWare
server.applyMiddleware({ app })

const PORT = process.env.port || 4000

app.listen({ port: PORT }, () =>
    console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`)
)
