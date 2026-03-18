const Producto = require('../models/productos.models');
const ProductosServices = require('../services/productos.services');

const listar = async (req, res) => {
    const datos = await ProductosServices.listarProductos();
    const lista_adaptada = Producto.instanciarFilas(datos);
    return res.status(200).json({ mensaje: "Productos listados", resultado: lista_adaptada });
};

const listarProducto = async (req, res) => {
    const id = req.params.id;
    const datos = await ProductosServices.listarUnProducto(id);
    if (datos.length === 0) {
        return res.status(404).json({ mensaje: "Producto no encontrado" });
    }
    const lista_adaptada = Producto.instanciarFilas(datos);
    return res.status(200).json({ mensaje: "Producto encontrado", resultado: lista_adaptada });
};

const crear = async (req, res) => {
    const peticion = req.body;
    await ProductosServices.crearProducto(peticion);
    const lista_adaptada = Producto.instanciarFilas([peticion]);
    return res.status(201).json({ mensaje: "Producto creado", resultado: lista_adaptada });
};

const actualizar = async (req, res) => {
    const id = req.params.id;
    const peticion = req.body;
    const resultado = await ProductosServices.actualizarProducto(id, peticion);
    if (resultado.affectedRows === 0) {
        return res.status(404).json({ mensaje: "Producto no encontrado" });
    }
    const lista_adaptada = Producto.instanciarFilas([peticion]);
    return res.status(200).json({ mensaje: "Producto actualizado", resultado: lista_adaptada });
};

const eliminar = async (req, res) => {
    const id = req.params.id;
    const resultado = await ProductosServices.eliminarProducto(id);
    if (resultado.affectedRows === 0) {
        return res.status(404).json({ mensaje: "Producto no encontrado" });
    }
    return res.status(200).json({ mensaje: "Producto eliminado" });
};

module.exports = { listar, listarProducto, crear, actualizar, eliminar };