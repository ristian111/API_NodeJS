class Orden {
    constructor(filas = {}) {
        this.id_orden = filas.id_orden;
        this.fechaRecibido = filas.fechaRecibido;
        this.fechaLimiteEntrega = filas.fechaLimiteEntrega;
        this.fechaEntrega = filas.fechaEntrega;
        this.estado = filas.estado;
        this.observacion = filas.observacion;
        this.id_cliente = filas.id_cliente;
    }

    ordenesDiccionario() {
        return {
            id_orden: this.id_orden,
            fechaRecibido: this.fechaRecibido,
            fechaLimiteEntrega: this.fechaLimiteEntrega,
            fechaEntrega: this.fechaEntrega,
            estado: this.estado,
            observacion: this.observacion,
            id_cliente: this.id_cliente,
        };
    }

    static parsearRespuesta(fila) {
        return new Orden(fila).ordenesDiccionario();
    }

    static instanciarFilas(filas = []) {
        return filas.map(fila => Orden.parsearRespuesta(fila));
    }
}

module.exports = Orden;