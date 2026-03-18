class Cliente {
    constructor(filas = {}){
        this.empresa = filas.empresa
        this.apellido = filas.apellido
        this.nombre = filas.nombre
        this.telefono = filas.telefono
        this.direccion = filas.direccion
        this.departamento = filas.departamento
        this.codigoPostal = filas.codigoPostal
        this.pais = filas.pais
        this.limiteCredito = filas.limiteCredito
        this.empleadoAtiende = filas.empleadoAtiende;
    }

    clientesDiccionario() {
        return {
            empresa: this.empresa,
            nombre: this.nombre,
            apellido: this.apellido,
            telefono: this.telefono,
            direccion: this.direccion,
            departamento: this.departamento,
            codigoPostal: this.codigoPostal,
            pais: this.pais,
            codigoPostal: this.codigoPostal,
            limiteCredito: this.limiteCredito,
            empleadoAtiende: this.empleadoAtiende,
        }
    }

    static parsearRespuesta(fila) {
        return new Cliente(fila).clientesDiccionario();
    }

    static instanciarFilas(filas = []) {
        return filas.map(fila => Cliente.parsearRespuesta(fila));
    }
}

module.exports = Cliente