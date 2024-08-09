const express = require("express");
const mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
const postRoute = require("./Routes/postRoutes");
app.use("/", postRoute);

app.get("/", (req, res) => {
  res.send("Prueba respuesta del servidor");
});

async function connectToDatabase() {
  try {
    await mongoose.connect(
      "mongodb+srv://capiedrahita37:EV88qisB3mBSzbti@cluster0.ewxr9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    console.log("Conexión exitosa a MongoDB");
  } catch (err) {
    console.error("Error de conexión a MongoDB", err);
  }
}

connectToDatabase();

app.listen(3002, () => {
  console.log("Servidor escuchando en el puerto 3002");
});
