// - 20 junio 2023
// - 2:00 p.m.
// - Versión 1.0
// - Autores: Ing(c) Daniel Atehortua Ing (c)Sergio Vallejo
// - Nombre del lenguaje utilizado: JavaScript
// - Version del lenguaje utilizado: ECMAScript 6.0
// - Presentado a: Doctor Ricardo Moreno Laverde
// - Universidad Tecnológica de Pereira
// - Programa de Ingeniería de Sistemas y Computación
// - El siguiente programa presenta la serie de Narayana sin sobrepasar el número de terminos que ingrese el usuario
// - Vgr: Salvedad: Para valores fuera de este rango, no garantizamos los resultados.

var prompt = require('prompt-sync')(); // Importamos el módulo prompt para leer la entrada del usuario

// Definición de la función flecha "narayana" que genera la serie de Narayana
const narayana = (n, a = 1, b = 1, c = 1) => {
  // Casos base: los primeros tres términos son 1, 1 y 1
  if (n === 0) {
    return a;
  }
  if (n === 1) {
    return b;
  }
  if (n === 2) {
    return c;
  }

  // Llamadas recursivas para calcular el enésimo término de Narayana
  return narayana(n - 1, b, c, a + c);
};

// Solicitar al usuario ingresar el número de términos deseados
const numTerminos = parseInt(prompt("Ingrese el número de términos de la serie de Narayana:"));

// Función auxiliar para generar los términos y mostrarlos en pantalla
const generarTerminos = (n, terminosMostrados) => {
  if (terminosMostrados < n) {
    // Mostrar el término actual
    console.log(narayana(terminosMostrados));

    // Llamada recursiva para mostrar el siguiente término
    generarTerminos(n, terminosMostrados + 1);
  }
};

// Generar y mostrar los primeros "numTerminos" términos de la serie de Narayana
console.log("Los primeros " + numTerminos + " términos de la serie de Narayana son:");
generarTerminos(numTerminos, 0);
