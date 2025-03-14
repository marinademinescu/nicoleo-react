import useFetch from '../UseFetch/UseFetch'
import { useNavigate } from 'react-router-dom'

const TodoList = () => {
    const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/todos')

    const navigate = useNavigate()
    

    if (loading) {
        return <div>Caricamento...</div>
    }

    if (error) {
        return <div>Errore: {error}</div>
    }

    return (
        <div>
            <h1>Todo List </h1>
            <ul>
                {data.map((todo) => (
                    <li key={todo.id}>
                        <h3 onClick={() => navigate(`/todo/${todo.id}`)}>{todo.title}</h3>   
                    </li>
                ))

                }
            </ul>

        </div>
    )
}

export default TodoList