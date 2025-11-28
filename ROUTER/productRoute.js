const express = require("express")
const { PostProduct, RetreiveProducts, GetSingleProduct } = require("../CONTROLLERS/productController")
const upload = require("../UTILS/multerHandler")
const router = express.Router()



// routes 
router.post("/upload", upload.single("image"), PostProduct)
router.get("/all", RetreiveProducts)
router.get("/:id", GetSingleProduct)

module.exports = router