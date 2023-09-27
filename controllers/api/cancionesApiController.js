const { Canciones, Generos, Albumes, Artistas } = require("../../database/models");

module.exports = {
  getAll: async (req, res) => {
    try {
      const cancionesConNombres = await Canciones.findAll({
        include: [
          { model: Artistas },
          { model: Albumes },
          { model: Generos },
        ],
      });

      const response = {
        count: cancionesConNombres.length,
        canciones: cancionesConNombres.map((cancion) => ({
          id: cancion.id,
          titulo: cancion.titulo,
          duracion: cancion.duracion,
          genero: cancion.Genero.name, 
          album: cancion.Albume.nombre, 
          artista: `${cancion.Artista.nombre} ${cancion.Artista.apellido}`, 
        })),
      };

      res.json(response);
    } catch (error) {
      console.error("Error al obtener todas las canciones:", error);

      res.status(500).json({
        error: "Ha ocurrido un error al obtener todas las canciones",
      });
    }
  },

  getCancion: async (req, res) => {
    const { id } = req.params; // Obtener el ID de la canción de los parámetros de la URL
    try {
      const cancion = await Canciones.findByPk(id, {
        include: [
          { model: Artistas },
          { model: Albumes },
          { model: Generos },
        ],
      });

      if (!cancion) {
        return res.status(404).json({ error: "Canción no encontrada" });
      }

      const response = {
        id: cancion.id,
        titulo: cancion.titulo,
        duracion: cancion.duracion,
        genero: cancion.Genero.name, 
        album: cancion.Albume.nombre, 
        artista: `${cancion.Artista.nombre} ${cancion.Artista.apellido}`, 
      };

      res.json(response);
    } catch (error) {
      console.error("Error al obtener la canción por ID:", error);
      res.status(500).json({
        error: "Ha ocurrido un error al obtener la canción por ID",
      });
    }
  },
};
