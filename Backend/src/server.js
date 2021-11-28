const express = require("express");
const app = express();
const mongoose = require("mongoose");
const {graphqlHTTP} = require("express-graphql");

const extensions = ({context}) => {
    return{
        runtine : Date.now() - context.starTme,
    }
}

app.listen(5000, async () => {
    console.log("servidor iniciado");
    await mongoose.connet("mongodb://localhost:27017/GraphQlTest", {
        useNewUrlParse : true,
        useUnifiedTopology : true
    })
})

mongoose.connection.on(
    "error", console.error.bind(console, "error de conexion")
)

const graphqlScrema = require("./schemas/index")

app.use(
    "/graphql", graphqlHTTP((request) => {
        return {
            contex : {atartTine: Date.now()},
            schema: graphqlScrema,
            graphiql: true,
            extensions
        }
    })
)