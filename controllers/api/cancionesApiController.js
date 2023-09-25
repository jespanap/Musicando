const { Canciones } = require("../../database/models");

module.exports = {
  getAll: async (req, res) => {
    try {
      const canciones = await Canciones.findAll({
        raw: true,
      });

      const response = {
        count: canciones.length,
        users: canciones.map((canciones) => ({
          id: canciones.id,
          titulo: canciones.titulo,
          duracion: canciones.duracion,
          genero: canciones.genero_id,
          album: canciones.album_id,
          artista: canciones.artista_id,
        })),
      };

      res.json(response);
    } catch (error) {
      console.error("Error al obtener todas las canciones:", error);
      res.status(500).json({
        error: "Ha ocurrido un error al obtener todos las canciones",
      });
    }
  },
};
