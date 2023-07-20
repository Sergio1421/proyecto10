// - 20 junio 2023
// - 2:00 p.m.
// - Versión 1.0
// - Autores: Ing(c) Daniel Atehortua Ing (c)Sergio Vallejo
// - Nombre del lenguaje utilizado: JavaScript
// - Version del lenguaje utilizado: ECMAScript 6.0
// - Presentado a: Doctor Ricardo Moreno Laverde
// - Universidad Tecnológica de Pereira
// - Programa de Ingeniería de Sistemas y Computación
// - El siguiente programa presenta la serie de Bell sin sobrepasar el número de terminos que ingrese el usuario
// - Vgr: Salvedad: Para valores fuera de este rango, no garantizamos los resultados.

var prompt = require('prompt-sync')(); // Importamos el módulo prompt para leer la entrada del usuario

// Definición de la función flecha "bell" que genera la serie de Bell
const bell = (n) => {
  // Caso base: el primer término es 1
  if (n === 0) {
    return 1;
  }

  let result = 0;
  
  // Función auxiliar interna para realizar las llamadas recursivas
  const calcularTerminoBell = (k) => {
    if (k < n) {
      result += binomialCoefficient(n - 1, k) * bell(k);
      calcularTerminoBell(k + 1);
    }
  };
  
  calcularTerminoBell(0);
  
  return result;
};

// Función auxiliar para calcular el coeficiente binomial
const binomialCoefficient = (n, k) => {
  if (k === 0 || k === n) {
    return 1;
  }
  
  return binomialCoefficient(n - 1, k - 1) + binomialCoefficient(n - 1, k);
};

// Solicitar al usuario ingresar el número de términos deseados
const numTerminos = parseInt(prompt("Ingrese el número de términos de la serie de Bell:"));

// Función auxiliar para generar y mostrar los términos de la serie de Bell
const generarTerminosBell = (n, terminosMostrados) => {
  if (terminosMostrados < n) {
    console.log(bell(terminosMostrados));
    generarTerminosBell(n, terminosMostrados + 1);
  }
};

// Generar y mostrar los primeros "numTerminos" términos de la serie de Bell
console.log("Los primeros " + numTerminos + " términos de la serie de Bell son:");
generarTerminosBell(numTerminos, 0);
