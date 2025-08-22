function aumentarPrecioDiario(alojamientos, aumento) {
    alojamientos.forEach((unAlojamiento) => {
        unAlojamiento.precioPorNoche += aumento;
    });
}

function alojamientoMasCaro(alojamientos) {
    const listaDePrecios = alojamientos.map((unAlojamiento) => {
        return unAlojamiento.precioPorNoche;
    });

    const precioMaximo = Math.max(...listaDePrecios);
    const alojamiento = alojamientos.find((unAlojamiento) => unAlojamiento.precioPorNoche == precioMaximo);
    return alojamiento;
}

function filtrarPorPrecio(alojamientos, precioMaximo) {
    return alojamientos.filter((unAlojamiento) => {
        return unAlojamiento.precioPorNoche <= precioMaximo;
    });
}

function obtenerTotalReservas(reservas) {
    return reservas.reduce((total, reserva) => {
        return total + reserva.precioFinal();
    }, 0);
}

module.exports = { aumentarPrecioDiario, alojamientoMasCaro, filtrarPorPrecio, obtenerTotalReservas };