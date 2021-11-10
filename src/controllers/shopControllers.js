const databaseConnection = require("../../config/database")

const getAllProducts = (req, res)=>{

    res.render('pages/see_products')

}

const getHome = (req, res)=>{

    res.render('index')
    
}

module.exports = {getAllProducts, getHome}