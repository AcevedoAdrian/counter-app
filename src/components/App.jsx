import React from "react";
import PropTypes from 'prop-types'
const App = ({ saludo, despedida }) => {


  const arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const boleanos = false;
  const objetoPersona = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 30
  }

  return (<>
    <h1>{saludo}</h1>
    {/* Lo que esta entre llave no imprime boleanos ya que los evaluda, los undefine tampoco se imprimen en estas llaves*/}
    <h2>{boleanos}</h2>
    {/* Itera sobre el arreay y cada elemento para a ser un string */}
    <h2>{arreglo}</h2>
    {/* No se puede imprimir objetos hay que parsearlos   */}
    {/* <h1>{objetoPersona}</h1> */}
    <pre> {JSON.stringify(objetoPersona, null, 3)}</pre>

    <p>My first aplication</p>
  </>);
};
App.propTypes = {
  saludo: PropTypes.string.isRequired,
  despedida: PropTypes.string
}

// Definimos las propiedades que va a recibir el componente con un valor por defecto, para no escribirlo en el componente en los parametros 
App.defaultProps = {
  despedida: 'Adios',
  saludo: 'Holiwis'
}
export default App;