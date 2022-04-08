import heroes from '../../data/heroes';
import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';


describe('Pruebas sobre el archivo 08-imp-exp.js', () => {

  test('getHeroeById debe rotornar un heroe por un id', () => {
    const id = 1;
    const heroe = getHeroeById(id);

    const heroeTest = heroes.find(h => h.id === id);

    expect(heroe).toEqual(heroeTest);

  });

  test('getHeroeById debe teronar undefined si no encuentra en la lista al Heroe', () => {
    const id = 10;
    const heroe = getHeroeById(id);

    expect(heroe).toBe(undefined);

  });


  test('getHeroesByOwner debe retronart un arreglo con los héroes de DC', () => {
    const owner = 'DC';
    const heroes = getHeroesByOwner(owner);
    const heroesTest = heroes.filter(h => h.owner === owner);
    // compara  que el contenido de los dos objetos sea igual
    expect(heroes).toEqual(heroesTest);

  });

  test('getHeroesByOwner debe retornar un arreglos con los héroes de Marvers', () => {
    const owner = 'Marvel';
    const heroes = getHeroesByOwner(owner);

    expect(heroes.length).toBe(2);

  });

});