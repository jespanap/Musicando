const express = require('express');
const path = require('path');
const methodOverride = require('method-override');

const app = express();

// Configurar EJS como motor de vistas
app.set('view engine', 'ejs');

//middlewares
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));

//implementando o requiriendo la ruta main
const adminRoutes = require('./routes/adminRoutes');
//definiendo la ruta main
app.use(adminRoutes);

//Carpetas
app.set('views', [
  path.join(__dirname, './views/canciones'),
])

/* --- API Routers --- */
const cancionesApiRoutes = require("./routes/api/cancionesApiRoutes");
const generosApiRoutes = require("./routes/api/generosApiRoutes")

//REST API ENDPOINTS
app.use('/api/canciones', cancionesApiRoutes);
app.use('/api/generos', generosApiRoutes);




app.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000");
  });