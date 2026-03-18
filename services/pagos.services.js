const db = require('../config/db');

const PagosServices = {
    async listarPagos() {
        const [filas] = await db.query('SELECT * FROM pagos');
        return filas;
    },

    async listarUnPago(numeroFactura) {
        const [filas] = await db.query('SELECT * FROM pagos WHERE numeroFactura = ?', [numeroFactura]);
        return filas;
    },

    async crearPago(body) {
        const values = [
            body.numeroFactura,
            body.fechaPago,
            body.totalPago,
            body.id_cliente
        ];
        const sql = 'INSERT INTO pagos (numeroFactura, fechaPago, totalPago, id_cliente) VALUES (?, ?, ?, ?)';
        const [filas] = await db.query(sql, values);
        return filas;
    },

    async actualizarPago(numeroFactura, body) {
        const values = [
            body.fechaPago,
            body.totalPago,
            body.id_cliente,
            numeroFactura
        ];
        const sql = 'UPDATE pagos SET fechaPago = ?, totalPago = ?, id_cliente = ? WHERE numeroFactura = ?';
        const [filas] = await db.query(sql, values);
        return filas;
    },

    async eliminarPago(numeroFactura) {
        const sql = 'DELETE FROM pagos WHERE numeroFactura = ?';
        const [filas] = await db.query(sql, [numeroFactura]);
        return filas;
    }
};

module.exports = PagosServices;