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
// - El programa, imprime una lista de parejas de numeros enteros con un máximo de 4 ordenes para imprmir.
// -Salvedad: Para valores fuera de este rango, no garantizamos los resultados.
// Función recursiva para generar las parejas de números

function numeros(col1, col2, j) { // Funcion para organizar la pareja de numeros por columnas y una variable auxiliar
  if (col1 <= 9) {
    col2 = Math.floor((j + 1) / 2); // Calcular el segundo número de la pareja
    console.log(`${col1} ${col2}`); // Mostrar la pareja de números
    j = j + 1; // Incrementar el contador
    col1 = col1 + 1; // Incrementar el primer número de la pareja
    numeros(col1, col2, j); // Llamada recursiva para la siguiente pareja
  }
}
// Llamar a la función para generar y mostrar las parejas de números
numeros(0, 0, 1);


