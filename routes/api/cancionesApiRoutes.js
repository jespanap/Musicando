const express = require("express");
const apiControllers = require("../../controllers/api/cancionesApiController");

const router = express.Router();

//@GET - /api/canciones
router.get("/", apiControllers.getAll);


module.exports = router;