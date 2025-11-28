require("dotenv")
const crypto = require("crypto")
const multer = require("multer")
const multerS3 = require("multer-s3")
const s3 = require("./s3client")

const upload = multer({
    storage: multerS3({
        s3,
        bucket: process.env.AWS_BUCKET_NAME,
        acl: "public-read", 
        key: (req, file, cb) => {
          const filebytes = crypto.randomBytes(7).toString("hex")
          cb(null, filebytes + file.originalname)
        }
    })
})

module.exports = upload