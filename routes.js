const express = require("express");
const cors = require('cors')

const app = express()

/*app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE')
    app.use(cors())
    next()
})*/

//app.use(cors())

var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
}

const routes = express.Router();
const ProdutoController = require("./app/controller/ProdutoController");

routes.get("/:token/produto", cors(corsOptions), ProdutoController.index);

routes.post("/:token/produto", cors(corsOptions), ProdutoController.store);

routes.get("/:token/produto/:codDeBarras", ProdutoController.getByCod)

module.exports = routes;