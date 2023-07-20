// - 20 junio 2023
// - 2:00 p.m.
// - Versión 1.0
// - Autores: Ing(c) Daniel Atehortua Ing (c)Sergio Vallejo
// - Nombre del lenguaje utilizado: JavaScript
// - Version del lenguaje utilizado: ECMAScript 6.0
// - Presentado a: Doctor Ricardo Moreno Laverde
// - Universidad Tecnológica de Pereira
// - Programa de Ingeniería de Sistemas y Computación
// - El siguiente programa presenta la serie de Triangular sin sobrepasar el número de terminos que ingrese el usuario
// - Vgr: Salvedad: Para valores fuera de este rango, no garantizamos los resultados.

 var prompt = require('prompt-sync')(); //importamos el prompt 

 // Solicitar al usuario ingresar el número de términos deseados
const numTerminos = parseInt(prompt("Ingrese el número de términos de la serie triangular:"));

// Definición de la función recursiva "triangular"
const triangular = (n, primerNumero, segundoNumero, contador) => {
  // Caso base: se ha alcanzado el límite de términos deseados
  if (contador > numTerminos) {
    return;
  }

  // Imprimir el término actual
  console.log(primerNumero);

  // Llamada recursiva para generar el siguiente término
  triangular(
    n + 1,
    segundoNumero,
    segundoNumero - primerNumero + segundoNumero + 1,
    contador + 1
  );
};



// Imprimir el número de términos deseados
console.log("Ingrese el número de términos que desea: " + numTerminos);

// Imprimir los primeros "numTerminos" términos de la serie triangular
console.log("Los primeros " + numTerminos + " términos de la serie Triangular son:");
triangular(1, 1, 3, 1);
