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



// -Junio 20
// - 3pm
// - 1.0
// -Daniel Eduardo Atehortua.Ing(c) - Sergio Vallejo.Ing(c)
// - Javascript
// - Version 6.
// - Presentado a: Doctor Ricardo Moreno Laverde
// - Universidad Tecnológica de Pereira
// - Imprime los terminos deseados de la serie de Lucas
// -Salvedad: Para valores fuera de este rango, no garantizamos los resultados.

/// Importamos el módulo 'prompt-sync'.
const prompt = require('prompt-sync')();

// Preguntamos al usuario que ingrese un número.
let number = prompt('Por favor, ingrese un número entero: ');

// Inicializamos la variable que almacenará el número al revés.
let reversedNumber = '';

// Iniciamos un bucle que se ejecutará mientras haya caracteres en el número.
while (number.length > 0) {
  // Agregamos el último carácter del número al final del número al revés.
  reversedNumber += number[number.length - 1];

  // Eliminamos el último carácter del número.
  number = number.slice(0, -1);
}

// Imprimimos el número al revés.
console.log('El número invertido es:', reversedNumber);
