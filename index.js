const {ApolloServer, gql} = require('apollo-server')

// Construimos un schema usando el lenguaje de Graphql.
const typeDefs = gql`
  type Query {
    hello: String
  }
`

// Definimos los resolvers para los campos del schema
const resolvers = {
  Query: {
    hello: (root, args, context) => 'Hola FB developer circles CDMX'
  }
}

// Creamos una instancia de Apollo Server con los typeDefs y los resolvers
const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen().then(({url}) => {
  console.log(`🚀 Server en: ${url}`)
})
