// - 20 junio 2023
// - 2:00 p.m.
// - Versión 1.0
// - Autores: Ing(c) Daniel Atehortua Ing (c)Sergio Vallejo
// - Nombre del lenguaje utilizado: JavaScript
// - Version del lenguaje utilizado: ECMAScript 6.0
// - Presentado a: Doctor Ricardo Moreno Laverde
// - Universidad Tecnológica de Pereira
// - Programa de Ingeniería de Sistemas y Computación
// - El siguiente programa presenta la serie de Padovan sin sobrepasar el número de terminos que ingrese el usuario
// - Vgr: Salvedad: Para valores fuera de este rango, no garantizamos los resultados.


 var prompt = require('prompt-sync')(); // Importamos el módulo prompt para leer la entrada del usuario

 // Definición de la función flecha "padovan" que genera la serie de Padovan
 const padovan = (n) => {
   // Casos base: los primeros tres términos son 1, 0 y 0
   if (n === 0) {
     return 1;
   }
   if (n === 1 || n === 2) {
     return 0;
   }
 
   // Llamadas recursivas para calcular el enésimo término de Padovan
   return padovan(n - 2) + padovan(n - 3);
 };
 
 // Solicitar al usuario ingresar el número de términos deseados
 const numTerminos = parseInt(prompt("Ingrese el número de términos de la serie de Padovan:"));
 
 // Función auxiliar para generar los términos y mostrarlos en pantalla
 const generarTerminos = (n, terminosMostrados) => {
   if (terminosMostrados < n) {
     // Mostrar el término actual
     console.log(padovan(terminosMostrados));
 
     // Llamada recursiva para mostrar el siguiente término
     generarTerminos(n, terminosMostrados + 1);
   }
 };
 
 // Generar y mostrar los primeros "numTerminos" términos de la serie de Padovan
 console.log("Los primeros " + numTerminos + " términos de la serie de Padovan son:");
 generarTerminos(numTerminos, 0);
 
