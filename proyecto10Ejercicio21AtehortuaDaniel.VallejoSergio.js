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
// - Imprime una piramide inverida que abarca 7 filas y 13 columnas, desde la letra P hasta la D
// -Salvedad: Para valores fuera de este rango, no garantizamos los resultados.

// Función recursiva para imprimir espacios en blanco
function imprimirEspacios(cantidad, contador) {
  if (contador < cantidad) {
    process.stdout.write(" ");
    contador++;
    imprimirEspacios(cantidad, contador);
  }
}

// Función recursiva para imprimir letras
function imprimirLetras(cantidad, contador, letra) {
  if (contador <= cantidad) {
    process.stdout.write(letra + " ");
    contador++;
    imprimirLetras(cantidad, contador, letra);
  }
}

// Función recursiva para generar la figura
function generarFigura(cantidad, espacios, letra) {
  if (cantidad >= 1) {
    imprimirEspacios(espacios, 0);
    imprimirLetras(cantidad, 1, letra);
    process.stdout.write("\n");

    // Realiza un switch para determinar la siguiente letra y tamaño de la figura
    switch (cantidad) {
      case 13:
        generarFigura(cantidad - 2, espacios + 2, 'N');
        break;
      case 11:
        generarFigura(cantidad - 2, espacios + 2, 'L');
        break;
      case 9:
        generarFigura(cantidad - 2, espacios + 2, 'J');
        break;
      case 7:
        generarFigura(cantidad - 2, espacios + 2, 'H');
        break;
      case 5:
        generarFigura(cantidad - 2, espacios + 2, 'F');
        break;
      case 3:
        generarFigura(cantidad - 2, espacios + 2, 'D');
        break;
    }
  }
}

// Función principal
function main() {
  const alturaMaxima = 13; // Altura máxima de la figura
  const espaciosIniciales = 0; // Espacios iniciales
  const letraInicial = 'P'; // Letra inicial


  generarFigura(alturaMaxima, espaciosIniciales, letraInicial); // Llama a la función para generar la figura
}

// Llamada a la función principal
main();



