const {UserTC} = require("../model/user")

const UserQuery = {
   userById: UserTC.getResolver("findById"),
   userByIds: UserTC.getResolver("findByIds"), 
   userOne: UserTC.getResolver("findOne"),
   userMany: UserTC.getResolver("findMany"),
};

const UserMutation = {
   userCreateOne: UserTC.getResolver("createOne"),
};

module.exports = {UserQuery, UserMutation};