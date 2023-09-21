const express = require('express');
const router = express.Router();

const adminController = require('../controllers/adminController');

// @GET /admin
router.get('/', adminController.getAdmin);

// @POST /admin
router.post('/', adminController.postCancion);

// @GET /admin/crear
router.get('/crear', adminController.getAdminCreate);

// @GET /admin/:id
router.get('/:id', adminController.getAdminEdit);

module.exports = router;