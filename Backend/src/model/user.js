const mongoose = require("mongoose");
const { composeWithMongoose} = require("graphql-compose-mongoose");
const Schema = mongoose.Schema;

const User = new Schema(
    {
        email: String,
        ID: String,
        nameSurname: String,
        password: String,
        userType: String,
        state: String
            
    },
    {timestamps: {createdAt: true, updatedAt: true}}
);

module.exports = {
    UserSchema : mongoose.model("users", User),
    UserTC : composeWithMongoose(mongoose.model("Users", User))
};
