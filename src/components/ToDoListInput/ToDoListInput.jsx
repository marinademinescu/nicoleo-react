import useFilteredTodos from '../useFilteredTodos/useFilteredTodos';
import { useState } from 'react';

const ToDoListInput = () => {
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
};

export default ToDoListInput;
