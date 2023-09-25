const { body } = require("express-validator");

const acceptedGeneros = [
  "Rock",
  "Pop",
  "Blues",
  "Jazz",
  "R&B",
  "Hip-Hop",
  "Country",
  "Electrónica",
  "Reggae",
  "Folk",
  "Clásica",
  "Soul",
  "Metal",
  "Funk",
  "Punk",
  "Indie",
  "Reggaetón",
  "Dance",
  "Alternativa",
  "Latina",
  "Otro",
];

const cancionValidations = {
  cancionChecks: [
    body("titulo")
      .notEmpty()
      .withMessage("Debes ingresar un titulo para la canción")
      .isLength({}),
    body("duracion")
      .notEmpty.withMessage(
        "Debes ingresar una duración (en segundos) para la canción"
      )
      .isLength({}),
    body("genero").custom((value) => {
      if (!acceptedGeneros.includes(value)) {
        throw new Error("Genero no válido");
      }
      return true;
    }),
  ],
};

module.exports = cancionValidations;
