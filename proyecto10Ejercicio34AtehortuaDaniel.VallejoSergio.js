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
// - El programa, calcula el seno(x) con series de Taylor. Pidiendo un numero de terminos y un X.
// -Salvedad: Para valores fuera de este rango, no garantizamos los resultados.

// Definición de la función factorial
function calcularFactorial(numero) {
  if (numero === 0)
    return 1;
  else
    return numero * calcularFactorial(numero - 1);
}

// Definición de la función seno
function calcularSeno(iteracion, angulo, terminos, acumulador) {
  if (iteracion < terminos) {
    let termino = (Math.pow(-1, iteracion) * Math.pow(angulo, 2 * iteracion + 1)) / calcularFactorial(2 * iteracion + 1);
    acumulador += termino;
    return calcularSeno(iteracion + 1, angulo, terminos, acumulador); // Llamada recursiva a la función calcularSeno
  } else {
    return acumulador; // Devuelve el valor acumulado
  }
}
// Pregunta al usuario el número de términos de la serie de Taylor y el valor del ángulo
rl.question("Este programa calcula el seno de un ángulo utilizando una serie de Taylor.\nIngrese el número de términos de la serie: ", (terminos) => {
  rl.question("Ingrese el valor del ángulo en radianes: ", (angulo) => {
    const resultado = calcularSeno(0, angulo, terminos, 0.0); // Llamada a la función calcularSeno con los parámetros proporcionados por el usuario
    console.log("El resultado es " + resultado.toFixed(8)); // Muestra el resultado en la consola
    rl.close(); // Cierra la interfaz readline
  });
});



