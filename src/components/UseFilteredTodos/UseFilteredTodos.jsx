import { useState, useEffect } from 'react';

const UseFilteredTodos = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Acquistare latte' },
    { id: 2, text: 'Pulire la casa' },
    { id: 3, text: 'Leggere un libro' },
    { id: 4, text: 'Fare esercizio fisico' }
  ]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const filtered = todos.filter(todo => todo.text.toLowerCase().includes(searchTerm.toLowerCase()));
    setFilteredTodos(filtered);
  }, [todos, searchTerm]);

  return (
    <div>
      <input 
        type="text" 
        value={searchTerm} 
        onChange={e => setSearchTerm(e.target.value)} 
        placeholder="Cerca una task"
      />
      <ul>
        {filteredTodos.map(todo => (
          <li key={todo.id}><h3>{todo.text}</h3></li>
        ))}
      </ul>
    </div>
  );
}

export default UseFilteredTodos;
