const express = require('express');
const path = require('path');
const methodOverride = require('method-override');

const app = express();

// Configurar EJS como motor de vistas
app.set('view engine', 'ejs');

//implementando o requiriendo la ruta "main"
const adminRoutes = require('./routes/adminRoutes');
//definiendo la ruta "main"
app.use('/admin', adminRoutes);

//middlewares
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))


app.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000");
  });