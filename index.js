const express = require("express")
require("dotenv").config()
const connect = require("./DB/connectdb")
const path = require("path")
const cors = require("cors")
const ProductRouter = require("./ROUTER/productRoute")

const app = express()
app.use(express.json())
app.use(cors())
app.use("/products", ProductRouter)

try {
    connect()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
        console.log("server is listening")
})
})

} catch (error) {
    console.error(error)
}

app.get("/", (req, res) => {
res.send("lost something?")
} )


