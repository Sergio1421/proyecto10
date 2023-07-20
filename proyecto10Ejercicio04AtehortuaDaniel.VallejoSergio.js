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
// - Imprime los terminos deseados de la serie de Pell
// -Salvedad: Para valores fuera de este rango, no garantizamos los resultados.

var prompt = require('prompt-sync')(); // Importamos el prompt 

// Arreglo para almacenar los números ingresados
const numeros = [];

let i = 0; // Índice inicial para controlar el número de iteraciones en el bucle 'while'.

// Ciclo para leer 75 números
while (i < 75) {
  const numero = parseFloat(prompt(`Ingrese el número ${i + 1}:`)); // Solicitar al usuario ingresar un número

  // Validar que el número sea diferente de cero
  if (numero !== 0) {
    numeros.push(numero); // Agregar el número al arreglo
    i++; // Incrementamos el índice para avanzar a la siguiente iteración
  } else {
    console.log('El número debe ser diferente de cero. Inténtelo nuevamente.');
  }
}

let countOver150 = 0, countNeg = 0, sumPos = 0, countPos = 0;
let numMax = -Infinity, numMin = Infinity;

// Bucle para recorrer el array 'numeros' y realizar las operaciones necesarias
let j = 0; // Índice inicial para controlar el número de iteraciones en el bucle 'while'.

while(j < numeros.length){
  let num = numeros[j]; // Número actual en la iteración

  // Contamos cuántos números son mayores que 150
  if(num > 150){
    countOver150++;
  }

  // Encontramos el número mayor y el número menor
  if(num > numMax) {
    numMax = num;
  }
  if(num < numMin){
    numMin = num;
  }

  // Contamos cuántos números son negativos
  if(num < 0){
    countNeg++;
  }

  // Sumamos los números positivos y los contamos para calcular el promedio
  if(num > 0){
    sumPos += num;
    countPos++;
  }

  j++; // Incrementamos el índice para avanzar a la siguiente iteración
}

// Calculamos el promedio de los números positivos
let avgPos = countPos !== 0 ? sumPos / countPos : 0;

// Imprimimos los resultados
console.log('Resultados:');
console.log(`Cantidad de números mayores a 150: ${countOver150}`);
console.log(`Número mayor: ${numMax}`);
console.log(`Número menor: ${numMin}`);
console.log(`Cantidad de números negativos: ${countNeg}`);
console.log(`Promedio de los números positivos: ${avgPos}`);


