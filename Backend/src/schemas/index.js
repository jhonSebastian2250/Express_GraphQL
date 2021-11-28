const {SchemaComposer} = require("graphql-compose");

const schemaComposer = new SchemaComposer();

const {UserQuery, UserMutation} = require("./user")

schemaComposer.Query.addFields({
    ...UserQuery,
    ...UserMutation
})

module.exports = schemaComposer.buildSchema();