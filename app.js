const express = require('express');
const path = require('path');

const app = express();

//implementando o requiriendo la ruta "main"
const adminRoutes = require('./routes/adminRoutes');
//definiendo la ruta "main"
app.use('/admin', adminRoutes);


app.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000");
  });