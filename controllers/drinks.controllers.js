const Drinks = require("../models/Drinks.model")

module.exports.drinksController = {
    getDrinks: (req, res) => {
        Drinks.find({}, { price: 1, name: 1, _id: 1}).then((d) => {
            res.json(d)
        })
    },
    getDrinksInStock: (req, res) => {
        Drinks.find({ inStock: true }).then((d) => {
            res.json(d)
        })
    },
    getDrinksById: (req, res) => {
        Drinks.findById(req.params.id).then((d) => {
            res.json(d)
        })
    },
    addDrink: (req, res) => {
        Drinks.create({
            name: req.body.name,
            price: req.body.price,
            inStock: req.body.inStock,
            isCoffeine: req.body.isCoffeine,
            volume: req.body.volume,
            description: req.body.description
        }).then((a) => {
            res.json(a)
        })
    },
    deleteDrink: (req, res) => {
        Drinks.findByIdAndDelete(req.params.id).then(() => {
            res.json("Напиток удален")
        })
    },
    patchDrink: (req, res) => {
        Drinks.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            price: req.body.price,
            inStock: req.body.inStock,
            isCoffeine: req.body.isCoffeine,
            volume: req.body.volume,
            description: req.body.description
        }, { new: true }).then((d) => {
            res.json(d)
        })
    }
}