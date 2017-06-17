// src/schema.js
import {
  makeExecutableSchema,
  addMockFunctionsToSchema,
} from 'graphql-tools';
import { resolvers } from './resolvers';
const typeDefs = `
  type Channel {
     id: ID!
     name: String
  }

  type Query {
     channels: [Channel]    # "[]" means this is a list of channels
  }

  type Mutation {
    # A mutation to add a new channel to the list of channels
    addChannel(name: String!): Channel
  }
`;
const schema = makeExecutableSchema({ typeDefs, resolvers });
//addMockFunctionsToSchema({ schema });
export { schema };
