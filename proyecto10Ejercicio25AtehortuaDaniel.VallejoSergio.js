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
// - Imprime un rombo con la letra Z de 7 filas
// -Salvedad: Para valores fuera de este rango, no garantizamos los resultados.

// La función `espacios` imprime una cantidad determinada de espacios en blanco en la consola.
function imprimirEspacios(cantidad, contador) {
  if (contador < cantidad) {
    process.stdout.write(" "); // Imprime un espacio en blanco
    contador++;
    imprimirEspacios(cantidad, contador); // Llamada recursiva para imprimir el siguiente espacio
  }
}

// La función `figura` dibuja la letra "Z" utilizando recursión y la cantidad de caracteres especificada.
function dibujarFigura(cantidad, contador, espacios) {
  if (contador <= cantidad) {
    if (contador === 1) {
      imprimirEspacios(espacios, 0); // Imprime `espacios` espacios en blanco
    }
    process.stdout.write("Z"); // Imprime la letra "Z"
    contador++;
    dibujarFigura(cantidad, contador, espacios);
  }
}

// La función `numimp` imprime la figura en forma de patrón utilizando recursión y la cantidad de caracteres especificada.
function imprimirPatron(maximo, numero, espacios) {
  if (numero < maximo) {
    dibujarFigura(numero, 1, espacios); // Dibuja la figura con `numero` caracteres y `espacios` espacios en blanco
    process.stdout.write("\n"); // Realiza un salto de línea
    imprimirPatron(maximo, numero + 2, espacios - 1); // Llamada recursiva con una figura más grande y menos espacios en blanco
    dibujarFigura(numero - 2, 1, espacios + 1); // Dibuja la figura en sentido inverso con menos caracteres y más espacios en blanco
    process.stdout.write("\n"); // Realiza un salto de línea
  }
}

// La función `main` es la función principal que inicia el dibujo de la figura.
function main() {
  const maximoCaracteres = 7; // Cantidad máxima de caracteres en la figura
  const cantidadInicial = 1; // Cantidad inicial de caracteres en la figura
  const espaciosIniciales = 9; // Cantidad de espacios en blanco antes de la figura

  console.log("Este programa dibuja la siguiente figura:");
  imprimirPatron(maximoCaracteres, cantidadInicial, espaciosIniciales); // Llama a la función para dibujar la figura en forma de patrón
}

// Llamada a la función principal
main();




