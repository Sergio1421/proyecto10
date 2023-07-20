// - 20 junio 2023
// - 2:00 p.m.
// - Versión 1.0
// - Autores: Ing(c) Daniel Atehortua Ing (c)Sergio Vallejo
// - Nombre del lenguaje utilizado: JavaScript
// - Version del lenguaje utilizado: ECMAScript 6.0
// - Presentado a: Doctor Ricardo Moreno Laverde
// - Universidad Tecnológica de Pereira
// - Programa de Ingeniería de Sistemas y Computación
// - El siguiente programa lee desde el teclado un grupo de 75 números, diferentes a cero e imprime:
// * Cantidad de números Mayores a 150
// * Número mayor y número menor encontrado en el grupo
// * Cantidad de Números negativos encontrados
// * Promedio de los Positivos Encontrados.
// - Vgr: Salvedad: Para valores fuera de este rango, no garantizamos los resultados.

var prompt = require('prompt-sync')(); // Importamos el módulo prompt para leer la entrada del usuario

const numeros = []; // Arreglo para almacenar los números ingresados

// Función recursiva para leer los números
const leerNumeros = (indice) => {
  if (indice === 75) {
    // Cuando se han leído los 75 números, realizar los cálculos y mostrar los resultados
    calcularResultados();
    return;
  }

  // Solicitar al usuario ingresar un número
  const numero = parseFloat(prompt(`Ingrese el número ${indice + 1}:`));

  // Validar que el número sea diferente de cero
  if (numero !== 0) {
    numeros.push(numero); // Agregar el número al arreglo
    leerNumeros(indice + 1); // Llamada recursiva para leer el siguiente número
  } else {
    console.log('El número debe ser diferente de cero. Inténtelo nuevamente.');
    leerNumeros(indice); // Volver a solicitar el mismo número
  }
};

// Función para calcular los resultados
const calcularResultados = () => {
  const cantidadMayores150 = contarMayores150();
  const numeroMayor = encontrarNumeroMayor();
  const numeroMenor = encontrarNumeroMenor();
  const cantidadNegativos = contarNegativos();
  const promedioPositivos = calcularPromedioPositivos();

  // Mostrar los resultados
  console.log('Resultados:');
  console.log('Cantidad de números mayores a 150:', cantidadMayores150);
  console.log('Número mayor:', numeroMayor);
  console.log('Número menor:', numeroMenor);
  console.log('Cantidad de números negativos:', cantidadNegativos);
  console.log('Promedio de los positivos:', promedioPositivos);
};

// Función para contar los números mayores a 150
const contarMayores150 = (indice = 0, contador = 0) => {
  if (indice < numeros.length) {
    if (numeros[indice] > 150) {
      contador++;
    }
    return contarMayores150(indice + 1, contador);
  }
  return contador;
};

// Función para encontrar el número mayor
const encontrarNumeroMayor = (indice = 1, mayor = numeros[0]) => {
  if (indice < numeros.length) {
    if (numeros[indice] > mayor) {
      mayor = numeros[indice];
    }
    return encontrarNumeroMayor(indice + 1, mayor);
  }
  return mayor;
};

// Función para encontrar el número menor
const encontrarNumeroMenor = (indice = 1, menor = numeros[0]) => {
  if (indice < numeros.length) {
    if (numeros[indice] < menor) {
      menor = numeros[indice];
    }
    return encontrarNumeroMenor(indice + 1, menor);
  }
  return menor;
};

// Función para contar los números negativos
const contarNegativos = (indice = 0, contador = 0) => {
  if (indice < numeros.length) {
    if (numeros[indice] < 0) {
      contador++;
    }
    return contarNegativos(indice + 1, contador);
  }
  return contador;
};

// Función para calcular el promedio de los números positivos
const calcularPromedioPositivos = (indice = 0, sumaPositivos = 0, contadorPositivos = 0) => {
  if (indice < numeros.length) {
    if (numeros[indice] > 0) {
      sumaPositivos += numeros[indice];
      contadorPositivos++;
    }
    return calcularPromedioPositivos(indice + 1, sumaPositivos, contadorPositivos);
  }
  return contadorPositivos > 0 ? sumaPositivos / contadorPositivos : 0;
};

// Iniciar la lectura de los números
leerNumeros(0);
