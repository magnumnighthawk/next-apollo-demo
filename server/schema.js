// const {
//   graphql,
//   GraphQLSchema,
//   GraphQLObjectType,
//   GraphQLString
// } = require('graphql')
// const faker = require('faker')

// module.exports = new GraphQLSchema({
//   query: new GraphQLObjectType({
//     name: 'RootQueryType',
//     fields: {
//       name: {
//         type: GraphQLString,
//         resolve() {
//           return faker.name.findName()
//         }
//       }
//     }
//   })
// })
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
  }

  type Address {
    street: String
    suite: String
    city: String
    zipcode: String
  }
`;

module.exports = typeDefs;
