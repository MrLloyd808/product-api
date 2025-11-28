const mongoose  = require("mongoose")

const productSchema = new mongoose.Schema({
    name: String,
    image: {
         url: String,
         key: String,
    },
    category: String,
    price: String
},
 {
    timestamps: true
})

module.exports = mongoose.model("product", productSchema)