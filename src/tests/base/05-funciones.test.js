import { getUser, getUsuarioActivo } from "../../base/05-funciones";

describe('Pruebas sobre el archivo 05-funciones.js', () => {

  test('getUser debe de retornar un objeto', () => {

    const userTest = {
      uid: 'ABC123',
      username: 'El_Papi1502'
    }

    const user = getUser();
    expect(user).toEqual(userTest);
  })

  test('getUsuarioActivo debe retornar un objeto', () => {

    const nombre = 'Adrian';
    const usuarioActivoTest = {
      uid: 'ABC567',
      username: nombre
    }
    const usuarioActivo = getUsuarioActivo(nombre);
    expect(usuarioActivo).toEqual(usuarioActivoTest);
  })
});