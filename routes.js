const express = require("express");

const routes = express.Router();
const ProdutoController = require("./app/controller/ProdutoController");

routes.get("/:token/produto", ProdutoController.index);

routes.post("/:token/produto", ProdutoController.store);

routes.get("/:token/produto/:codDeBarras", ProdutoController.getByCod)

module.exports = routes;