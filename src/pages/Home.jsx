import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

const Home = () => {
    const todoRedux = useSelector((state) => 
        state.todo.value  || []
    )
    const [todos, setTodos] = useState(todoRedux)
    console.log(todoRedux)

    const [searchParams, setSearchParams]  = useSearchParams()
    const search = searchParams.get("title")


    useEffect (() => {

        if(searchParams.get("title") ) {
           
            setTodos(todos.filter(todo => todo.text.toLowerCase().includes(search.toLowerCase())))
        }else {
            setTodos(todoRedux)
        }

    }, [search, todoRedux])

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