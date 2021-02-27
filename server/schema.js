const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    users: [User]
  }

  type User {
    name: String!
    email: String!
    address: Address
    phone: String
    website: String
    avatar: String
  }

  type Address {
    street: String
    suite: String
    city: String
    zipcode: String
  }
`;

module.exports = typeDefs;
