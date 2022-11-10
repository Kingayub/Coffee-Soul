const mongoose = require("mongoose")

const DrinksSchema = mongoose.Schema({
    name: String,
    price: Number,
    inStock: Boolean,
    isCoffeine: Boolean,
    volume: Number,
    description: String
})

const Drinks = mongoose.model('drink', DrinksSchema)

module.exports = Drinks