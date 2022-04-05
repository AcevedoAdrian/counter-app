import { retornaArreglo } from '../../base/07-deses-arr';

describe('Pruebas sobre el archivo 07-deses-arr.js', () => {

  test('Debe retornar objetos y letras', () => {

    const arr = retornaArreglo();
    // Para evaluares un objeto se usa toEqual
    expect(arr).toEqual(['ABC', 123]);

    const [letras, numeros] = arr;

    // Para evaluares un string se usa toBe
    expect(letras).toBe('ABC');
    expect(typeof letras).toBe('string');

    expect(numeros).toBe(123);
    expect(typeof numeros).toBe('number');
  });
});