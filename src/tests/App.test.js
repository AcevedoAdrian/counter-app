import React from 'react';
import { shallow } from 'enzyme';
// import { render } from '@testing-library/react';
import App from '../components/App';
import '@testing-library/jest-dom';
describe('Probando componentes de react <App />', () => {


  // esto es para usar con el test de componentes de react que viene con jest
  // test('Debe de mostrar el componente <App /> Hola, soy Goku', () => {

  //   const saludo = 'Hola, soy Goku';
  //   const { getByText } = render(<App saludo={saludo} />);
  //   // expect(getByText(saludo)).toBeInTheDocument();
  // })

  test('Debe de mostrar <App /> de manera correcta', () => {
    const saludo = 'Hola, soy Goku';
    const wrapper = shallow(<App saludo={saludo} />);

    expect(wrapper).toMatchSnapshot();
  });

  test('Subtitulo debe tener el texto enviado por props', () => {
    const saludo = 'Hola, soy Goku';
    const despedida = 'Adios';

    const wrapper = shallow(<App saludo={saludo} despedida={despedida} />);
    const textoParrafo = wrapper.find('p').text();
    expect(textoParrafo).toBe(despedida);
  });
});