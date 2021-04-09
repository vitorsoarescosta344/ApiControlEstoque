const express = require("express");
const cors = require('cors')

const app = express()

app.use((req, res, next) => {
    app.use(cors())
    next()
})

const routes = express.Router();
const ProdutoController = require("./app/controller/ProdutoController");

routes.get("/:token/produto", ProdutoController.index);

routes.post("/:token/produto", ProdutoController.store);

routes.get("/:token/produto/:codDeBarras", ProdutoController.getByCod)

module.exports = routes;