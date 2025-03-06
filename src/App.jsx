import './App.css';
import useFilteredTodos from './components/useFilteredTodos/useFilteredTodos';
import { useState } from 'react';

function App() {
  const [search, setSearch] = useState('')


  const list = [
      { id: 1, text: 'Acquistare latte' },
      { id: 2, text: 'Pulire la casa' },
      { id: 3, text: 'Leggere un libro' },
      { id: 4, text: 'Fare esercizio fisico' }
    ]

    const listsFiltred = useFilteredTodos(list, search)
  return (

    <>
    {search}
    <input onChange={(e) => setSearch(e.target.value)} />
    {listsFiltred.listTodo.map((e) => {
      return <div key={e.id}>{e.text} </div>
    })}
  </>

  )
   
}

export default App;

