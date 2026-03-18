const db = require('../config/db');

const ProductosServices = {
    async listarProductos() {
        const [filas] = await db.query('SELECT * FROM productos');
        return filas;
    },

    async listarUnProducto(id) {
        const [filas] = await db.query('SELECT * FROM productos WHERE id_producto = ?', [id]);
        return filas;
    },

    async crearProducto(body) {
        const values = [
            body.nombreProducto,
            body.escala,
            body.cantidad,
            body.precioVenta,
            body.MSRP,
            body.id_lineaProducto
        ];
        const sql = 'INSERT INTO productos (nombreProducto, escala, cantidad, precioVenta, MSRP, id_lineaProducto) VALUES (?, ?, ?, ?, ?, ?)';
        const [resultado] = await db.query(sql, values);
        return resultado;
    },

    async actualizarProducto(id, body) {
        const values = [
            body.nombreProducto,
            body.escala,
            body.cantidad,
            body.precioVenta,
            body.MSRP,
            body.id_lineaProducto,
            id
        ];
        const sql = 'UPDATE productos SET nombreProducto = ?, escala = ?, cantidad = ?, precioVenta = ?, MSRP = ?, id_lineaProducto = ? WHERE id_producto = ?';
        const [resultado] = await db.query(sql, values);
        return resultado;
    },

    async eliminarProducto(id) {
        const sql = 'DELETE FROM productos WHERE id_producto = ?';
        const [resultado] = await db.query(sql, [id]);
        return resultado;
    }
};

module.exports = ProductosServices;