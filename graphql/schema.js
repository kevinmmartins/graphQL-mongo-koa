const { GraphQLSchema, GraphQLObjectType, GraphQLString} = require('graphql');
const userGraphQLType =  require('./userType');
const User = require('../database/models/users');

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: userGraphQLType,
      args: { name: { type: GraphQLString }},
      resolve(parent, args) {
        return User.findOne({
          name: args.name
        })
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery
});