const db = require('../config/db');

const DetallesOrdenesServices = {
    async listarDetalles() {
        const [filas] = await db.query('SELECT * FROM detallesordenes');
        return filas;
    },

    async listarUnDetalle(id) {
        const [filas] = await db.query('SELECT * FROM detallesordenes WHERE id_detallesordene = ?', [id]);
        return filas;
    },

    async crearDetalle(body) {
        const values = [
            body.cantidadPedida,
            body.valorUnitario,
            body.ordenEntrega,
            body.id_orden,
            body.id_producto
        ];
        const sql = 'INSERT INTO detallesordenes (cantidadPedida, valorUnitario, ordenEntrega, id_orden, id_producto) VALUES (?, ?, ?, ?, ?)';
        const [resultado] = await db.query(sql, values);
        return resultado;
    },

    async actualizarDetalle(id, body) {
        const values = [
            body.cantidadPedida,
            body.valorUnitario,
            body.ordenEntrega,
            body.id_orden,
            body.id_producto,
            id
        ];
        const sql = 'UPDATE detallesordenes SET cantidadPedida = ?, valorUnitario = ?, ordenEntrega = ?, id_orden = ?, id_producto = ? WHERE id_detallesordene = ?';
        const [resultado] = await db.query(sql, values);
        return resultado;
    },

    async eliminarDetalle(id) {
        const sql = 'DELETE FROM detallesordenes WHERE id_detallesordene = ?';
        const [resultado] = await db.query(sql, [id]);
        return resultado;
    }
};

module.exports = DetallesOrdenesServices;