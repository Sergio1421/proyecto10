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
// - Imprime la silueta o las trazas de un triangulo con letras Z
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
function dibujarFigura(espacios1, espacios2) {
  if (espacios1 > 0) {
    imprimirEspacios(espacios2, 0); // Imprime `espacios2` espacios en blanco
    process.stdout.write("Z"); // Imprime la letra "Z" sin saltar de línea
    imprimirEspacios(espacios1, 0); // Imprime `espacios1` espacios en blanco
    process.stdout.write("Z\n"); // Imprime la letra "Z" y realiza un salto de línea
    dibujarFigura(espacios1 - 2, espacios2 + 1);
  } else if (espacios1 === -1) {
    imprimirEspacios(espacios2, 0); // Imprime `espacios2` espacios en blanco
    process.stdout.write("Z"); // Imprime la letra "Z"
  }
}

// La función `main` es la función principal que inicia el dibujo de la figura.
function main() {
  const espacios1Maximos = 17; // Cantidad máxima de espacios en blanco
  const espacios2Iniciales = 0; // Cantidad inicial de espacios en blanco
  dibujarFigura(espacios1Maximos, espacios2Iniciales);
}

// Llamada a la función principal
main();




