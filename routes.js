const express = require("express");
const cors = require('cors')

const app = express()

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE')
    app.use(cors())
    next()
})

//app.use(cors())

const routes = express.Router();
const ProdutoController = require("./app/controller/ProdutoController");

routes.get("/:token/produto", ProdutoController.index);

routes.post("/:token/produto", ProdutoController.store);

routes.get("/:token/produto/:codDeBarras", ProdutoController.getByCod)

module.exports = routes;