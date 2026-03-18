class LineaProducto {
    constructor(filas = {}) {
        this.id_lineaproducto = filas.id_lineaproducto;
        this.nombreLinea = filas.nombreLinea;
        this.textoDescripcion = filas.textoDescripcion;
        this.htmlDescripcion = filas.htmlDescripcion;
        this.imagen = filas.imagen;
    }

    lineasProductosDiccionario() {
        return {
            id_lineaproducto: this.id_lineaproducto,
            nombreLinea: this.nombreLinea,
            textoDescripcion: this.textoDescripcion,
            htmlDescripcion: this.htmlDescripcion,
            imagen: this.imagen,
        };
    }

    static parsearRespuesta(fila) {
        return new LineaProducto(fila).lineasProductosDiccionario();
    }

    static instanciarFilas(filas = []) {
        return filas.map(fila => LineaProducto.parsearRespuesta(fila));
    }
}

module.exports = LineaProducto;