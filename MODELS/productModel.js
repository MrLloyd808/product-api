const mongoose  = require("mongoose")

const productSchema = new mongoose.Schema({
    name: String,
    url: String,
    key: String,
    category: String,
    price: String
})

module.exports = mongoose.model("product", productSchema)