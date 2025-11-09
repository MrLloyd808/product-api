const { error } = require("console")
const mongoose = require("mongoose")
require("dotenv").config()

async function connect() {
  await mongoose.connect(process.env.DB_URI)
  .then(() => {
    console.log("db ready")
  })
  .catch(error => console.error(error)) 
}

module.exports = connect