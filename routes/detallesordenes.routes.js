const express = require('express');
const ctrl = require('../controllers/detallesordenes.controllers');

const router = express.Router();

router.get('/', ctrl.listar);
router.get('/:id', ctrl.listarDetalle);
router.post('/', ctrl.crear);
router.put('/:id', ctrl.actualizar);
router.delete('/:id', ctrl.eliminar);

module.exports = router;