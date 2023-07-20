// - 20 junio 2023
// - 2:00 p.m.
// - Versión 1.0
// - Autores: Ing(c) Daniel Atehortua Ing (c)Sergio Vallejo
// - Nombre del lenguaje utilizado: JavaScript
// - Version del lenguaje utilizado: ECMAScript 6.0
// - Presentado a: Doctor Ricardo Moreno Laverde
// - Universidad Tecnológica de Pereira
// - Programa de Ingeniería de Sistemas y Computación
// - El siguiente programa presenta la serie de Catalan sin sobrepasar el número de terminos que ingrese el usuario
// - Vgr: Salvedad: Para valores fuera de este rango, no garantizamos los resultados.

var prompt = require('prompt-sync')(); // Importamos el módulo prompt para leer la entrada del usuario

// Definición de la función flecha "catalan" que genera la serie de Catalán
const catalan = (n) => {
  // Caso base: el primer término es 1
  if (n === 0) {
    return 1;
  }

  let result = 0;
  
  // Función auxiliar interna para realizar las llamadas recursivas
  const calcularTerminoCatalan = (i, j) => {
    if (i < n) {
      result += catalan(i) * catalan(j);
      calcularTerminoCatalan(i + 1, j - 1);
    }
  };
  
  calcularTerminoCatalan(0, n - 1);
  
  return result;
};

// Función auxiliar para generar y mostrar los términos de la serie de Catalán
const generarTerminosCatalan = (n, terminosMostrados) => {
  if (terminosMostrados < n) {
    console.log(catalan(terminosMostrados));
    generarTerminosCatalan(n, terminosMostrados + 1);
  }
};

// Solicitar al usuario ingresar el número de términos deseados
const numTerminos = parseInt(prompt("Ingrese el número de términos de la serie de Catalán:"));

// Generar y mostrar los primeros "numTerminos" términos de la serie de Catalán
console.log("Los primeros " + numTerminos + " términos de la serie de Catalán son:");
generarTerminosCatalan(numTerminos, 0);
