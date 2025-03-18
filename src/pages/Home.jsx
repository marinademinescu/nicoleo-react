import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { Link } from "react-router-dom"

const Home = () => {
    const [todos, setTodos] = useState([
        { id: 1, text: "Compra il latte" },
        { id: 2, text: "Fai la spesa" },
        { id: 3, text: "Leggi un libro" },
        { id: 4, text: "Leggi il cartone del latte" }
    ])

    const [searchParams, setSearchParams]  = useSearchParams()
    const search = searchParams.get("title")


    useEffect (() => {

        if(searchParams.get("title") ) {
           
            setTodos(todos.filter(todo => todo.text.toLowerCase().includes(search.toLowerCase())))
        }

    }, [])

    return (
        <div>
            <h1>Home </h1>
            <h2>Lista  todo</h2>
             <div> <Link to="/?title=latte">Filtra</Link></div>

            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <h3>{todo.text}</h3>
                    </li>
                ))
                }
            </ul>
            Search: {searchParams.get("title")}
        </div>
    )
}

export default Home