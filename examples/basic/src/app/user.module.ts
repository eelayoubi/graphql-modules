import { GraphQLModule } from '@graphql-modules/core';
import gql from 'graphql-tag';

export const UserModule = new GraphQLModule({
  typeDefs: gql`
    type Query {
      me: User
    }

    # This is a basic User, with just the basics of a user object
    type User {
      id: ID!
      username: String!
      email: String!
    }
  `,
  resolvers: {
    Query: {
       me: (root, args) => {
         return {
           id: 1,
           username: 'test',
           email: 'test@test.test'
         }
       } 
    },
    User: {
      id: user => user._id,
      username: user => user.username,
      email: user => user.email.address, 
    }, 
  },
});