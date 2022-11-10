const express = require("express")
const app = express()
const mongoose = require("mongoose")
const port = 3000
app.use(express.json())

mongoose.connect("mongodb+srv://Ayub:Salavdi1994@cluster0.qdi4tkn.mongodb.net/cofee_soul?retryWrites=true&w=majority")

app.use(require("./routes/drinks.route"))

app.listen(port, () => {
    console.log("Port success")
})


