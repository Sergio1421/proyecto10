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

// -Junio 20
// - 3pm
// - 1.0
// -Daniel Eduardo Atehortua.Ing(c) - Sergio Vallejo.Ing(c)
// - Javascript
// - Version 6.
// - Presentado a: Doctor Ricardo Moreno Laverde
// - Universidad Tecnológica de Pereira
// - Imprime los terminos deseados de la serie de Perrin
// -Salvedad: Para valores fuera de este rango, no garantizamos los resultados.

function perrinSeries(n, series = [3, 0, 2]) {
  // La función perrinSeries utiliza recursividad de cola para generar la serie de Perrin hasta el número de términos deseado.

  if (n <= 3) {
    // Si el número de términos deseado (n) es menor o igual a 3,
    // se devuelve una porción del arreglo series que contiene los términos generados hasta n.
    return series.slice(0, n);
  }

  // Calcula el siguiente término de la serie de Perrin sumando el valor en la posición series.length - 2
  // con el valor en la posición series.length - 3.
  const term = series[series.length - 2] + series[series.length - 3];

  // Agrega el término calculado al arreglo series.
  series.push(term);

  if (series.length === n) {
    // Si la longitud de series es igual al número de términos deseados (n),
    // se devuelve el arreglo completo.
    return series;
  }

  // Se realiza una llamada recursiva a perrinSeries con los mismos términos deseados (n) y el arreglo actualizado (series).
  return perrinSeries(n, series);
}

function generatePerrinSeries(numTerms) {
  // La función generatePerrinSeries genera y muestra la serie de Perrin con el número de términos deseados.

  const series = perrinSeries(numTerms);

  // Imprime en la consola los términos generados de la serie de Perrin, separados por comas.
  console.log('Los términos de la serie de Perrin son:', series.join(', '));
}

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingrese el número de términos deseados: ', (answer) => {
  // Lee la respuesta del usuario y la almacena en la variable answer.

  const numTerms = parseInt(answer);

  // Convierte la respuesta a un entero y la asigna a la variable numTerms.

  generatePerrinSeries(numTerms);

  // Llama a la función generatePerrinSeries pasando el número de términos deseados (numTerms).

  rl.close();
  
  // Cierra la interfaz de lectura de la línea para finalizar el programa.
});
