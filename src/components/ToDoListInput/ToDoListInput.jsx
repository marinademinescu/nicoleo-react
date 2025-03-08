import useFilteredTodos from '../useFilteredTodos/useFilteredTodos';
import { useState, useCallback } from 'react';
import { useMemo } from 'react';


const ToDoListInput = () => {
  const [search, setSearch] = useState('')


  const list = [
    { id: 1, text: 'Acquistare latte' },
    { id: 2, text: 'Pulire la casa' },
    { id: 3, text: 'Leggere un libro' },
    { id: 4, text: 'Fare esercizio fisico' }
  ]


  const handleSearchChange = useCallback((e) => {
    setSearch(e.target.value)
  }, [])


  const listsFiltred = useMemo(() => {
    return useFilteredTodos (list, search)
  }, [list, search] )

  return (

    <>
      {search}
      <input onChange={handleSearchChange} value={search} />
      {listsFiltred.listTodo.map((e) => {
        return <div key={e.id}>{e.text} </div>
      })}

    </>


  )
};

export default ToDoListInput;
