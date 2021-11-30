const {SchemaComposer} = require("graphql-compose");

const schemaComposer = new SchemaComposer();

const {UserQuery, UserMutation} = require("./user")
const {ProyectoQuery, ProyectoMutation} = require("./proyecto")
const {AvancesQuery, AvancesMutation} = require("./avances")
const {InscripcionesQuery, InscripcionesMutation} = require("./inscripciones")

schemaComposer.Query.addFields({
    ...UserQuery,
    ...ProyectoQuery,
    ...AvancesQuery,
    ...InscripcionesQuery
})

schemaComposer.Mutation.addFields({
    ...UserMutation,
    ...ProyectoMutation,
    ...AvancesMutation,
    ...InscripcionesMutation
})

module.exports = schemaComposer.buildSchema();