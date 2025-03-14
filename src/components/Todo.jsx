import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const Todo = () => {
    const { id } = useParams()
    const [todo, setTodo] = useState("")

    useEffect(() => {
        const fetchTodo = async () => {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)

                if (!response.ok) {
                    throw new Error('Errore')
                }

                const todoRisposta = await response.json()
                setTodo(todoRisposta)

            } catch (error) {
                console.error(error.message)
            }
        }
        fetchTodo()
    }, [id]
    )




    return (
        <div>
            {id}
        </div>
    )
}

export default Todo


