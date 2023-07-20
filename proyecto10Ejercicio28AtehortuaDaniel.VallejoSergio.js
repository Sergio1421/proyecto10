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
// - Imprime una piramide hacia la izquierda, que va hasta la columna 40 y fila 11
// -Salvedad: Para valores fuera de este rango, no garantizamos los resultados.

// La función `escribirEspacios` escribe una cantidad determinada de espacios en blanco en la consola.
function escribirEspacios(cantidad, contador) {
  if (contador < cantidad) {
    process.stdout.write(" "); // Escribe un espacio en la consola
    contador++;
    escribirEspacios(cantidad, contador); // Llamada recursiva a la función `escribirEspacios`
  }
}

// La función `dibujarFigura` dibuja una figura en forma de patrón utilizando recursión.
function dibujarFigura(cantidad, contador, espaciosIniciales) {
  if (contador <= cantidad) {
    if (contador === 0) {
      escribirEspacios(espaciosIniciales, 0); // Llama a la función `escribirEspacios` para escribir los espacios iniciales en cada fila
    }
    process.stdout.write("A"); // Escribe la letra "A" en la consola
    contador++;
    dibujarFigura(cantidad, contador, espaciosIniciales); // Llamada recursiva a la función `dibujarFigura`
  }
}

// La función `dibujarPatron` dibuja el patrón completo utilizando recursión.
function dibujarPatron(maximo, numeroFilas, espaciosIniciales) {
  if (numeroFilas < maximo) {
    dibujarFigura(numeroFilas, 0, espaciosIniciales); // Llama a la función `dibujarFigura` para dibujar la figura en la consola
    console.log(""); // Imprime un salto de línea en la consola
    numeroFilas++;
    espaciosIniciales--;
    dibujarPatron(maximo, numeroFilas, espaciosIniciales); // Llamada recursiva a la función `dibujarPatron`
    numeroFilas -= 2;
    espaciosIniciales += 2;
    dibujarFigura(numeroFilas, 0, espaciosIniciales); // Llama a la función `dibujarFigura` para dibujar la figura invertida en la consola
    console.log(""); // Imprime un salto de línea en la consola
  }
}

// La función principal `main` inicia el dibujo del patrón completo.
function main() {
  const numeroFilasInicial = 0;
  const maximoFilas = 6;
  const espaciosIniciales = 39;
  dibujarPatron(maximoFilas, numeroFilasInicial, espaciosIniciales); // Llama a la función `dibujarPatron` para dibujar el patrón completo en la consola
}

// Llamada a la función principal
main();




