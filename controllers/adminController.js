const { Canciones, Albumes, Artistas, Generos } = require("../database/models");

const controller = {
  getAdmin: async (req, res) => {
    try {
      // Obtén todas las canciones con sus asociaciones
      const cancionesList = await Canciones.findAll({
        include: [
          { model: Generos },
          { model: Artistas },
          { model: Albumes },
        ],
      });

      // Obtén listas de géneros, artistas y álbumes
      const generosList = await Generos.findAll();
      const artistasList = await Artistas.findAll();
      const albumesList = await Albumes.findAll();

      res.render('admin', {
        title: 'Listado De Canciones',
        canciones: cancionesList,
        generos: generosList,
        artistas: artistasList,
        albumes: albumesList,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: 'error', message: 'Error al cargar la página de administración' });
    }
  },
  

  getDetail: async (req, res) => {
    try {
      const { id } = req.params;

      // Busca la canción por su ID
      const cancion = await Canciones.findByPk(id, {
        include: [
          // Incluye las asociaciones necesarias para obtener los nombres de género, artista y álbum
          { model: Generos },
          { model: Artistas },
          { model: Albumes },
        ],
      });

      if (!cancion) {
        return res.status(404).json({ message: 'Canción no encontrada' });
      }

      // Renderiza la vista "admin-detail" y pasa los datos de la canción
      res.render('admin-detail', { cancion });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: 'error', message: 'Error al cargar el detalle de la canción' });
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
