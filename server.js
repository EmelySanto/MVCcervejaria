const express = require("express");
const bodyParser = require("body-parser");
const port = 3000;
const cervejaRoutes = require("./routes/cervejasRoutes");

const app = express()
app.use(bodyParser.json())
app.use(cervejaRoutes)


app.listen(port, () => {
    console.log("Servidor express rodando!")
})