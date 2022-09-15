import express from 'express';
import mongoose from 'mongoose';
import { ApolloServer } from 'apollo-server-express';
require('dotenv').config();

import schema from './schema';
import resolvers from './resolvers';

(async () => {
  await mongoose.connect(process.env.MONGODB_CONNECTION);
  
  var app = express();
  
  const server = new ApolloServer({
    typeDefs: schema,
    resolvers: resolvers,
  });
  
  await server.start();
  server.applyMiddleware({ app });
  
  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
})()
