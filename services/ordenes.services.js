const db = require('../config/db');

const OrdenesServices = {
    async listarOrdenes() {
        const [filas] = await db.query('SELECT * FROM ordenes');
        return filas;
    },

    async listarUnaOrden(id_orden) {
        const [filas] = await db.query('SELECT * FROM ordenes WHERE id_orden = ?', [id_orden]);
        return filas;
    },

    async crearOrden(body) {
        const values = [
            body.fechaRecibido,
            body.fechaLimiteEntrega,
            body.fechaEntrega,
            body.estado,
            body.observacion,
            body.id_cliente
        ];
        const sql = 'INSERT INTO ordenes (fechaRecibido, fechaLimiteEntrega, fechaEntrega, estado, observacion, id_cliente) VALUES (?, ?, ?, ?, ?, ?)';
        const [resultado] = await db.query(sql, values);
        return resultado;
    },

    async actualizarOrden(id_orden, body) {
        const values = [
            body.fechaRecibido,
            body.fechaLimiteEntrega,
            body.fechaEntrega,
            body.estado,
            body.observacion,
            body.id_cliente,
            id_orden
        ];
        const sql = 'UPDATE ordenes SET fechaRecibido = ?, fechaLimiteEntrega = ?, fechaEntrega = ?, estado = ?, observacion = ?, id_cliente = ? WHERE id_orden = ?';
        const [resultado] = await db.query(sql, values);
        return resultado;
    },

    async eliminarOrden(id_orden) {
        const sql = 'DELETE FROM ordenes WHERE id_orden = ?';
        const [resultado] = await db.query(sql, [id_orden]);
        return resultado;
    }
};

module.exports = OrdenesServices;