import { useState } from "react"

const Home = () => {
    const [todos, setTodos] = useState([
        { id: 1, text: "Compra il latte" },
        { id: 2, text: "Fai la spesa" },
        { id: 3, text: "Leggi un libro" }
    ])

    return (
        <div>
            <h2>Home Lista  todo</h2>
            {todos.map((todo) => (
                <li key={todo.id}>
                    <h3>{todo.text}</h3>
                </li>
            ))
            }

        </div>
    )
}

export default Home