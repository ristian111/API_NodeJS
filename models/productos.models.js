class Producto {
    constructor(filas = {}) {
        this.id_producto = filas.id_producto;
        this.nombreProducto = filas.nombreProducto;
        this.escala = filas.escala;
        this.cantidad = filas.cantidad;
        this.precioVenta = filas.precioVenta;
        this.MSRP = filas.MSRP;
        this.id_lineaProducto = filas.id_lineaProducto;
    }

    productosDiccionario() {
        return {
            id_producto: this.id_producto,
            nombreProducto: this.nombreProducto,
            escala: this.escala,
            cantidad: this.cantidad,
            precioVenta: this.precioVenta,
            MSRP: this.MSRP,
            id_lineaProducto: this.id_lineaProducto,
        };
    }

    static parsearRespuesta(fila) {
        return new Producto(fila).productosDiccionario();
    }

    static instanciarFilas(filas = []) {
        return filas.map(fila => Producto.parsearRespuesta(fila));
    }
}

module.exports = Producto;