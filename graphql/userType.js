const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString } = graphql;

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    birthday: { type: GraphQLString },
    nick: { type: GraphQLString },
    age: { type: GraphQLString }
  })
});

module.exports = UserType;