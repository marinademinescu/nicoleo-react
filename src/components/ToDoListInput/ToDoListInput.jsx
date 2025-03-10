import useFilteredTodos from '../useFilteredTodos/useFilteredTodos';
import { useState, useCallback, useRef, useEffect, useContext } from 'react';
import { useMemo } from 'react';
import { ListContext } from '../providers/ListProvider';


const ToDoListInput = () => {
  const [search, setSearch] = useState('')
  const inputRef = useRef(null)
  const {todos, updateTodo} = useContext(ListContext)

  useEffect(() => {
    inputRef.current.focus()
  }, [])


  const handleSearchChange = useCallback((e) => {
    setSearch(e.target.value)
  }, [])


  const listsFiltred = useMemo(() => {
    return useFilteredTodos (todos, search)
  }, [todos, search] )


  const handleUpdateTodo = (id, newText) => {
    const updateTodo= updateTodo(id, newText)
  }
  return (

    <>
      {search}
      <input ref={inputRef}   onChange={handleSearchChange} value={search} />
      {listsFiltred.listTodo.map((e) => {
        return <div key={e.id}>{e.text} 
        <button onClick={() => handleUpdateTodo(e.id, 'Nuovo testo')}>Aggiorna</button></div>
      })}

    </>


  )
};

export default ToDoListInput;
