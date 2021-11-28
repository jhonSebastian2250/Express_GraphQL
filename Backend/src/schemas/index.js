const {SchemaComposer, schemaComposer} = require("graphql-compose");

const schemaComposer = new SchemaComposer();

const {UserQuery} = require("./user")

schemaComposer.Query.addFields({
    ...UserQuery
})

module.exports = schemaComposer.buildSchema();