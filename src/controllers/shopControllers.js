const databaseConnection = require("../../config/database")

const getAllProducts = (req, res)=>{
    databaseConnection.query("SELECT * FROM products", (error, data) => {
        if(error) {
            console.log(error)
        } else {
            res.render('pages/see_products', {
                products: data
            })
        }
    })

}

const getHome = (req, res)=>{

    res.render('index')
    
}

module.exports = {getAllProducts, getHome}