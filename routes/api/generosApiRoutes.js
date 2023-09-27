const express = require("express");
const apiControllers = require("../../controllers/api/generosApiController");

const router = express.Router();

//@GET - /api/generos
router.get("/", apiControllers.getAll);

module.exports = router;