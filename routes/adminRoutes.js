const express = require('express');
const router = express.Router();

const adminController = require('../controllers/adminController');

// @GET /  "admin"  en realidad esta recibiendo el index o home
router.get('/', adminController.getAdmin);

// @POST
router.post('/', adminController.postCancion);

// @GET /crear 
router.get('/crear', adminController.getAdminCreate); 

// @GET /editar-cancion/:id -- Aqui renderizo el editar
router.get('/editar-cancion/:id', adminController.getAdminEdit); 

// @PUT /editar   -- Aqui se hace la magia del editar 
router.put('/', adminController.putCancion);

// @DELETE 
router.delete('/canciones/:id', adminController.deleteCancion);



module.exports = router;