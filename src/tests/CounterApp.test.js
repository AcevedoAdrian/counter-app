import { shallow } from 'enzyme';
import CounterApp from '../components/CounterApp';

describe('Probando el componente <CounterApp />', () => {

  let wrapper = shallow(<CounterApp />);
  // esta funcion se ejecuta antes de cada test, y se puede usar para inicializar variables o estados. En este caso, se inicializa el wapper con el componente CounterApp.
  beforeEach(() => {

    wrapper = shallow(<CounterApp />);
  })

  test('<CounterApp /> debe mostrar igual que el snapshot', () => {

    const wrapper = shallow(<CounterApp />);
    expect(wrapper).toMatchSnapshot();

  });

  test('Debe de mostrar el valor por defecto de 100', () => {
    const wrapper = shallow(<CounterApp value={100} />);
    const h2Counter = wrapper.find('h2').text().trim();
    expect(h2Counter).toBe('100');
  })

  test('Debe de incrementar con el boton +1', () => {

    //  ejeccutar el evento onClick del boton +1, lo que hace es ejecutar la funcion handleAdd del componente CounterApp. 
    wrapper.find('button').at(0).simulate('click');
    const h2Counter = wrapper.find('h2').text().trim();
    expect(h2Counter).toBe('11');

  });

  test('Debe de incrementar con el boton -1', () => {
    // ejecuto el evento click del boton -1, lo que deberia de hacer es que el contador disminuya en 1.
    wrapper.find('button').at(2).simulate('click');
    const h2Counter = wrapper.find('h2').text().trim();
    expect(h2Counter).toBe('9');

  });

  test('Debe de resetear el contador con el boton Reset', () => {
    // ejecuto 2 veces decrementando el valor del contador para luego resetearlo  para ver si ejecuto el evento click del boton Reset, lo que deberia de hacer es que el contador vuelva a ser el valor por defecto.
    const wrapper = shallow(<CounterApp value={105} />);
    wrapper.find('button').at(2).simulate('click');
    wrapper.find('button').at(2).simulate('click');
    wrapper.find('button').at(1).simulate('click');
    const h2Counter = wrapper.find('h2').text().trim();
    expect(h2Counter).toBe('105');

  });
});