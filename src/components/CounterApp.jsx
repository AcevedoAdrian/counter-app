import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ value }) => {

  const [couter, setCounter] = useState(value);

  const handleAdd = () => {
    // setCounte(couter + 1);

    //  Otra forma de hacerlo es:
    setCounter((c) => c + 1);
    // el argumento de la funcion es el valor actual del contador, y se le suma 1. Esto  seria si no sabemos que valor tiene el contador.
  }
  const handleReset = () => {
    setCounter(value);
  }
  const handleDecrement = () => {
    setCounter(couter - 1);
  }
  return (
    <>
      <h1>CounterApp</h1>
      <h2>{couter}</h2>
      <button onClick={handleAdd}>+1</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleDecrement}>-1</button>
    </>
  )
}


CounterApp.propsTypes = {
  value: PropTypes.numeric
}

CounterApp.defaultProps = {
  value: 10
}
export default CounterApp;