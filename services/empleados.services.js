const db = require('../config/db')

const EmpleadosServices = {

    async listarEmpleados() {
        const [filas] = await db.query('SELECT * FROM empleados');
        return filas;
    },

    async listarUnEmpleado(id) {
        const [filas] = await db.query('SELECT * FROM empleados WHERE documento = ?', [id]);
        return filas
    },

    async crearEmpleado(body) {

        const values = [
            body.documento,
            body.apellido,
            body.nombre,
            body.extension,
            body.email,
            body.jefe,
            body.id_oficina
        ]
        const sql = 'INSERT INTO empleados (documento, apellido, nombre, extension, email, jefe, id_oficina) VALUES (?, ?, ?, ?, ?, ?, ?)';

        const [filas] = await db.query(sql, values);
        return filas
    },

    async actualizarEmpleado(id, body){
        const values = [
            body.documento,
            body.apellido,
            body.nombre,
            body.extension,
            body.email,
            body.jefe,
            body.id_oficina,
            id
        ]
        
        const sql = 'UPDATE empleados SET documento = ?, apellido = ?, nombre = ?, extension = ?, email = ?, jefe = ?, id_oficina = ? WHERE documento = ?';

        const [filas] = await db.query(sql, values);
        return filas
    },

    async eliminarEmpleado(id){
        const sql = 'DELETE FROM empleados WHERE documento = ?'
        const [filas] = await db.query(sql, [id])
        return filas
    }
}

module.exports = EmpleadosServices