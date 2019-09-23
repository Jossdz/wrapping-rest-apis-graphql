const {RESTDataSource} = require('apollo-datasource-rest')

module.exports = class RickAndMortyAPI extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = 'https://rickandmortyapi.com/api/'
  }
  async getCharacters() {
    const {results} = await this.get('/character')

    return results
  }
}
