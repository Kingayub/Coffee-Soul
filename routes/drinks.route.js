const { drinksController } = require("../controllers/drinks.controllers")
const { Router } = require("express")
const route = Router()
route.get('/drinks', drinksController.getDrinks)
route.get('/drinks/in', drinksController.getDrinksInStock)
route.get('/drinks/:id', drinksController.getDrinksById)
route.delete('/drinks/:id', drinksController.deleteDrink)
route.post('/drinks', drinksController.addDrink)
route.patch('/drinks/:id', drinksController.patchDrink)

module.exports = route
