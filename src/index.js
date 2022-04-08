import React from "react";
import ReactDOM from 'react-dom';
// import App from './components/App';
import CounterApp from "./components/CounterApp";
import './styles.css';



const root = document.getElementById('root');

ReactDOM.render(<CounterApp value={32} />, root);
// ReactDOM.render(<App saludo="Hola, soy Goku" />, root);