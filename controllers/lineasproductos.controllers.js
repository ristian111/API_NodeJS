const LineaProducto = require('../models/lineasproductos.models');
const LineasProductosServices = require('../services/lineasproductos.services');

const listar = async (req, res) => {
    const datos = await LineasProductosServices.listarLineas();
    const lista_adaptada = LineaProducto.instanciarFilas(datos);
    return res.status(200).json({ mensaje: "Líneas de productos listadas", resultado: lista_adaptada });
};

const listarLinea = async (req, res) => {
    const id = req.params.id;
    const datos = await LineasProductosServices.listarUnaLinea(id);
    if (datos.length === 0) {
        return res.status(404).json({ mensaje: "Línea de producto no encontrada" });
    }
    const lista_adaptada = LineaProducto.instanciarFilas(datos);
    return res.status(200).json({ mensaje: "Línea de producto encontrada", resultado: lista_adaptada });
};

const crear = async (req, res) => {
    const peticion = req.body;
    await LineasProductosServices.crearLinea(peticion);
    const lista_adaptada = LineaProducto.instanciarFilas([peticion]);
    return res.status(201).json({ mensaje: "Línea de producto creada", resultado: lista_adaptada });
};

const actualizar = async (req, res) => {
    const id = req.params.id;
    const peticion = req.body;
    const resultado = await LineasProductosServices.actualizarLinea(id, peticion);
    if (resultado.affectedRows === 0) {
        return res.status(404).json({ mensaje: "Línea de producto no encontrada" });
    }
    const lista_adaptada = LineaProducto.instanciarFilas([peticion]);
    return res.status(200).json({ mensaje: "Línea de producto actualizada", resultado: lista_adaptada });
};

const eliminar = async (req, res) => {
    const id = req.params.id;
    const resultado = await LineasProductosServices.eliminarLinea(id);
    if (resultado.affectedRows === 0) {
        return res.status(404).json({ mensaje: "Línea de producto no encontrada" });
    }
    return res.status(200).json({ mensaje: "Línea de producto eliminada" });
};

module.exports = { listar, listarLinea, crear, actualizar, eliminar };