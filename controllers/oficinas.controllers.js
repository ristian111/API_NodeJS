const Oficina = require('../models/oficinas.models')
const OficinasServices = require('../services/oficinas.services')


const listar = async (req, res) => {
    const mostrarOficinas = await OficinasServices.listarOficinas()
    const lista_adaptada = Oficina.instanciarFilas(mostrarOficinas)
    return res.status(200).json({mensaje: "Oficinas listadas", resultado: lista_adaptada})
}

const listarOficina = async(req, res) => {
    const id = req.params.id
    const mostrarOficina = await OficinasServices.listarUnaOficina(id)
    if(mostrarOficina.length == 0){
        return res.status(404).json({mensaje: "Oficina no encontrada"})
    }
    const lista_adaptada = Oficina.instanciarFilas(mostrarOficina)
    return res.status(200).json({mensaje: "Oficinas listada", resultado: lista_adaptada})
}

const crear = async (req, res) => {
    const peticion = req.body
    await OficinasServices.crearOficina(peticion)
    const lista_adaptada = Oficina.instanciarFilas([peticion]) 
    return res.status(201).json({mensaje: "Oficina creada", resultado: lista_adaptada})
}

const actualizar = async(req, res) => {
    const id = req.params.id
    const peticion = req.body
    const oficinaActualizada = await OficinasServices.actualizarOficina(id, peticion)
    if(oficinaActualizada.affectedRows == 0){
        return res.status(404).json({mensaje: "Oficina no encontrada"})
    }
    const lista_adaptada = Oficina.instanciarFilas([peticion]) 
    return res.status(200).json({mensaje: "Oficina actualizada", resultado: lista_adaptada})
}

const eliminar = async(req, res) => {
    const id = req.params.id
    const oficinaEliminada = await OficinasServices.eliminarOficina(id)
    if(oficinaEliminada.affectedRows == 0){
        return res.status(404).json({mensaje: "Oficina no encontrada"})
    }
    return res.status(200).json({mensaje: "Oficina eliminada"})
}

module.exports = { listar, listarOficina, crear, actualizar, eliminar }