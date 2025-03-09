import { createContext, useState } from "react";

export const ListContext = createContext(null)

const ListProvider = ({ children }) => {
    const [todos, setTodos] = useState([
        { id: 1, text: 'Acquistare latte' },
        { id: 2, text: 'Pulire la casa' },
        { id: 3, text: 'Leggere un libro' },
        { id: 4, text: 'Fare esercizio fisico' }
    ])

    const updateTodo = (id, newText) => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, text: newText } : text))
    }
    return (
        <ListContext.Provider value={{ todos, updateTodo }} >
            {children}
        </ListContext.Provider>

    )
}

export const useListContext = () => {
    return useContext(ListContext)
}

export default ListProvider