const Pro = require('./model').Pro
//const Cat = require('./model').Cat
module.exports = {
  Query: {
    pokemon: async (_source, { id }, { dataSources }) => {
      return dataSources.pokemonAPI.getPokemon(id)
    },
    programs: async(_, __) => {
      const program = await Pro.find()
      return program
    }
  },
}
