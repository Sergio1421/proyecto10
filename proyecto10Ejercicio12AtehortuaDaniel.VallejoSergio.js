// - 20 junio 2023
// - 2:00 p.m.
// - Versión 1.0
// - Autores: Ing(c) Daniel Atehortua Ing (c)Sergio Vallejo
// - Nombre del lenguaje utilizado: JavaScript
// - Version del lenguaje utilizado: ECMAScript 6.0
// - Presentado a: Doctor Ricardo Moreno Laverde
// - Universidad Tecnológica de Pereira
// - Programa de Ingeniería de Sistemas y Computación
// - El siguiente programa imprime un numero entero alreves
// - Vgr: Salvedad: Para valores fuera de este rango, no garantizamos los resultados.

 var prompt = require('prompt-sync')(); //importamos el prompt 

 // Solicitar al usuario ingresar un número entero
const numero = prompt("Ingrese un número entero:");

// Función recursiva para invertir el número
const invertirNumero = (num) => {
  // Caso base: el número es de un solo dígito
  if (num < 10) {
    return num.toString(); // Convertir el número en cadena y retornarlo
  }

  const ultimoDigito = num % 10; // Obtener el último dígito
  const restoNumero = Math.floor(num / 10); // Obtener el número sin el último dígito

  // Llamada recursiva para invertir el número sin el último dígito
  return ultimoDigito.toString() + invertirNumero(restoNumero);
};

// Invertir el número ingresado y mostrar el resultado
const numeroInvertido = invertirNumero(parseInt(numero));
console.log("El número invertido es: " + numeroInvertido);
