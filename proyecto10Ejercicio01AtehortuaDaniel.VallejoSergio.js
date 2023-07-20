

var prompt = require('prompt-sync')(); // Importamos el prompt en forma de variable (var)
const readline = require('readline');
//----------------------------------------------------------
const rl = readline.createInterface({ // importamos el readline para crear una interfaz
    input: process.stdin,  // Simula el input del usuario
    output: process.stdout // Simula el output del usuario
});

// -Junio 21
// - 8pm
// - 1.0
// -Daniel Eduardo Atehortua.Ing(c) - Sergio Vallejo.Ing(c)
// - Javascript
// - Version 6.0
// - Presentado a: Doctor Ricardo Moreno Laverde
// - Universidad Tecnológica de Pereira
// - Se imprime la serie de fibonacci sin permitir que sobrepase 10.000 con While
// -Salvedad: Para valores fuera de este rango, no garantizamos los resultados.
// Define la función que generará la serie de Fibonacci hasta un límite especificado.
function fibonacciSeries(limit) {
  // Inicializa las primeras dos variables (a y b) de la serie de Fibonacci.
  let a = 0;
  let b = 1;

  // Comienza un bucle que se ejecutará mientras el valor actual de 'a' sea menor o igual al límite.
  while (a <= limit) {
    // Imprime el valor actual de 'a'.
    console.log(a);

    // Prepara los próximos valores de 'a' y 'b' para la siguiente iteración del ciclo.
    // Primero, guarda el valor actual de 'a' en una variable temporal.
    let temp = a;
    // Luego, actualiza el valor de 'a' con el valor actual de 'b'.
    a = b;
    // Finalmente, actualiza el valor de 'b' con la suma del valor anterior de 'a' (almacenado en 'temp') y el valor actual de 'b'.
    b = temp + b;
  }
}

// Establece el límite para la serie de Fibonacci.
// En este caso, la serie se generará hasta el número 10000.
const limit = 10000;

// Llama a la función para generar e imprimir la serie de Fibonacci hasta el límite establecido.
fibonacciSeries(limit);
