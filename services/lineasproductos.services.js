const db = require('../config/db');

const LineasProductosServices = {
    async listarLineas() {
        const [filas] = await db.query('SELECT * FROM lineasproductos');
        return filas;
    },

    async listarUnaLinea(id) {
        const [filas] = await db.query('SELECT * FROM lineasproductos WHERE id_lineaproducto = ?', [id]);
        return filas;
    },

    async crearLinea(body) {
        const values = [
            body.nombreLinea,
            body.textoDescripcion,
            body.htmlDescripcion,
            body.imagen
        ];
        const sql = 'INSERT INTO lineasproductos (nombreLinea, textoDescripcion, htmlDescripcion, imagen) VALUES (?, ?, ?, ?)';
        const [resultado] = await db.query(sql, values);
        return resultado;
    },

    async actualizarLinea(id, body) {
        const values = [
            body.nombreLinea,
            body.textoDescripcion,
            body.htmlDescripcion,
            body.imagen,
            id
        ];
        const sql = 'UPDATE lineasproductos SET nombreLinea = ?, textoDescripcion = ?, htmlDescripcion = ?, imagen = ? WHERE id_lineaproducto = ?';
        const [resultado] = await db.query(sql, values);
        return resultado;
    },

    async eliminarLinea(id) {
        const sql = 'DELETE FROM lineasproductos WHERE id_lineaproducto = ?';
        const [resultado] = await db.query(sql, [id]);
        return resultado;
    }
};

module.exports = LineasProductosServices;