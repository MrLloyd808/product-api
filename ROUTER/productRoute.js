const express = require("express")
const { PostProduct, RetreiveProducts, GetSingleProduct } = require("../CONTROLLERS/productController")
const upload = require("../UTILS/multerHandler")
const router = express.Router()

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads') 
    },
    filename: (req, file, cb) => {
       const filebytes = crypto.randomBytes(7).toString("hex")
       cb(null, file.originalname + filebytes)
    }
})

const upload = multer({
    storage
})

// routes 
router.post("/upload", upload.single("image"), PostProduct)
router.get("/all", RetreiveProducts)
router.get("/:id", GetSingleProduct)

module.exports = router
