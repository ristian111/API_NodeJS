class Empleado {
    constructor(filas = {}){
        this.documento = filas.documento
        this.apellido = filas.apellido
        this.nombre = filas.nombre
        this.extension = filas.extension
        this.email = filas.email
        this.jefe = filas.jefe
        this.cargo = filas.cargo
        this.id_oficina = filas.id_oficina;
    }

    empleadosDiccionario() {
        return {
            ref: this.documento,
            nombre: this.nombre,
            apellido: this.apellido,
            extension: this.extension,
            email: this.email,
            jefe: this.jefe,
            cargo: this.cargo,
            id_oficina: this.id_oficina,
        }
    }

    static parsearRespuesta(fila) {
        return new Empleado(fila).empleadosDiccionario();
    }

    static instanciarFilas(filas = []) {
        return filas.map(fila => Empleado.parsearRespuesta(fila));
    }
}

module.exports = Empleado