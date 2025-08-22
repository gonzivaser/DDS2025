const { Alojamiento, Reserva, Categoria, DescuentoFijo, DescuentoPorPorcentaje, DescuentoPorCantidadDeNoches} = require('./domain');
const { aumentarPrecioDiario, alojamientoMasCaro, filtrarPorPrecio, obtenerTotalReservas} = require('./funciones');

// Instancia de Alojamiento
const alojamiento1 = new Alojamiento(
    "Hotel en Buenos Aires", 
    100, 
    Categoria.Hotel
);
console.log(alojamiento1.getDescripcion());

// Instancia de Reserva
const reserva1 = new Reserva(
    alojamiento1, 
    new Date("2025-05-10"),
    new Date("2025-05-20")
);

reserva1.agregarDescuento(new DescuentoFijo(20));
reserva1.agregarDescuento(new DescuentoPorPorcentaje(10));
reserva1.agregarDescuento(new DescuentoPorCantidadDeNoches(2, 5));

console.log(`El precio base de la reserva es ${reserva1.precioBase()}`);
console.log(`El precio final de la reserva es ${reserva1.precioFinal()}`);


const catalogo = [
    new Alojamiento("Hostel en Cordoba", 50, Categoria.Apart),
    new Alojamiento("Casa de Campo", 150, Categoria.Cabana), 
    new Alojamiento("Departamento en Mendoza", 80, Categoria.Departamento)
];

console.log("Precios antes del aumento:");
console.log(catalogo); 
aumentarPrecioDiario(catalogo, 1000);
console.log("Precios después del aumento:");
console.log(catalogo);

const alojamientoCaro = alojamientoMasCaro(catalogo);
console.log("El alojamiento más caro es:");
console.log(alojamientoCaro);

const alojamientosFiltrados = filtrarPorPrecio(catalogo, );
console.log("Alojamientos filtrados por precio (máximo 1181):");
console.log(alojamientosFiltrados);

const totalReservas = obtenerTotalReservas([reserva1]);
console.log(`El total de reservas es: ${totalReservas}`);