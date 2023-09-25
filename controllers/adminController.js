const { Canciones, Albumes, Artistas, Generos } = require("../database/models");

const controller = {
  getAdmin: async (req, res) => {
    try {
      const canciones = await Canciones.findAll({
        raw: true,
      });

      res.render("admin", { canciones });
    } catch (error) {
      res.render("admin", { canciones: [] });
      console.log(error);
    }
  },

  getAdminCreate: async (req, res) => {
    //res.sendFile(path.join(__dirname, '../views/admin-create.html'));
    res.render("admin-create");
  },

  postCancion: async (req, res) => {
    const { titulo, duracion, genero, album, artista, apellido_artista } = req.body;
    console.log(req.body)
    try {
        // Verificar si el artista existe por su nombre y apellido
        let artistaExistente = await Artistas.findOne({ where: { nombre: artista, apellido: apellido_artista } });

        // Si el artista no existe, créalo
        if (!artistaExistente) {
            artistaExistente = await Artistas.create({ nombre: artista, apellido: apellido_artista });
        }

        // Verificar si el álbum existe por su nombre
        let albumExistente = await Albumes.findOne({ where: { nombre: album } });

        // Si el álbum no existe, créalo con una duración inicial en segundos
        if (!albumExistente) {
            albumExistente = await Albumes.create({ nombre: album, duracion: 0 });
        }

        // Luego, crea la canción asociándola al álbum existente (o recién creado)
        const nuevaCancion = await Canciones.create({
            titulo,
            duracion, // Almacena la duración tal como la ingresó el usuario (en segundos)
            GeneroId: genero, // Asume que GeneroId es el campo de clave foránea en la tabla Canciones
            AlbumId: albumExistente.id,
            ArtistaId: artistaExistente.id,
        });

        // Envía una respuesta de éxito
        res.status(201).send("Canción creada con éxito");
    } catch (error) {
        console.error(error);
        // Manejar el error y enviar una respuesta de error si es necesario
        res.status(500).send("Error al crear la canción");
    }
  },

};

module.exports = controller;
