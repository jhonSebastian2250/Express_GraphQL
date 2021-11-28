const {UserTC} = require("/Backend/model/user")

const UserQuery = {
   userById: UserTC.getResolver("findById"),
   userByIds: UserTC.getResolver("findBiIds"), 
   userOne: UserTC.getResolver("findOne"),
   userMany: UserTC.getResolver("findMany"),
};

module.exports = {UserQuery};