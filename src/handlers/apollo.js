const { ApolloServer } = require('apollo-server-cloudflare')
const { graphqlCloudflare } = require('apollo-server-cloudflare/dist/cloudflareApollo')

const KVCache = require('../kv-cache')
const PokemonAPI = require('../datasources/pokeapi')
const resolvers = require('../resolvers')
const typeDefs = require('../schema')
const mongoose = require('mongoose')
const dataSources = () => ({
  pokemonAPI: new PokemonAPI(),
})

const kvCache = { cache: new KVCache() }

const createServer = graphQLOptions =>
  new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
    dataSources,
    ...(graphQLOptions.kvCache ? kvCache : {}),
  })

const handler = async (request, graphQLOptions) => {
  const dbURL = process.env.dbURL
  await mongoose.connect(dbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  const server = createServer(graphQLOptions)
  return graphqlCloudflare(() => server.createGraphQLServerOptions(request))(request)
}

module.exports = handler
