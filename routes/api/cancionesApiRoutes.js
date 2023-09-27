const express = require("express");
const apiControllers = require("../../controllers/api/cancionesApiController");

const router = express.Router();

//@GET - /api/canciones
router.get("/", apiControllers.getAll);
//@GET - /api/canciones/:id
router.get("/:id", apiControllers.getCancion);

module.exports = router;