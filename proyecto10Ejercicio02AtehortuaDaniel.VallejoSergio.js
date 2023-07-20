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
// - Se imprime la serie de fibonacci del 0 al 100
// -Salvedad: Para valores fuera de este rango, no garantizamos los resultados.

// Define la función que calculará la suma de la serie de Fibonacci hasta un límite especificado.
function fibonacciSum() {
  // Inicializa las primeras dos variables (a y b) de la serie de Fibonacci.
  let a = 0;
  let b = 1;

  // Inicializa la variable que mantendrá la suma acumulada de la serie de Fibonacci.
  let sum = 0;

  // Comienza un bucle que se ejecutará mientras el valor actual de 'a' sea menor o igual al límite de 100.
  while (a <= 100) {
    // Agrega el valor actual de 'a' a la suma acumulada.
    sum += a;

    // Prepara los próximos valores de 'a' y 'b' para la siguiente iteración del ciclo.
    // Primero, guarda el valor actual de 'a' en una variable temporal.
    let temp = a;
    // Luego, actualiza el valor de 'a' con el valor actual de 'b'.
    a = b;
    // Finalmente, actualiza el valor de 'b' con la suma del valor anterior de 'a' (almacenado en 'temp') y el valor actual de 'b'.
    b = temp + b;
  }

  // Devuelve la suma acumulada de la serie de Fibonacci.
  return sum;
}

// Llama a la función para calcular la suma de los números de la serie de Fibonacci hasta el número 100.
const result = fibonacciSum();

// Imprime en la consola el resultado de la suma de los números de la serie de Fibonacci hasta el número 100.
console.log("La suma de los elementos de la serie de Fibonacci entre 0 y 100 es:", result);


