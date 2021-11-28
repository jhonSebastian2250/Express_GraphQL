const {UserTC, UserSchema} = require("../model/user")

//const resolver = function () {};

const resolver = UserTC.addResolver({
    name: "user",
    type: UserTC,
    args: {record: UserTC.getInputType()},

    resolver: async({sourse, args}) => {
        let user = new UserSchema({
            email: String,
            identificacion: String,
            nombreApellido: String,
            contraseña: String,
            tipoUsuario: String,
            estado: String

        });
        return await user.save();
    }
})

module.exports = resolver;