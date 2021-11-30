const mongoose = require("mongoose");
const {composeWithMongoose} = require("graphql-compose-mongoose")
const Schema = mongoose.Schema;

const Proyecto = new Schema(
    {
        nombre: String,
        objetiosGenerales: [String],
        obgetivosEspecifivos: [String],
        presupuesto: String,
        fechaInicio: Date,
        fechaFin: Date,
        lider: {nombre: String, identificacion: String},
        estado: String,
        fase: String 
    },
    {timestamps: {createAt: true, updateAt:true}}
);

module.exports = {
    ProyectoSchema: mongoose.model("proyectos", Proyecto),
    ProyectoTC: composeWithMongoose(mongoose.model("proyectos"), Proyecto)
}