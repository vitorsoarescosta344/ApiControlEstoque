const Vendas = require("../model/Venda");

class VendaController {
    async store(req, res) {
        if (req.params.token === '12345678') {

            const { id } = req.body

            const vendas1 = await Vendas.findOne({ id })

            if (!vendas1) {
                const data = await Vendas.create(req.body);
                return res.json(data);
            }

            return res.status(400).json({ error: "Id já existente" })

        }

        return res.status(500).json({ error: "falha na autenticação" })
    }

    async index(req, res) {
        if (req.params.token === '12345678') {
            const data = await Vendas.find({});

            return res.json(data);
        }
        return res.status(500).json({ error: "falha na autenticação" })
    }
}

module.exports = new VendaController();