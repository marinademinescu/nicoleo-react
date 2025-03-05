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
import LoginForm from './components/LoginForm/LoginForm';
import Submit from './components/Submit/Submit';
import UncontrolledInput from './components/UncontrolledInput/UncontrolledInput';
import ItemList from './components/ItemList/ItemList';
import CardChildren from './components/CardChildren/CardChildren';
import TodoList from './components/TodoList/TodoList';




function App() {

  const items = ['Mela', 'Banana', 'Arancia', 'Pera'];
 

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
      <LoginForm />
      <Submit />
      <UncontrolledInput />
      <ItemList items={items} />
      <CardChildren>
        <h1>Nuovo Contenuto</h1>
        <p>Questo è un paragrafo personalizzato passato come children.</p>
      </CardChildren>
      <TodoList />
      <h1>React con Vite!</h1>
      <p>Questa è la mia prima app con Vite</p>
    </div>
  );
}

export default App;
