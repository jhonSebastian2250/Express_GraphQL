const mongoose = require("mongoose");
const { composeWithMongoose} = require("graphql-compose-mongoose"),
const Schema = mongoose.Schema;

const User = new Schema(
    {
        name: String,
        surname: String,
        email: String,
        phone: String,
        city: String,
    },
    {
        timesTamps: {createdAt: "created_at", 
        updatedAt: "updated_at"}}
);

module.exports = {
    UserSchema = mongoose.model("users", User),
    UserTC = composeWithMongoose(mongoose.model("Users", User))
};
