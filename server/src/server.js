/*jshint esversion: 9 */

import { graphql } from 'graphql';
import { makeExecutableSchema } from 'graphql-tools';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { findAuthorsByBookIdsLoader } from './author';

import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';

import typeDefs from './typeDefs';
import resolvers from './resolvers';

// Setup the typeDefs and Resolvers
const schema = makeExecutableSchema({ typeDefs, resolvers });

// Start with npm run dev
const app = express();
app.use(cors());

app.use("/graphql",
  bodyParser.json(),
  graphqlExpress(() => ({
    schema,
    context: {
      loaders: {
        findAuthorsByBookIdsLoader: findAuthorsByBookIdsLoader()
      }
    }
  })));

app.use('/graphiql', graphiqlExpress ({ endpointURL: '/graphql'}));

app.listen(4000, () => {
  console.log('Go to http://localhost:4000/graphiql to run queries');
});
