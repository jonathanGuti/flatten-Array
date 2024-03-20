// flattenArray.js

/**
 * Aplana un arreglo de números enteros o arreglos de enteros anidados.
 * @param {Array} array El arreglo a aplanar.
 * @returns {Array} Un nuevo arreglo aplanado.
 */
function flattenArray(array) {
    // Verifica si el input es válido (un arreglo)
    if (!Array.isArray(array)) {
      throw new TypeError('El input debe ser un arreglo.');
    }
  
    // Función recursiva para manejar el aplanamiento
    const flatten = (arr) => {
      return arr.reduce((acc, val) => {
        // Si el elemento es un arreglo, aplana este elemento y lo añade al acumulador
        if (Array.isArray(val)) {
          return acc.concat(flatten(val));
        }
        // Verifica si el elemento es un número entero
        if (typeof val !== 'number' || !Number.isInteger(val)) {
          throw new TypeError('Todos los elementos deben ser números enteros.');
        }
        // Añade el elemento al acumulador si es un número entero
        return acc.concat(val);
      }, []);
    };
  
    return flatten(array);
  }
  
  module.exports = flattenArray;
  