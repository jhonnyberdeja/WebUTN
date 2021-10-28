const express = require("express")

const app = express()

app.get("/", (req, res) => {
    res.send("holaaaa")
})

app.listen(5500, () => {
    console.log(`Example app listening at 5500`)
  })