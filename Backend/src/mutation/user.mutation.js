const {UserTC, UserSchema} = require("../model/user")

//const resolver = function () {};

const resolver = UserTC.addResolver({
    name: "user",
    type: UserTC,
    args: {record: UserTC.getInputType()},

    resolver: async({sourse, args}) => {
        let user = new UserSchema({
            name: String,
            surname: String,
            email: String,
            phone: String,
            city: String

        });
        return await user.save();
    }
})

module.exports = resolver;