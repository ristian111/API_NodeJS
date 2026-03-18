class DetalleOrden {
    constructor(filas = {}) {
        this.id_detallesordene = filas.id_detallesordene;
        this.cantidadPedida = filas.cantidadPedida;
        this.valorUnitario = filas.valorUnitario;
        this.ordenEntrega = filas.ordenEntrega;
        this.id_orden = filas.id_orden;
        this.id_producto = filas.id_producto;
    }

    detallesOrdenesDiccionario() {
        return {
            id_detallesordene: this.id_detallesordene,
            cantidadPedida: this.cantidadPedida,
            valorUnitario: this.valorUnitario,
            ordenEntrega: this.ordenEntrega,
            id_orden: this.id_orden,
            id_producto: this.id_producto,
        };
    }

    static parsearRespuesta(fila) {
        return new DetalleOrden(fila).detallesOrdenesDiccionario();
    }

    static instanciarFilas(filas = []) {
        return filas.map(fila => DetalleOrden.parsearRespuesta(fila));
    }
}

module.exports = DetalleOrden;