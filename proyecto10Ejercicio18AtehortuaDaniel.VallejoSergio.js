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
// - El programa muestra ternas determinadas de numeros enteros
// -Salvedad: Para valores fuera de este rango, no garantizamos los resultados.

// Función recursiva para generar las ternas de números
function generarTernas(num1, num2, num3, contador) {
  if (num1 <= 9) {
    if (num3 === 4) {
      num3 = 1; // Reiniciar el valor de la tercera columna a 1 cuando llega a 4
    }
    num2 = Math.floor((contador + 1) / 3); // Calcular el segundo número de la terna
    console.log(`${num1} ${num2} ${num3}`); // Mostrar la terna de números
    contador = contador + 1; // Incrementar el contador
    num1 = num1 + 1; // Incrementar el primer número de la terna
    num3 = num3 + 1; // Incrementar el tercer número de la terna
    generarTernas(num1, num2, num3, contador); // Llamada recursiva para la siguiente terna
  }
}
// Llamar a la función para generar y mostrar las ternas de números
generarTernas(1, 1, 1, 2);



