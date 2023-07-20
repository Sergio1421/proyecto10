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
// - El programa imprime una piramide de A hasta la columna 56 con maximo 4 ordenes de imprimir
// -Salvedad: Para valores fuera de este rango, no garantizamos los resultados.

// Función recursiva para imprimir la pirámide de caracteres
function imprimir(k, j, i) {
  if (i <= 25) { // Límite para la altura de la pirámide
    if (j >= 1) {
      process.stdout.write(" "); // Imprime espacios en blanco
      j = j - 1;
      imprimir(k, j, i); // Llama a la función recursivamente
    } else {
      if (k >= 1) {
        process.stdout.write("A"); // Imprime el carácter "A"
        k = k - 1;
        imprimir(k, j, i); // Llama a la función recursivamente
      } else {
        process.stdout.write("\n"); // Imprime un salto de línea para iniciar una nueva fila de la pirámide
        imprimir(k = k + i, j = 80 - i, i = i + 1); // Actualiza los valores y llama a la función recursivamente para la siguiente fila de la pirámide
      }
    }
  }
}

// Función principal
function main() {

  let k = 0; // Cantidad inicial de caracteres "A" por fila
  let j = 80; // Cantidad inicial de espacios en blanco por fila
  let i = 0; // Número de fila actual

  imprimir(k, j, i); // Llama a la función para imprimir la pirámide
}

// Llamada a la función principal
main();

