// cada archivo de prueba es un test suite.
// test('Probando demo test', () => {

//   // Ejecutar el test
//   expect(true).toBe(true);


// )};
describe('Pruebas en ele archivo demo.test.js', () => {

  test('deben ser iguales los string', () => {
    const mensaje = 'Hola Mundo';
    const mensaje2 = 'Hola Mundo';
    expect(mensaje).toBe(mensaje2);
  }
  )
})