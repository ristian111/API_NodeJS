const db = require('../config/db')

const OficinasServices = {

    async listarOficinas() {
        const [filas] = await db.query('SELECT * FROM oficinas');
        return filas;
    },

    async listarUnaOficina(id) {
        const [filas] = await db.query('SELECT * FROM oficinas WHERE id_oficina = ?', [id]);
        return filas
    },

    async crearOficina(body) {

        const values = [
            body.ciudad,
            body.telefono,
            body.direccion,
            body.departamento,
            body.pais,
            body.codigoPostal,
            body.continente
        ]
        const sql = 'INSERT INTO oficinas (ciudad, telefono, direccion, departamento, pais, codigoPostal, continente) VALUES (?, ?, ?, ?, ?, ?, ?)';

        const [filas] = await db.query(sql, values);
        return filas
    },

    async actualizarOficina(id, body){
        const values = [
            body.ciudad,
            body.telefono,
            body.direccion,
            body.departamento,
            body.pais,
            body.codigoPostal,
            body.continente,
            id
        ]
        const sql = 'UPDATE oficinas SET ciudad = ?, telefono = ?, direccion = ?, departamento = ?, pais = ?, codigoPostal = ?, continente = ? WHERE id_oficina = ?';

        const [filas] = await db.query(sql, values);
        return filas
    },

    async eliminarOficina(id){
        const sql = 'DELETE FROM oficinas WHERE id_oficina = ?'
        const [filas] = await db.query(sql, [id])
        return filas
    }
}

module.exports = OficinasServices