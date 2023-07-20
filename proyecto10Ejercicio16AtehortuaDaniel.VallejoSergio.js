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
// - Imprime los factoriales de un numero no negativo desde 0 hasta N
// -Salvedad: Para valores fuera de este rango, no garantizamos los resultados.

function factorial(n) {
  // La función factorial calcula el factorial de un número dado de forma recursiva.

  if (n === 0) {
    // El factorial de 0 es 1.
    return 1;
  }

  // Calcula el factorial de n multiplicando n por el factorial de n-1.
  return n * factorial(n - 1);
}

function sumFactorials(n) {
  // La función sumFactorials calcula la suma de los factoriales de todos los números desde 0 hasta n.

  if (n === 0) {
    // Si n es 0, el resultado es el factorial de 0 (que es 1).
    return 1;
  }

  // Calcula el factorial del número actual (n) y suma el resultado con la llamada recursiva para n-1.
  return factorial(n) + sumFactorials(n - 1);
}

rl.question('Ingrese un número entero no negativo: ', (answer) => {
  // Lee la respuesta del usuario y la almacena en la variable answer.

  const n = parseInt(answer);

  if (Number.isNaN(n) || n < 0) {
    // Verifica si el número ingresado no es un valor numérico válido o es negativo.
    console.log('El número ingresado no es válido.');
  } else {
    // Calcula la suma de los factoriales y la muestra en la consola.
    const result = sumFactorials(n);
    console.log('La suma de los factoriales desde 0 hasta', n, 'es:', result);
  }

  rl.close();
  
  // Cierra la interfaz de lectura de la línea para finalizar el programa.
});


