
import { GraphQLModule } from '@graphql-modules/core';
import gql from 'graphql-tag';

export const ChatModule = new GraphQLModule({
  typeDefs: gql`
    # Query declared again, adding only the part of the schema that relevant
    type Query {
      myChats: [Chat]
    }

    # User declared again- extends any other 'User' type that loaded into the appModule
    type User {
      chats: [Chat]
    }

    type Chat {
      id: ID!
      users: [User]
      messages: [ChatMessage]
    }

    type ChatMessage {
      id: ID!
      content: String!
      user: User!
    }
  `,
  resolvers: {
    Query: {
       myChats: (root, args, { getChats, currentUser }) => getChats(currentUser),  
    },
    User: {
      // This module implements only the part of `User` it adds
      chats: (user, args, { getChats }) => getChats(user), 
    },
  },
});