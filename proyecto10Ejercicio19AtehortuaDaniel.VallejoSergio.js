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
// - Se simula una computadora que muestre el movimiento de dos A a los extremos, acercandose al centro con cada entrada por teclado del usuario
// -Salvedad: Para valores fuera de este rango, no garantizamos los resultados.

// Función auxiliar para imprimir espacios en blanco
const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds));
};

async function imprimirEspacios(cantidad) {
  // Imprime una cierta cantidad de espacios
  if (cantidad > 0) {
    process.stdout.write(" ");
    await imprimirEspacios(cantidad - 1);
  }
}

async function animarLetrasA(posicion, espaciosEntre) {
  // Limpia la consola para cada "frame" de la animación
  console.clear();
  
  // Imprime los espacios antes de la primera "A"
  await imprimirEspacios(posicion);
  process.stdout.write("A"); // Imprime la primera "A"
  
  // Imprime los espacios entre las dos "A"
  await imprimirEspacios(espaciosEntre);
  process.stdout.write("A"); // Imprime la segunda "A"
  
  console.log(); // Pasa a la siguiente línea
  
  await sleep(100); // Retrasa el siguiente "frame" de la animación

  // Si aún hay espacio entre las "A", continúa la animación
  if (espaciosEntre > 0) {
    await animarLetrasA(posicion + 1, espaciosEntre - 2);
  }
}

// Inicia la animación
animarLetrasA(1, 38);



