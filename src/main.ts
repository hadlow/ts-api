import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString
} from 'graphql';

const DocumentType = new GraphQLObjectType({
  name: 'Document',
  fields: () => ({
    _id: { type: GraphQLString, },
    user: { type: GraphQLString, },
    template: { type: GraphQLString, },
    title: { type: GraphQLString, },
    slug: { type: GraphQLString, },
    created_at: { type: GraphQLString, },
    updated_at: { type: GraphQLString, },
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: 
});

const Mutation = '';

const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});

var root = {
  hello: () => {
    return 'Hello world!';
  },
};

var app = express();

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(4000, () => {
  console.log('Running a GraphQL API server at http://localhost:4000/graphql');
});
