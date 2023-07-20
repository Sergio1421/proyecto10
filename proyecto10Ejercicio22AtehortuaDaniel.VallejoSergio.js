// Proyecto 10

// -Junio 20
// - 3pm
// - 1.0
// -Daniel Eduardo Atehortua.Ing(c) - Sergio Vallejo.Ing(c)
// - Javascript
// - ECMAscript 6.
// - Presentado a: Doctor Ricardo Moreno Laverde
// - Universidad Tecnológica de Pereira
// - Programa de Ingeniería de Sistemas y Computación
// - Ejecuta programas propuestos para el proyecto 10
// Salvedad: Para valores fuera de este rango, no garantizamos los resultados.

// Herramientas para recibir entrada por teclado del usuario

var prompt = require('prompt-sync')(); // Importamos el prompt en forma de variable (var)
const readline = require('readline');
//----------------------------------------------------------
const rl = readline.createInterface({ // importamos el readline para crear una interfaz
    input: process.stdin,  // Simula el input del usuario
    output: process.stdout // Simula el output del usuario
});

// -Junio 20
// - 3pm
// - 1.0
// -Daniel Eduardo Atehortua.Ing(c) - Sergio Vallejo.Ing(c)
// - Javascript
// - Version 6.
// - Presentado a: Doctor Ricardo Moreno Laverde
// - Universidad Tecnológica de Pereira
// - Imprime una piramide inverida de letras P Hasta la columna 40 y de 7 filas
// -Salvedad: Para valores fuera de este rango, no garantizamos los resultados.

// Función recursiva para imprimir espacios en blanco
function imprimirEspacios(cantidad, contador) {
  if (contador < cantidad) {
    process.stdout.write(" ");
    contador++;
    imprimirEspacios(cantidad, contador);
  }
}

// Función recursiva para imprimir letras
function imprimirLetras(cantidad, contador) {
  if (contador <= cantidad) {
    process.stdout.write("P");
    contador++;
    imprimirLetras(cantidad, contador);
  }
}

// Función recursiva para generar la figura
function generarFigura(cantidad, espacios) {
  if (cantidad >= 1) {
    imprimirEspacios(espacios, 0);
    imprimirLetras(cantidad, 1);
    process.stdout.write("\n");
    generarFigura(cantidad - 2, espacios + 1);
  }
}

// Función principal
function main() {
  const alturaMaxima = 13; // Altura máxima de la figura
  const espaciosIniciales = 33; // Cantidad inicial de espacios en blanco

  generarFigura(alturaMaxima, espaciosIniciales); // Llama a la función para generar la figura
}

// Llamada a la función principal
main();




