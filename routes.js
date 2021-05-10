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
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', '*')
    res.header('Access-Control-Allow-Methods', '*')
    next()
})
const ProdutoController = require("./app/controller/ProdutoController");
const VendaController = require("./app/controller/VendaController")

routes.get("/:token/produto", ProdutoController.index);

routes.post("/:token/produto", ProdutoController.store);

routes.get("/:token/produto/:codDeBarras", ProdutoController.getByCod)

routes.delete("/:token/produto/:codDeBarras", ProdutoController.deleteProd)

routes.put("/:token/produto/:codDeBarras", ProdutoController.updateProd)

routes.get("/:token/vendas", VendaController.index )

routes.post("/:token/vendas", VendaController.store )

module.exports = routes;