const express = require('express');
const ctrl = require('../controllers/oficinas.controllers');

const router = express.Router();

router.get('/', ctrl.listar);
router.get('/:id', ctrl.listarOficina);
router.post('/', ctrl.crear);
router.put('/:id', ctrl.actualizar);
router.delete('/:id', ctrl.eliminar);

module.exports = router;