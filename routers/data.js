const express = require('express');
const router = express.Router();
var path = require('path');

const Controller = require('../controllers/funcionesdb');
const controller = require('../controllers/funcionesdb');

//carpetas publica 
router.use(express.static(path.join(__dirname, '../public')));
router.use('/reg', express.static(path.join(__dirname, '../public')));
router.use('/inicio', express.static(path.join(__dirname, '../public')));
router.use('/inicio/l/reg',express.static(path.join(__dirname, '../public')));



// Direccionamiento 

// pagina de bienvenida 
router.get('/',Controller.bienvenida);
router.get('/reg',Controller.ver_reg);
router.post('/reg/add',Controller.add_reg);


// ----paginas de la libreria ----
router.get('/inicio',Controller.inicio);
router.post('/user',Controller.val_user);
// cabecera 
router.get('/inicio/c',Controller.coleccion);
router.get('/inicio/r',Controller.recom);
router.get('/inicio/l',Controller.libros);
router.get('/inicio/l/reg',Controller.reg_libros);
router.post('/inicio/l/reg/add',Controller.add_libros);






module.exports = router;