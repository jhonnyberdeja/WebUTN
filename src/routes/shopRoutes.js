const express = require('express')
const {getAllProducts, getHome} = require('../controllers/shopControllers')

const productsRoutes = express.Router()

productsRoutes.get('/allProducts', getAllProducts)

productsRoutes.get('/', getHome)

module.exports = productsRoutes