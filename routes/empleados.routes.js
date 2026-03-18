const express = require('express');
const ctrl = require('../controllers/empleados.controllers');

const router = express.Router();

router.get('/', ctrl.listar);
router.get('/:id', ctrl.listarEmpleado);
router.post('/', ctrl.crear);
router.put('/:id', ctrl.actualizar);
router.delete('/:id', ctrl.eliminar);

module.exports = router;