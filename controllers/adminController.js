const { Canciones, Albumes, Artistas, Generos } = require("../database/models");

const controller = {
  getAdmin: async (req, res) => {
    try {
      const generosList = await Generos.findAll();
      const artistasList = await Artistas.findAll();
      const albumesList = await Albumes.findAll();

      const canciones = await Canciones.findAll({
        raw: true,
      });

      res.render("admin", { canciones, generosList, artistasList, albumesList });
    } catch (error) {
      res.render("admin", { canciones: [], generosList: [], artistasList: [], albumesList: [] });
      console.log(error);
    }
  },

  getAdminCreate: async (req, res) => {
    //res.sendFile(path.join(__dirname, '../views/admin-create.html'));
    try {
      const generosList = await Generos.findAll();
      const artistasList = await Artistas.findAll();
      const albumesList = await Albumes.findAll();
      res.render('admin-create', { title: 'Crear Nueva Canción', generos: generosList, artistas: artistasList, albumes: albumesList });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: 'error', message: 'Error al obtener la vista de creación' });
    }
    //res.render("admin-create");
  },

  postCancion: async (req, res) => {
    const nuevaCancion = {
      titulo: req.body.titulo,
      duracion: req.body.duracion,
      genero_id: req.body.genero,
      album_id: req.body.album,
      artista_id: req.body.artista,
    };

    try {
      const datos = await Canciones.create(nuevaCancion);
      console.log(datos);
    } catch (error) {
      console.log(error);
    }

    res.send('Canción creada con exito');
  },

  getAdminEdit: async (req, res) => {
    try {
      const cancion = await Canciones.findByPk(req.params.id);

      if (!cancion) {
        return res.status(404).json({ message: 'Canción no encontrada' });
      }

      // Obtén otras listas necesarias, como generosList, artistasList, albumesList
      const generosList = await Generos.findAll();
      const artistasList = await Artistas.findAll();
      const albumesList = await Albumes.findAll();

      res.render('admin-edit', {
        title: 'Editar Canción',
        cancion,
        generos: generosList,
        artistas: artistasList,
        albumes: albumesList,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: 'error', message: 'Error al cargar la canción para editar' });
    }
  },

  putCancion: async (req, res) => {
    console.log(req.body);

    const newValues = req.body;

    try {
      await Canciones.update(newValues, {
        where: {
          id: req.body.id
        }
      });

      res.redirect('/');
    } catch (error) {
      res.send('No se pudo actualizar!')
      console.log(error);
    }
  },

  deleteCancion: async (req, res) => {
    const { id } = req.params;
    const deleteRowCount = await Canciones.destroy({
      where: {
        id: id
      }
    })
    res.json({
      message: 'Cancion eliminada correctamente',
      count: deleteRowCount
    })

  }


};

module.exports = controller;
