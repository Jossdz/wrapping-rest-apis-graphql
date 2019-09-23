const {ApolloServer, gql} = require('apollo-server')
const RickAndMortyAPI = require('./dataSource')
// Construimos un schema usando el lenguaje de Graphql.
const typeDefs = gql`
  type Query {
    getCharacters: [Character]
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
    episode: [String]
    url: String
    created: String
  }
`

// Definimos los resolvers para los campos del schema
const resolvers = {
  Query: {
    getCharacters: async (_, __, {dataSources}) =>
      dataSources.RickAndMortyAPI.getCharacters()
  }
}

// Creamos una instancia de Apollo Server con los typeDefs y los resolvers
const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    RickAndMortyAPI: new RickAndMortyAPI()
  })
})

server.listen().then(({url}) => {
  console.log(`🚀 Server en: ${url}`)
})
