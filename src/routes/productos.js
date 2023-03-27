const express = require('express');
const router= express.Router();
const productosController = require('../controllers/productosController');
const multer=require('../libs/multer');

router.post('/',multer.single('imagen'), productosController.añadirProducto);
router.get('/', productosController.verProductos);
router.get('/:id', productosController.verProductoPorId);
router.put('/:id',multer.single('imagenx'), productosController.actualizarProducto);
router.delete('/:id', productosController.eliminarProducto);

module.exports=router;  
