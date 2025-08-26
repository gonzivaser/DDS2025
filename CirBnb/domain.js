export const Categoria = Object.freeze({
    Hotel: "Hotel", 
    Departamento: "Departamento", 
    Cabana: "Cabana", 
    Apart: "Apart",
});

export class Alojamiento {
    constructor(nombre, precioPorNoche, categoria) {
        this.nombre = nombre;
        this.precioPorNoche = precioPorNoche;
        this.categoria = categoria;
    }

    getDescripcion() {
        return `${this.nombre} (${this.categoria}) - $${this.precioPorNoche} por noche`;
    }
}

export class Reserva {
    constructor(alojamiento, diaInicio, diaFin) {
        if (!(diaInicio instanceof Date) || !(diaFin instanceof Date)) {
            throw new Error("Dia de Inicio y Dia de Fin deben ser instancias de Date");
        }

        if (diaInicio >= diaFin) {
            throw new Error("Dia de Inicio debe ser anterior al Dia de Fin");
        }

        this.alojamiento = alojamiento;
        this.diaInicio = diaInicio;
        this.diaFin = diaFin;
        this.descuentos = []; 
    }

    cantidadNoches() {
        const msPorDia = 1000 * 60 * 60 * 24;
        return Math.ceil((this.diaFin - this.diaInicio) / msPorDia);
    }

    precioBase() {
        return this.cantidadNoches() * this.alojamiento.precioPorNoche;
    }

    agregarDescuento(descuento) {
        this.descuentos.push(descuento);
    }

    precioFinal() {
        let base = this.precioBase();
        let totalDescontado = 0; 

        for (const desc of this.descuentos) {
            totalDescontado += desc.valorDescontado(base, this.cantidadNoches());
        }
        return Math.max(0, base - totalDescontado);
    }
}

export class DescuentoFijo {
    constructor(valor) {
        this.valor = valor;
    }

    valorDescontado(precioBase, cantidad) {
        return this.valor;
    }
}

export class DescuentoPorPorcentaje {
    constructor(porcentaje) {
        this.porcentaje = porcentaje;
    }

    valorDescontado(precioBase, cantidad) {
        return precioBase * (this.porcentaje / 100);
    }
}

export class DescuentoPorCantidadDeNoches {
    constructor(cantidadNoches, porcentaje) {
        this.cantidadNoches = cantidadNoches;
        this.porcentaje = porcentaje;
    }

    valorDescontado(precioBase, cantidad) {
        const vecesRepetido = Math.floor(cantidad / this.cantidadNoches);
        let valorQueSeDescuenta = 0;
        if (vecesRepetido >= 1) {
            valorQueSeDescuenta = precioBase * (this.porcentaje / 100) * vecesRepetido;
        }
        return valorQueSeDescuenta;
    }

}


