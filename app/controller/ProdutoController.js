const Produto = require("../model/Produto");

class ProdutoController {
  async store(req, res) {
    if(req.params.token === '12345678'){

      const {codDeBarras} = req.body

      const produto1 = await Produto.findOne({codDeBarras})

      if (!produto1){
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

  async deleteProd(req, res){
    if(req.params.token === '12345678'){
      const data = await Produto.deleteOne({codDeBarras: req.params.codDeBarras})

      return res.json({success: "Produto deletado com sucesso"})
    }
    return res.status(500).json({error: "falha na autenticação"})
  }
  async updateProd(req, res){
    if(req.params.token === '12345678'){
      const data = await Produto.findOneAndUpdate({codDeBarras: req.params.codDeBarras}, req.body, {upsert: true})

      return res.json({success: "Produto atualizado com sucesso"})
    }
    return res.status(500).json({error: "falha na autenticação"})
  }
}

module.exports = new ProdutoController();