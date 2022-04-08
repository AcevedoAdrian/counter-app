import { getImagen } from "../../base/11-async-await";

describe('Pruebas sobre el archivo 11-async-await.js', () => {

  test('getImagen debe retornar una url de una imagen', async () => {
    const url = await getImagen();

    expect(url).toContain('https://');
  })
});