const express = require("express");

const path = require("path");

const databaseConnection = require('../config/database')

const productsRoutes = require('./routes/shopRoutes')

const app = express();

databaseConnection.connect()

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'public')));

app.use('/shop', productsRoutes);

app.listen(3500, () => {
    console.log("Escuchando puerto 3500")
});

//http://localhost:3500/shop/allProducts