const {ApolloServer, gql} = require('apollo-server')

// Construimos un schema usando el lenguaje de Graphql.
const typeDefs = gql`
  type Query {
    hello: String
  }

  type Origin {
    name: String
    url: String
  }

  type Location {
    name: String
    url: String
  }

  type Character {
    id: String
    name: String
    status: String
    species: String
    type: String
    gender: String
    origin: Origin
    location: Location
    image: String
    episode: Array
    url: String
    created: Date
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
