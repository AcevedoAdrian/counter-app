import heroes from '../../data/heroes';
import { getHeroeByIdAsync } from "../../base/09-promesas";

describe('Pruebas sobre el archivo 09-promesas.js', () => {

  // con el done esperamos que termine la promesa, cuando debe terminar la prueba  peara indicar que la prueba ha terminado
  test('getHeroeById debe rotornar un heroe por un id', (done) => {

    const id = 1;
    getHeroeByIdAsync(id).then(
      heroe => {
        expect(heroe).toBe(heroes[0]);
        done();
      }
    )
  });

  test('getHeroeById debe teronar undefined si no encuentra en la lista al Heroe', (done) => {
    const id = 10;
    getHeroeByIdAsync(id).catch(
      error => {
        expect(error).toBe('No se pudo encontrar el héroe');
        done();
      }
    );
  });

})