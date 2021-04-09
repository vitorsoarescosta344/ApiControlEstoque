const express = require("express");
const cors = require('cors')

const app = express()
app.use(cors())

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    next()
})

const routes = express.Router();
const ProdutoController = require("./app/controller/ProdutoController");

app.get("/:token/produto", cors() , ProdutoController.index);

app.post("/:token/produto", cors(), ProdutoController.store);

routes.get("/:token/produto/:codDeBarras", ProdutoController.getByCod)

module.exports = routes;