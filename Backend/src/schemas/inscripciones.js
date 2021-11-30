const {InscripcionesTC} = require("../model/inscripciones");

const InscripcionesQuery = {
    inscripcionesById: InscripcionesTC.getResolver("findById"),
    inscripcionesOne: InscripcionesTC.getResolver("findOne"),
    inscripcionesMany: InscripcionesTC.getResolver("findMany")
}

const InscripcionesMutation = {
    inscripcionesCreateOne: InscripcionesTC.getResolver("createOne"),
    inscripcionesRemoveById: InscripcionesTC.getResolver("removeById"),
    inscripcionesUpdateById: InscripcionesTC.getResolver("updateById")
}

module.exports = {InscripcionesQuery, InscripcionesMutation}