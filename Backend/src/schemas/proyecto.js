const {ProyectoTC} = require("../model/proyecto");

const ProyectoQuery = {
    proyectoById: ProyectoTC.getResolver("findById"),
    proyectoOne: ProyectoTC.getResolver("findOne"),
    proyectoMany: ProyectoTC.getResolver("findMany")
};

const ProyectoMutation = {
    proyectoCreateOne: ProyectoTC.getResolver("createOne"),
    proyectoRemoveById: ProyectoTC.getResolver("removeById"),
    proyectoUpdateById: ProyectoTC.getResolver("updateById")
}

module.exports = {ProyectoQuery, ProyectoMutation};