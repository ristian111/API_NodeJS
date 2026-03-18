class Pago {
    constructor(filas = {}) {
        this.numeroFactura = filas.numeroFactura;
        this.fechaPago = filas.fechaPago;
        this.totalPago = filas.totalPago;
        this.id_cliente = filas.id_cliente;
    }

    pagosDiccionario() {
        return {
            numeroFactura: this.numeroFactura,
            fechaPago: this.fechaPago,
            totalPago: this.totalPago,
            id_cliente: this.id_cliente,
        };
    }

    static parsearRespuesta(fila) {
        return new Pago(fila).pagosDiccionario();
    }

    static instanciarFilas(filas = []) {
        return filas.map(fila => Pago.parsearRespuesta(fila));
    }
}

module.exports = Pago;