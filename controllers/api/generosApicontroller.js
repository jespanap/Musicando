const { Generos, Canciones } = require("../../database/models");

module.exports = {
  getAll: async (req, res) => {
    try {
      const generosConCanciones = await Generos.findAll({
          include: [{
              model: Canciones,
              attributes: {
                  exclude: ["duracion", "genero_id", "album_id", "artista_id"]
              },
          }],


      });

      res.json({
          generos: generosConCanciones,
      });
  } catch (error) {
      console.error('Error al obtener géneros con canciones:', error);
      res.status(500).json({
          error: 'Ha ocurrido un error al obtener géneros con canciones',
      });
  }
  }
};
