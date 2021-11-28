const {UserTC} = require("../model/user")
require("../mutation/user.mutation")

const UserQuery = {
   userById: UserTC.getResolver("findById"),
   userByIds: UserTC.getResolver("findByIds"), 
   userOne: UserTC.getResolver("findOne"),
   userMany: UserTC.getResolver("findMany"),
};

const UserMutation = {
   userCreateOne: UserTC.getResolver("createOne"),
   userRemoveById: UserTC.getResolver("removeById"), 
   userUpdateById: UserTC.getResolver("updateById")
   // userCreate: UserTC.getResolver("user")
}

module.exports = {UserQuery, UserMutation};