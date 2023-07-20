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
// - Imprime el factorial de un numero ingresado por el usuario
// -Salvedad: Para valores fuera de este rango, no garantizamos los resultados.

// Función recursiva para calcular el factorial de un número
function calcularFactorial(numero) {
  if (numero < 0) {
    console.log("Error: No se puede calcular el factorial de un número negativo.");
  } else if (numero === 0) {
    return 1;
  } else {
    return numero * calcularFactorial(numero - 1);
  }
}
// Pedir al usuario que ingrese un número
rl.question("Ingrese un número: ", (entrada) => {
  const numero = parseInt(entrada); // Convertir la entrada a un número entero
  console.log("El factorial de " + numero + " es: " + calcularFactorial(numero));
  rl.close(); // Cerrar la interfaz de lectura
});



