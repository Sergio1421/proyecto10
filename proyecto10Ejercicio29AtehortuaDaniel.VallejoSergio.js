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
// - 
// -Salvedad: Para valores fuera de este rango, no garantizamos los resultados.

// Definición de la función factorial
function calcularFactorial(n) {
  if (n === 0)
    return 1;
  else
    return n * calcularFactorial(n - 1);
}

// Definición de la función exponencial
function calcularExponencial(iteracion, base, terminos, acumulador) {
  if (iteracion < terminos) {
    let termino = Math.pow(base, iteracion) / calcularFactorial(iteracion);
    acumulador += termino;
    return calcularExponencial(iteracion + 1, base, terminos, acumulador); // Llamada recursiva a la función calcularExponencial
  } else {
    return acumulador; // Devuelve el valor acumulado
  }
}
// Pregunta al usuario el número de términos de la serie de Taylor y el valor de x
rl.question("Este programa calcula e^x utilizando una serie de Taylor.\nIngrese el número de términos de la serie: ", (terminos) => {
  rl.question("Ingrese el valor de x: ", (x) => {
    const resultado = calcularExponencial(0, x, terminos, 0.0); // Llamada a la función calcularExponencial con los parámetros proporcionados por el usuario
    console.log("El resultado es " + resultado.toFixed(8)); // Muestra el resultado en la consola
    rl.close(); // Cierra la interfaz readline
  });
});




