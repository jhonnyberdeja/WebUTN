const express = require("express");

const app = express();

const path = require("path");

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'public')));

app.get("/", (req, res) => {
    res.render("index.ejs")
});

app.listen(3500, () => {
    console.log("Escuchando puerto 3500")
});