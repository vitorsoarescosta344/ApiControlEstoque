const Produto = require("../model/Produto");

class ProdutoController {
  async store(req, res) {
    if(req.params.token === '12345678'){

      let IsValid = Produto.findOne({codDeBarras: res.body.codDeBarras}, (err, res)=>{
        if(res && res.codDeBarras === res.codDeBarras){
          console.log({error: "Produto já existe"})
        }
      })
      if(IsValid){
        return res.status(400).json({error: "Esse produto já existe"})
      }
      const data = await Produto.create(req.body);
      return res.json(data);       
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