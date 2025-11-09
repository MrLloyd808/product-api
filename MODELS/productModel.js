const mongoose  = require("mongoose")

const productSchema = new mongoose.Schema({
    name: String,
    images: [String],
    category: String,
    price: String
})

module.exports = mongoose.model("product", productSchema)