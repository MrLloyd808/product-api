const express = require("express")
require("dotenv").config()
const connect = require("./DB/connectdb")
const path = require("path")
const ProductRouter = require("./ROUTER/productRoute")

const app = express()
app.use(express.json())
app.use("/products", ProductRouter)
app.use(express.static(path.join(__dirname, "uploads")))

try {
    connect()
    .then(() => {
        app.listen(process.env.PORT, () => {
        console.log("server is listening")
})
})

} catch (error) {
    console.error(error)
}

app.get("/", (req, res) => {
res.send("lost something?")
} )


