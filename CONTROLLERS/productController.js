const productSchema = require("../MODELS/productModel")
const path = require("path")

const product = productSchema

 const PostProduct = async (req, res) => {
    try {
        const {name, category, price} = req.body

        if (!req.file || !name || !category || !price) return res.status(400).json({
            success: false,
            message: "invalid credentials"
        })
        
        const newProduct = await product.create({
            name,
            category,
            price,
            image: {
                url: req.file.location,
                key: req.file.key
            }
        
        })

        res.status(201).json({
            success: true,
            message: "product saved successfully",
            newProduct
        })


    } catch (error) {
        res.status(500).json({
            success: false,
            message: "something went wrong in the server"
        })
    }
}

const RetreiveProducts = async (req, res) => {
    try {
        const products = await product.find()

        if (!products || products.length <= 0 )return res.status(404).json({
            success: false,
            message: 'products unavailable'
        })

        res.status(200).json({
            success: true,
            message: "here is a list of all available products",
            products
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "something went wrong in the server"
        })
    }
}

const GetSingleProduct = async (req, res) => {
    try {
        const { name } = req.params
        if (!name) return res.status(400).json({
            success: false,
            message: "field is required"
        })

        const singleProduct = await product.findOne({name})

        if (!singleProduct) return res.status(404).json({
            success: false,
            message: "product does not exist"
        })

        res.status(200).json({
            success: true,
            message: "here is the product",
            singleProduct
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "something went wrong in the server"
        })
    }
}

module.exports = {
       PostProduct,
       RetreiveProducts,
       GetSingleProduct
}