const DetalleOrden = require('../models/detallesordenes.models');
const DetallesOrdenesServices = require('../services/detallesordenes.services');

const listar = async (req, res) => {
    const datos = await DetallesOrdenesServices.listarDetalles();
    const lista_adaptada = DetalleOrden.instanciarFilas(datos);
    return res.status(200).json({ mensaje: "Detalles de órdenes listados", resultado: lista_adaptada });
};

const listarDetalle = async (req, res) => {
    const id = req.params.id;
    const datos = await DetallesOrdenesServices.listarUnDetalle(id);
    if (datos.length === 0) {
        return res.status(404).json({ mensaje: "Detalle de orden no encontrado" });
    }
    const lista_adaptada = DetalleOrden.instanciarFilas(datos);
    return res.status(200).json({ mensaje: "Detalle de orden encontrado", resultado: lista_adaptada });
};

const crear = async (req, res) => {
    const peticion = req.body;
    await DetallesOrdenesServices.crearDetalle(peticion);
    const lista_adaptada = DetalleOrden.instanciarFilas([peticion]);
    return res.status(201).json({ mensaje: "Detalle de orden creado", resultado: lista_adaptada });
};

const actualizar = async (req, res) => {
    const id = req.params.id;
    const peticion = req.body;
    const resultado = await DetallesOrdenesServices.actualizarDetalle(id, peticion);
    if (resultado.affectedRows === 0) {
        return res.status(404).json({ mensaje: "Detalle no encontrado para actualizar" });
    }
    const lista_adaptada = DetalleOrden.instanciarFilas([peticion]);
    return res.status(200).json({ mensaje: "Detalle actualizado", resultado: lista_adaptada });
};

const eliminar = async (req, res) => {
    const id = req.params.id;
    const resultado = await DetallesOrdenesServices.eliminarDetalle(id);
    if (resultado.affectedRows === 0) {
        return res.status(404).json({ mensaje: "Detalle no encontrado" });
    }
    return res.status(200).json({ mensaje: "Detalle de orden eliminado correctamente" });
};

module.exports = { listar, listarDetalle, crear, actualizar, eliminar };