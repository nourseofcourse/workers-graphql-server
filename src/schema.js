const { gql } = require('apollo-server-cloudflare')

module.exports = gql`
  type PokemonSprites {
    front_default: String!
    front_shiny: String!
    front_female: String!
    front_shiny_female: String!
    back_default: String!
    back_shiny: String!
    back_female: String!
    back_shiny_female: String!
  }

  type Pokemon {
    id: ID!
    name: String!
    height: Int!
    weight: Int!
    sprites: PokemonSprites!
  }

  type Program {
    id: ID!
    name: String!
    category: Category
  }

  type Category {
    id: ID!
    name: String!
  }

  type Query {
    pokemon(id: ID!): Pokemon
    program(id: ID!): Program
    programs: [Program]
    category(id: ID!): Category
    categories: [Category]
  }
  
`
