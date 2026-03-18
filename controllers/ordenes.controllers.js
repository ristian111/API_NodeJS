const Orden = require('../models/ordenes.models');
const OrdenesServices = require('../services/ordenes.services');

const listar = async (req, res) => {
    const mostrarOrdenes = await OrdenesServices.listarOrdenes();
    const lista_adaptada = Orden.instanciarFilas(mostrarOrdenes);
    return res.status(200).json({ mensaje: "Ordenes listadas", resultado: lista_adaptada });
};

const listarOrden = async (req, res) => {
    const id = req.params.id;
    const mostrarOrden = await OrdenesServices.listarUnaOrden(id);
    if (mostrarOrden.length === 0) {
        return res.status(404).json({ mensaje: "Orden no encontrada" });
    }
    const lista_adaptada = Orden.instanciarFilas(mostrarOrden);
    return res.status(200).json({ mensaje: "Órden encontrada", resultado: lista_adaptada });
};

const crear = async (req, res) => {
    const peticion = req.body;
    await OrdenesServices.crearOrden(peticion);
    const lista_adaptada = Orden.instanciarFilas([peticion]);
    return res.status(201).json({ mensaje: "Órden creada", resultado: lista_adaptada });
};

const actualizar = async (req, res) => {
    const id = req.params.id;
    const peticion = req.body;
    const resultado = await OrdenesServices.actualizarOrden(id, peticion);
    if (resultado.affectedRows === 0) {
        return res.status(404).json({ mensaje: "Órden no encontrada" });
    }
    const lista_adaptada = Orden.instanciarFilas([peticion]);
    return res.status(200).json({ mensaje: "Órden actualizada", resultado: lista_adaptada });
};

const eliminar = async (req, res) => {
    const id = req.params.id;
    const resultado = await OrdenesServices.eliminarOrden(id);
    if (resultado.affectedRows === 0) {
        return res.status(404).json({ mensaje: "Órden no encontrada" });
    }
    return res.status(200).json({ mensaje: "Órden eliminada correctamente" });
};

module.exports = { listar, listarOrden, crear, actualizar, eliminar };