import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import { graphql } from 'graphql';

import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';

import resolvers from './resolvers';
import typeDefs from './typedefs';
import loaders from './loader';

const schema = makeExecutableSchema({ typeDefs, resolvers });
const app = express();
app.use(cors());

app.use('/graphql',
  bodyParser.json(),
  graphqlExpress(() => ({
    schema,
    context: {
      loaders: loaders()
    }
  }))
);

// Use Graphiql to test the server
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

app.listen(4000, () => {
  console.log('Go to http://localhost:4000/graphiql to run queries!');
});
