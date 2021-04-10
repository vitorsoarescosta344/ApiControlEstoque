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
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions))

const routes = express.Router();
const ProdutoController = require("./app/controller/ProdutoController");

app.get("/:token/produto", ProdutoController.index);

app.post("/:token/produto", ProdutoController.store);

routes.get("/:token/produto/:codDeBarras", ProdutoController.getByCod)

module.exports = routes;