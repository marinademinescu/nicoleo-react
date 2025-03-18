import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';

const TodoDetail = () => {
  const { id } = useParams()
  const [todo, setTodo] = useState(null)
  const [searchParams, setSearchParams]  = useSearchParams()


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
      <h1>Dettagli del To-Do</h1>
      <h2>{todo.title}</h2>
      <p> {todo.id}</p>
      Search: {searchParams.get("title")}
    </div>
  )
}

export default TodoDetail
