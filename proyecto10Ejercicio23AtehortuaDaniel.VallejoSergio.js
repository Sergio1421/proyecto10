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
// - Imprime una piramide invertida de letras P, hasta la columna 13 y hasta la fila 7
// -Salvedad: Para valores fuera de este rango, no garantizamos los resultados.

// Función recursiva que imprime una cantidad determinada de espacios en blanco
function imprimirEspacios(cantidad, contador) {
  if (contador < cantidad) {
    process.stdout.write(" "); // Imprime un espacio en blanco
    contador++;
    imprimirEspacios(cantidad, contador); // Llamada recursiva para imprimir el siguiente espacio
  }
}

// Función recursiva que imprime una cantidad determinada de letras "P"
function imprimirLetras(cantidad, contador) {
  if (contador <= cantidad) {
    process.stdout.write("P"); // Imprime la letra "P"
    imprimirLetras(cantidad, contador + 1); // Llamada recursiva para imprimir la siguiente letra
  }
}

// Función principal que dibuja la figura en forma de pirámide invertida
function dibujarFigura(cantidadLetras, cantidadEspacios) {
  if (cantidadLetras >= 1) {
    imprimirEspacios(cantidadEspacios, 0); // Imprime los espacios en blanco al principio de la línea
    imprimirLetras(cantidadLetras, 1); // Imprime las letras "P" en la línea
    process.stdout.write("\n"); // Imprime un salto de línea para pasar a la siguiente línea
    dibujarFigura(cantidadLetras - 2, cantidadEspacios + 1); // Llamada recursiva para dibujar la siguiente línea con menos letras y más espacios
  }
}

// Función principal
function main() {
  const maximoLetras = 13; // Cantidad máxima de letras en la línea superior de la figura
  const inicialEspacios = 0; // Número inicial de espacios en blanco

  dibujarFigura(maximoLetras, inicialEspacios); // Llama a la función para dibujar la figura
}

// Llamada a la función principal
main();




