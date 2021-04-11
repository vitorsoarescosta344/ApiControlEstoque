const Produto = require("../model/Produto");

class ProdutoController {
  async store(req, res) {
    if(req.params.token === '12345678'){
        const result = Produto.findOne({codDeBarras: 456343239}).lean()
        if(result){
          const data = await Produto.create(req.body);
          return res.json(data);
        }
        return res.status(400).json({error: "O produto já existe"})


        
    }

    return res.status(500).json({ error: "falha na autenticação" })
  }
  async index(req, res) {
    if(req.params.token === '12345678'){
        const data = await Produto.find({});

        return res.json(data);
    }
    return res.status(500).json({ error: "falha na autenticação" })
  }

  async getByCod(req, res) {
    if(req.params.token === '12345678'){
        const data = await Produto.findOne({codDeBarras: req.params.codDeBarras});

        return res.json(data);
    }
    return res.status(500).json({ error: "falha na autenticação" })
  }
}

module.exports = new ProdutoController();