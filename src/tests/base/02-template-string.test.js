import '@testing-library/jest-dom';
import { getSaludo } from '../../base/02-template-string';
describe('Pruebas sobre el archivo 02-template-string.js',
  () => {

    test('getSaludo debe de retornar Hola Adrian', () => {
      const nombre = 'Adrian';
      const saludo = getSaludo(nombre);
      expect(saludo).toBe(`Hola ${nombre}`);

    })
    // getsaludo debe de retornar Hola Carlos si no hay argumentos en el nombre
    test('getSaludo sin pametros debe retornar Hola Carlos', () => {

      const saludo = getSaludo();
      expect(saludo).toBe('Hola Carlos');
    })
  })