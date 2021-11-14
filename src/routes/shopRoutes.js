const express = require('express')
const {getAllProducts, getAddProducts, getHome, addNewProduct} = require('../controllers/shopControllers')

const productsRoutes = express.Router()

productsRoutes.get('/allProducts', getAllProducts)

productsRoutes.get('/addProducts', getAddProducts)

productsRoutes.post("/addProduct", addNewProduct)

productsRoutes.get('/', getHome)

module.exports = productsRoutes