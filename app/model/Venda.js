const mongoose = require("mongoose")

const VendaSchema = new mongoose.Schema(
    {
        id:{
            type: Number,
            required: true,
            unique: true
        },
        valor: {
            type: Number,
            required: true
        }
    }
)

module.exports = mongoose.model("Vendas", VendaSchema)