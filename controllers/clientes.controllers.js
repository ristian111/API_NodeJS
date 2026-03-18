const Cliente = require('../models/clientes.models')
const ClientesServices = require('../services/clientes.services')


const listar = async (req, res) => {
    const mostrarClientes = await ClientesServices.listarClientes()
    const lista_adaptada = Cliente.instanciarFilas(mostrarClientes)
    return res.status(200).json({mensaje: "Clientes listados", resultado: lista_adaptada})
}

const listarCliente = async(req, res) => {
    const id = req.params.id
    const mostrarCliente = await ClientesServices.listarUnCliente(id)
    if(mostrarCliente.length == 0){
        return res.status(404).json({mensaje: "Cliente no encontrado"})
    }
    const lista_adaptada = Cliente.instanciarFilas(mostrarCliente)
    return res.status(200).json({mensaje: "Cliente listado", resultado: lista_adaptada})
}

const crear = async (req, res) => {
    const peticion = req.body
    await ClientesServices.crearCliente(peticion)
    const lista_adaptada = Cliente.instanciarFilas([peticion]) 
    return res.status(201).json({mensaje: "Cliente creado", resultado: lista_adaptada})
}

const actualizar = async(req, res) => {
    const id = req.params.id
    console.log(id)
    const peticion = req.body
    const ClienteActualizado = await ClientesServices.actualizarCliente(id, peticion)
    if(ClienteActualizado.affectedRows == 0){
        return res.status(404).json({mensaje: "Cliente no encontrado"})
    }
    const lista_adaptada = Cliente.instanciarFilas([peticion]) 
    return res.status(200).json({mensaje: "Cliente actualizado", resultado: lista_adaptada})
}

const eliminar = async(req, res) => {
    const id = req.params.id
    const ClienteEliminado = await ClientesServices.eliminarCliente(id)
    if(ClienteEliminado.affectedRows == 0){
        return res.status(404).json({mensaje: "Cliente no encontrado"})
    }
    return res.status(200).json({mensaje: "Cliente eliminado"})
}

module.exports = { listar, listarCliente, crear, actualizar, eliminar }