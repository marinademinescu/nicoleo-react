import { useState } from "react"

const Home = () => {
    const [todos, setTodos] = useState([
        { id: 1, text: "Compra il latte" },
        { id: 2, text: "Fai la spesa" },
        { id: 3, text: "Leggi un libro" }
    ])

    return (
        <div>
            <h1>Home </h1>
            <h2>Lista  todo</h2>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <h3>{todo.text}</h3>
                    </li>
                ))
                }
            </ul>
        </div>
    )
}

export default Home