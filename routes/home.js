const express = require('express');
const router = express.Router();
const librosController = require('../controllers/librosController');

router.get('/', (req, res) => librosController.getHome(req, res));
router.get('/libros', (req, res) => librosController.getLibros(req, res));
router.get('/libros/nuevo', (req, res) => librosController.getFormLibro(req, res));
router.post('/libros', (req, res) => librosController.addLibro(req, res));
router.get('/libros/:id/editar', (req, res) => librosController.getFormLibroEditar(req, res));
router.put('/libros/:id', (req, res) => librosController.updateLibro(req, res));
router.delete('/libros/:id/eliminar', (req, res) => librosController.deleteLibro(req, res));


module.exports = router;
