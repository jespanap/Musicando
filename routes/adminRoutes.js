const express = require('express');
const router = express.Router();

const adminController = require('../controllers/adminController');

// @GET /  "admin"  en realidad esta recibiendo el index o home
router.get('/', adminController.getAdmin);

// @POST /admin
router.post('/', adminController.postCancion);

// @GET /crear
router.get('/crear', adminController.getAdminCreate); 



module.exports = router;