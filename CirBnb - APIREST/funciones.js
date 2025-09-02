export function precioMenorQue(unosAlojamientos, unPrecioMaximo) {
    return unosAlojamientos.filter(unAlojamiento => unAlojamiento.precioPorNoche < unPrecioMaximo)
}

export function obtenerPorID(unosAlojamientos, unID) {
    return unosAlojamientos.filter(unAlojamiento => unAlojamiento.id === unID)[0];
}

export function eliminar(unosAlojamientos, unAlojamiento) {
    return unosAlojamientos.splice(unosAlojamientos.indexOf(unAlojamiento), 1);
}