// - 20 junio 2023
// - 2:00 p.m.
// - Versión 1.0
// - Autores: Ing(c) Daniel Atehortua Ing (c)Sergio Vallejo
// - Nombre del lenguaje utilizado: JavaScript
// - Version del lenguaje utilizado: ECMAScript 6.0
// - Presentado a: Doctor Ricardo Moreno Laverde
// - Universidad Tecnológica de Pereira
// - Programa de Ingeniería de Sistemas y Computación
// - El siguiente programa presenta las tablas de multiplicar de 1 al 10
// - Vgr: Salvedad: Para valores fuera de este rango, no garantizamos los resultados.

 var prompt = require('prompt-sync')(); //importamos el prompt 

 function tablaMultiplicar(numero, multiplicador) {
  if (multiplicador <= 10) { // Verifica si el multiplicador es menor o igual a 10
    console.log(numero + ' x ' + multiplicador + ' = ' + numero * multiplicador); // Imprime la multiplicación
    
    // Llamada recursiva para el siguiente multiplicador
    tablaMultiplicar(numero, multiplicador + 1);
  }
}

function tablasDel1Al10(numero) {
  if (numero <= 10) { // Verifica si el número es menor o igual a 10
    console.log('Tabla de multiplicar del ' + numero + ':');
    
    // Llamada a la función tablaMultiplicar para imprimir la tabla de multiplicar del número actual
    tablaMultiplicar(numero, 1);
    console.log(''); // Imprime una línea en blanco entre tablas
    
    // Llamada recursiva para el siguiente número
    tablasDel1Al10(numero + 1);
  }
}

// Llamada inicial a la función tablasDel1Al10 con el número 1
tablasDel1Al10(1);
