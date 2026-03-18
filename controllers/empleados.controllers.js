const Empleado = require('../models/empleados.models')
const EmpleadosServices = require('../services/empleados.services')


const listar = async (req, res) => {
    const mostrarEmpleados = await EmpleadosServices.listarEmpleados()
    const lista_adaptada = Empleado.instanciarFilas(mostrarEmpleados)
    return res.status(200).json({mensaje: "Empleados listados", resultado: lista_adaptada})
}

const listarEmpleado = async(req, res) => {
    const id = req.params.id
    const mostrarEmpleado = await EmpleadosServices.listarUnEmpleado(id)
    if(mostrarEmpleado.length == 0){
        return res.status(404).json({mensaje: "Empleado no encontrado"})
    }
    const lista_adaptada = Empleado.instanciarFilas(mostrarEmpleado)
    return res.status(200).json({mensaje: "Empleados listada", resultado: lista_adaptada})
}

const crear = async (req, res) => {
    const peticion = req.body
    await EmpleadosServices.crearEmpleado(peticion)
    const lista_adaptada = Empleado.instanciarFilas([peticion]) 
    return res.status(201).json({mensaje: "Empleado creado", resultado: lista_adaptada})
}

const actualizar = async(req, res) => {
    const id = req.params.id
    const peticion = req.body
    const EmpleadoActualizado = await EmpleadosServices.actualizarEmpleado(id, peticion)
    if(EmpleadoActualizado.affectedRows == 0){
        return res.status(404).json({mensaje: "Empleado no encontrado"})
    }
    const lista_adaptada = Empleado.instanciarFilas([peticion]) 
    return res.status(200).json({mensaje: "Empleado actualizado", resultado: lista_adaptada})
}

const eliminar = async(req, res) => {
    const id = req.params.id
    const EmpleadoEliminado = await EmpleadosServices.eliminarEmpleado(id)
    if(EmpleadoEliminado.affectedRows == 0){
        return res.status(404).json({mensaje: "Empleado no encontrado"})
    }
    return res.status(200).json({mensaje: "Empleado eliminado"})
}

module.exports = { listar, listarEmpleado, crear, actualizar, eliminar }