const express = require("express");
const cors = require('cors')

const app = express()

/*app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE')
    app.use(cors())
    next()
})*/



var corsOptions = {
    origins: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    optionsSuccessStatus: 200
}



const routes = express.Router();

routes.use((req, res, next) =>{
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
    res.header('Access-Control-Allow-Headers', '*')
    res.header('Access-Control-Allow-Methods', '*')
    next()
})
const ProdutoController = require("./app/controller/ProdutoController");

routes.get("/:token/produto", ProdutoController.index);

routes.post("/:token/produto", ProdutoController.store);

routes.get("/:token/produto/:codDeBarras", ProdutoController.getByCod)

routes.delete("/:token/produto/:codDeBarras", ProdutoController.deleteProd)

module.exports = routes;