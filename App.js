// App.js
const express = require('express'); // Importa Express para crear el servidor
const mongoose = require('mongoose'); // Importa Mongoose para interactuar con MongoDB
const bodyParser = require('body-parser'); // Importa Body-Parser para manejar datos en las solicitudes
const app = express(); // Crea una instancia de la aplicación Express

app.use(bodyParser.json()); // Configura Body-Parser para procesar datos JSON

// Importa las rutas de autenticación
const authRoute = require('./Routes/Log');

// Define la ruta base para las rutas de autenticación
app.use('/Log', authRoute);

// Endpoint raíz
// Ruta: GET /
// Responde con un mensaje de prueba
app.get('/', (req, res) => {
  res.send('Prueba respuesta del servidor');
});

// Función para conectar con la base de datos MongoDB
async function connectToDatabase() {
  try {
    // Conecta a MongoDB usando la URL de conexión
    await mongoose.connect('mongodb+srv://capiedrahita37:EV88qisB3mBSzbti@cluster0.ewxr9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
    console.log('Conexión exitosa a MongoDB'); // Mensaje de éxito
  } catch (err) {
    console.error('Error de conexión a MongoDB', err); // Mensaje de error
  }
}

connectToDatabase(); // Llama a la función para conectar a la base de datos

// Configura el servidor para escuchar en el puerto 3002
app.listen(3002, () => {
  console.log('Servidor escuchando en el puerto 3002'); // Mensaje cuando el servidor está en funcionamiento
});
