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

const getAddProducts = (req, res)=>{

    res.render('pages/load_products')
    
}

const addNewProduct =(req,res)=>{
    const nameee = req.body
    console.log(nameee.name)
    const {name,category,price,description,stock }= req.body

    databaseConnection.query("INSERT INTO products (name,category,price,description ,stock)VALUES(?,?,?,?,?) ",[name,category,parseFloat(price),description,parseInt(stock)],(error,data)=>{
        if(error){
            console.log("Error al insertar un registro en la DB: " + error)
        }else{
    
            res.render("pages/index")
        }
    })
}

const getLogin = (req, res)=>{

    res.render('pages/login')
    
}

const getHome = (req, res)=>{

    res.render('pages/index')
    
}

module.exports = {getAllProducts, getAddProducts, getHome, getLogin, addNewProduct}