const express = require("express");
const app = express();
const mongoose = require("mongoose");
const {graphqlHTTP} = require("express-graphql");

const extensions = ({context}) => {
    return{
        runTine: Date.now() - context.starTime,
    }
}


app.listen(5000, async () => {
    console.log("working in the port 5000 http://localhost:5000/graphql")
    await mongoose.connect("mongodb+srv://jhonSebastian:jhonSebastian@cluster0.ecojz.mongodb.net/AdministrarProyectos?retryWrites=true&w=majority", {
        
        useNewUrlParser : true,
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