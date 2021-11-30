const {AvancesTC} = require("../model/avances");

const AvancesQuery = {
    avanceById: AvancesTC.getResolver("findById"),
    avanceOne: AvancesTC.getResolver("findOne"),
    avanceMany: AvancesTC.getResolver("findMany")
};

const AvancesMutation = {
    avanceCreateOne: AvancesTC.getResolver("createOne"),
    avanceRemoveById: AvancesTC.getResolver("removeById"),
    avanceUpdateById: AvancesTC.getResolver("updateById")
}

module.exports = {AvancesQuery, AvancesMutation}