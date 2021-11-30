const mongoose = require("mongoose");
const {composeWithMongoose} = require("graphql-compose-mongoose");
const Schema = mongoose.Schema;

const Inscripciones = new Schema(
    {
        idProyecto: String,
        idEstidiante: String,
        estado: String,
        fechaIngreso: Date,
        fechaEgreso: Date
    },
    {timestamps: {createdAt:true, updatedAt:true}}
);

module.exports = {
    Inscripciones: mongoose.model("Inscripciones", Inscripciones),
    InscripcionesTC: composeWithMongoose(mongoose.model("Inscripciones", Inscripciones))
};