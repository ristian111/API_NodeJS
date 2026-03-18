class Oficina {
    constructor(fila = {}) {
        this.id = fila.id_oficina;
        this.ciudad = fila.ciudad;
        this.direccion = fila.direccion;
        this.telefono = fila.telefono;
        this.departamento = fila.departamento;
        this.pais = fila.pais;
        this.codigoPostal = fila.codigo_postal;
        this.continente = fila.continente;
        this.filas = fila.filas;
    }

    oficinasDiccionario() {
        return {
            ref: this.id_oficina,
            ciudad: this.ciudad,
            direccion: this.direccion,
            telefono: this.telefono,
            departamento: this.departamento,
            pais: this.pais,
            codigoPostal: this.codigoPostal,
            continente: this.continente,
            filas: this.filas
        }
    }

    static parsearRespuesta(fila) {
        return new Oficina(fila).oficinasDiccionario();
    }

    static instanciarFilas(filas = []) {
        return filas.map(fila => Oficina.parsearRespuesta(fila));
    }
}

module.exports = Oficina