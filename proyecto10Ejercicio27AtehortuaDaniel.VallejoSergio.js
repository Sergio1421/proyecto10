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
// - El programa, imprime la traza o silueta de un triangulo con la letra Z
// -Salvedad: Para valores fuera de este rango, no garantizamos los resultados.

// La función `imprimirEspacios` imprime una cantidad determinada de espacios en blanco en la consola.
function imprimirEspacios(cantidad, contador) {
  if (contador < cantidad) {
    process.stdout.write("  "); // Imprime dos espacios en blanco
    contador++;
    imprimirEspacios(cantidad, contador);
  }
}

// La función `dibujarFigura` dibuja el patrón en forma de "Z" utilizando recursión.
function dibujarFigura(cantidadEspacios1, cantidadEspacios2) {
  if (cantidadEspacios1 === 0) {
    imprimirEspacios(cantidadEspacios2, 0); // Imprime `cantidadEspacios2` espacios en blanco
    console.log("Z"); // Imprime la letra "Z"
    dibujarFigura(cantidadEspacios1 + 2, cantidadEspacios2 - 1);
  } else if (cantidadEspacios1 <= 17) {
    imprimirEspacios(cantidadEspacios2, 0); // Imprime `cantidadEspacios2` espacios en blanco
    process.stdout.write("Z"); // Imprime la letra "Z" sin saltar de línea
    imprimirEspacios(cantidadEspacios1, 0); // Imprime `cantidadEspacios1` espacios en blanco
    console.log("Z"); // Imprime la letra "Z"
    dibujarFigura(cantidadEspacios1 + 2, cantidadEspacios2 - 1);
  }
}

// La función `main` es la función principal que inicia el dibujo de la figura.
function main() {
  const cantidadEspacios1Inicial = 0; // Cantidad inicial de espacios en blanco
  const cantidadEspacios2Maxima = 9; // Cantidad máxima de espacios en blanco
  dibujarFigura(cantidadEspacios1Inicial, cantidadEspacios2Maxima);
}

// Llamada a la función principal
main();




