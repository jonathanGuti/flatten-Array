// flattenArray.test.js

const flattenArray = require('./flattenArray');

describe('flattenArray', () => {
  test('aplana un arreglo con múltiples niveles de anidación', () => {
    expect(flattenArray([1, [2, [3, [4, 5]]]])).toEqual([1, 2, 3, 4, 5]);
  });

  test('lanza un TypeError si el input no es un arreglo', () => {
    expect(() => flattenArray(123)).toThrow(TypeError);
  });

  test('lanza un TypeError si algún elemento no es un número entero', () => {
    expect(() => flattenArray([1, [2, [3, ["cuatro", 5]]]])).toThrow(TypeError);
  });

  test('funciona con arreglos vacíos', () => {
    expect(flattenArray([])).toEqual([]);
  });

  // Añadir más casos de prueba según sea necesario
});

