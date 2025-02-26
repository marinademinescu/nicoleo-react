import { useState } from 'react';
import './App.css';
import HelloWorld from './CiaoMondo';
import Counter from './Counter';
import CounterState from './components/CounterState/CounterState';
import Increment from './components/Increment/Increment';
import Decrement from './components/Decrement/Decrement';
import Reset from './components/Reset/Reset';
import UseEffect from './components/UseEffect/UseEffect';
import InputTesto from './components/InputTesto/InputTesto'

function App() {


  return (
    <div>
      <HelloWorld />
      <Counter />
      <CounterState />
      <Increment />
      <Decrement />
      <Reset />
      <UseEffect />
      <br />
      <InputTesto />
      <h1>React con Vite!</h1>
      <p>Questa è la mia prima app con Vite</p>
    </div>
  );
}

export default App;
