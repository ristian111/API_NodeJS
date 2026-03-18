const Pago = require('../models/pagos.models');
const PagosServices = require('../services/pagos.services');

const listar = async (req, res) => {
    const mostrarPagos = await PagosServices.listarPagos();
    const lista_adaptada = Pago.instanciarFilas(mostrarPagos);
    return res.status(200).json({ mensaje: "Pagos listados", resultado: lista_adaptada });
};

const listarPago = async (req, res) => {
    const id = req.params.id;
    const mostrarPago = await PagosServices.listarUnPago(id);
    if (mostrarPago.length === 0) {
        return res.status(404).json({ mensaje: "Pago no encontrado" });
    }
    const lista_adaptada = Pago.instanciarFilas(mostrarPago);
    return res.status(200).json({ mensaje: "Pago encontrado", resultado: lista_adaptada });
};

const crear = async (req, res) => {
    const peticion = req.body;
    await PagosServices.crearPago(peticion);
    const lista_adaptada = Pago.instanciarFilas([peticion]);
    return res.status(201).json({ mensaje: "Pago registrado", resultado: lista_adaptada });
};

const actualizar = async (req, res) => {
    const id = req.params.id;
    const peticion = req.body;
    const resultado = await PagosServices.actualizarPago(id, peticion);
    if (resultado.affectedRows === 0) {
        return res.status(404).json({ mensaje: "Pago no encontrado para actualizar" });
    }
    const lista_adaptada = Pago.instanciarFilas([peticion]);
    return res.status(200).json({ mensaje: "Pago actualizado", resultado: lista_adaptada });
};

const eliminar = async (req, res) => {
    const id = req.params.id;
    const resultado = await PagosServices.eliminarPago(id);
    if (resultado.affectedRows === 0) {
        return res.status(404).json({ mensaje: "Pago no encontrado" });
    }
    return res.status(200).json({ mensaje: "Pago eliminado correctamente" });
};

module.exports = { listar, listarPago, crear, actualizar, eliminar };