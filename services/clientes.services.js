const db = require('../config/db')

const ClientesServices = {

    async listarClientes() {
        const [filas] = await db.query('SELECT * FROM clientes');
        return filas;
    },

    async listarUnCliente(id_cliente) {
        const [filas] = await db.query('SELECT * FROM clientes WHERE id_cliente = ?', [id_cliente]);
        return filas
    },

    async crearCliente(body) {

        const values = [
            body.empresa,
            body.apellido,
            body.nombre,
            body.telefono,
            body.direccion,
            body.departamento,
            body.codigoPostal,
            body.pais,
            body.limiteCredito,
            body.empleadoAtiende
        ]
        const sql = 'INSERT INTO clientes (empresa, apellido, nombre, telefono, direccion, departamento, codigoPostal, pais, limiteCredito, empleadoAtiende) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';

        const [filas] = await db.query(sql, values);
        return filas
    },

    async actualizarCliente(id_cliente, body){
        const values = [
            body.empresa,
            body.apellido,
            body.nombre,
            body.telefono,
            body.direccion,
            body.departamento,
            body.codigoPostal,
            body.pais,
            body.limiteCredito,
            body.empleadoAtiende,
            id_cliente
        ]
        const sql = 'UPDATE clientes SET empresa = ?, apellido = ?, nombre = ?, telefono = ?, direccion = ?, departamento = ?, codigoPostal = ?, pais = ?, limiteCredito = ?,  empleadoAtiende = ? WHERE id_cliente = ?';

        const [filas] = await db.query(sql, values);
        return filas
    },

    async eliminarCliente(id_cliente){
        const sql = 'DELETE FROM clientes WHERE id_cliente = ?'
        const [filas] = await db.query(sql, [id_cliente])
        return filas
    }
}

module.exports = ClientesServices