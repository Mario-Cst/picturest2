const express = require("express");
const { json, urlencoded } = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
const pins = require('./src/pins/pins.routes.js');
const users = require('./src/users/users.router.js');
const mongoose = require("mongoose");
const auth = require('./src/auth/auth.router');
require('dotenv').config();


const options = { useNewUrlParser: true, useUnifiedTopology: true };

const mongo = mongoose.connect(
  process.env.DB_HOST,
  options
);

mongo.then(() => {
  console.log("Funciona")
})

global.appRoot = path.resolve(__dirname);
const app = express();

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan("dev"));
app.disable("x-powered-by");

app.use('/pins', pins);
app.use('/users', users);
app.use('/auth', auth);


const start = async () => {
  try {
    app.listen(5000, () => {
      console.log(`REST API on http://localhost:5000/api`);
    });
  } catch (e) {
    console.error(e);
  }
};
start();



//Esto era para probar
/* app.get("/test", (request, response) => {
  response.send("Soy un test!");
});

app.post("/miPrimerPost", (request, response) => {
    const body = request.body;
    response.status(200).json(body);
});
app.post("/suma", (request, response) => {
    const body = request.body;
    const suma = body.a + body.b;
    response.status(200).json(suma);
});
app.get("/numero/:numero", (request, response) => {
    const numero = request.params.numero;
    response.status(200).json(numero);
}); */