const mongoose = require("mongoose")

const ProdutoSchema = new mongoose.Schema(
    {
        codDeBarras:{
            type: Number,
            required: true
        },
        nome:{
            type: String,
            required: true
        },
        qty:{
            type: Number,
            required: true
        },
        preco: {
            type: Number,
            required: true
        }
    }
)

module.exports = mongoose.model("Produto", ProdutoSchema)