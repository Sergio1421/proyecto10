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
// - Imprime un moño de letras A de 7 filas
// -Salvedad: Para valores fuera de este rango, no garantizamos los resultados.

// Definición de la función recursiva para imprimir la pirámide
const imprimirPiramide = (renglon) => {
  // Caso base: si el número de renglón supera el límite (7), se detiene la recursión
  if (renglon > 7) {
    return;
  }

  let linea = ""; // Variable para almacenar la línea actual de la pirámide

  // Determinar la configuración de letras 'A' en cada renglón utilizando condicionales
  if (renglon === 1 || renglon === 7) {
    linea = "A     A";
  } else if (renglon === 2 || renglon === 6) {
    linea = "AA   AA";
  } else if (renglon === 3 || renglon === 5) {
    linea = "AAA AAA";
  } else if (renglon === 4) {
    linea = "AAAAAAA";
  }

  console.log(linea); // Imprimir la línea actual de la pirámide

  // Llamada recursiva a la función para imprimir el siguiente renglón de la pirámide
  imprimirPiramide(renglon + 1);
};

// Llamada inicial a la función para comenzar a imprimir la pirámide desde el primer renglón
imprimirPiramide(1);
