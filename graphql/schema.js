const { buildSchema } = require('graphql');

const schema = buildSchema(`
 type Query {
   hello_world: String
 }
`);

module.exports = schema;