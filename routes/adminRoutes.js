const express = require('express');
const router = express.Router();

const adminController = require('../controllers/adminController');

// @GET /  "admin"  en realidad esta llegando al index o home
router.get('/', adminController.getAdmin);

// @POST /admin
router.post('/', adminController.postCancion);

// @GET /crear
router.get('/crear', adminController.getAdminCreate);

// @GET /admin/:id
router.get('/:id', adminController.getAdminEdit);

module.exports = router;