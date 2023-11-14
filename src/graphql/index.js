const { ApolloServer } = require('apollo-server-express');
const { ApolloServerPluginLandingPageGraphQLPlayground } = require('apollo-server-core');
const { loadFiles } = require('@graphql-tools/load-files');
const resolvers = require('./resolvers');
const { buildContext } = require('graphql-passport');
const { typeDefs: scalarsTypeDefs, resolvers: scalarsResolvers } = require('graphql-scalars')

//Get = Query
//Post Put Patch Delete = Mutation

// all request are POST and all response are JSON and the status code is always 200

const useGraphql = async (app) => {
  const typeDefs = [
    await loadFiles('./src/**/*.graphql'),
    scalarsTypeDefs
  ];
  const allResolvers = [
    resolvers,
    scalarsResolvers
  ]


  const server = new ApolloServer({
    typeDefs,
    resolvers: allResolvers,
    context: ({ req, res }) => buildContext({ req, res }),
    playground: true,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()]
  });

  await server.start();
  server.applyMiddleware({ app });
}

module.exports = useGraphql;
