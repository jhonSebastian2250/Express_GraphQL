const mongoose = require("mongoose");
const {composeWithMongoose} = require("graphql-compose-mongoose");
const Schema = mongoose.Schema;

const Avances = new Schema(
    {
        idProyecto: String,
        idEstudiante: String,
        fecha: Date,
        descripcion: String,
        observaciones: String
    },
    {timestamps: {createdAt:true, updatedAt:true}}
)



module.exports = {
    Avances: mongoose.model("Avances", Avances),
    AvancesTC: composeWithMongoose(mongoose.model("Avances", Avances))
}