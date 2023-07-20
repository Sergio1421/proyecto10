// - 20 junio 2023
// - 2:00 p.m.
// - Versión 1.0
// - Autores: Ing(c) Daniel Atehortua Ing (c)Sergio Vallejo
// - Nombre del lenguaje utilizado: JavaScript
// - Version del lenguaje utilizado: ECMAScript 6.0
// - Presentado a: Doctor Ricardo Moreno Laverde
// - Universidad Tecnológica de Pereira
// - Programa de Ingeniería de Sistemas y Computación
// - El siguiente programa presenta la serie de Motzkin sin sobrepasar el número de terminos que ingrese el usuario
// - Vgr: Salvedad: Para valores fuera de este rango, no garantizamos los resultados.

var prompt = require('prompt-sync')(); // Importamos el módulo prompt para leer la entrada del usuario

// Definición de la función flecha "motzkin" que genera la serie de Motzkin
const motzkin = (n) => {
  // Casos base: los dos primeros términos son 1
  if (n === 0 || n === 1) {
    return 1;
  }

  let result = motzkin(n - 1);

  // Función auxiliar interna para realizar las llamadas recursivas y calcular la suma de términos anteriores
  const calcularSumaTerminos = (k, suma) => {
    if (k <= n - 2) {
      suma += motzkin(k) * motzkin(n - 2 - k);
      return calcularSumaTerminos(k + 1, suma);
    }
    return suma;
  };

  result += calcularSumaTerminos(0, 0);

  return result;
};

// Solicitar al usuario ingresar el número de términos deseados
const numTerminos = parseInt(prompt("Ingrese el número de términos de la serie de Motzkin:"));

// Función auxiliar para generar y mostrar los términos de la serie de Motzkin
const generarTerminosMotzkin = (n, terminosMostrados) => {
  if (terminosMostrados < n) {
    console.log(motzkin(terminosMostrados));
    generarTerminosMotzkin(n, terminosMostrados + 1);
  }
};

// Generar y mostrar los primeros "numTerminos" términos de la serie de Motzkin
console.log("Los primeros " + numTerminos + " términos de la serie de Motzkin son:");
generarTerminosMotzkin(numTerminos, 0);
