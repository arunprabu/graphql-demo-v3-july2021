const { gql } = require("apollo-server-express");

const typeDefs = gql`
  # Custom Data Type
  type User{
    id: Int,
    name: String,
    phone: String
  }

  # Queries
  type Query {
    hello: String,
    greet(name: String): String,
    getUserList: [User]
  }

  #Mutations
  type Mutation {
    createUser(name: String, phone: String): User
  }
`;

module.exports = typeDefs;