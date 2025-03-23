import React, { useState } from 'react'
import Title from './Title'
import Text from './Text'
import { useDispatch, useSelector } from 'react-redux'
import { updateData } from './store/slices/todoSlice'

const Box = () => {
    const dispatch = useDispatch()

    const todos = useSelector((state) => state.todo.value) || []
    console.log(todos)

    const [form, setForm] = useState({
        id: todos.id,
        title: todos.title,
        text: todos.text
       
    });


        const handleEdit = (todo) => {
            setForm({
                id: todo.id,
                title: todo.title,
                text: todo.text
            })

            console.log(todo)
        }


    const handleInput = ({ target: { name, value } }) => {
        setForm(f => ({ ...f, [name]: value }));
    }
    
    const handleSubmit = (e) => {
        console.log("inizio handlesubmit" )
        e.preventDefault()
        if(form.id){
            console.log("formid handlesubmit" )
            console.log(form)
            dispatch(updateData(form))
        }
        console.log("fine handlesubmit" )
    }

    return (
        <>
            <Title />
            <Text />
            <div>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        name="title" 
                        placeholder="title..." 
                        value={form.title} 
                        onChange={handleInput}  
                    />
                    <br />
                    <input 
                        type="text" 
                        name="text" 
                        placeholder="text..." 
                        value={form.text} 
                        onChange={handleInput}  
                    />
                    <button type="submit">Change</button>
                </form>

                <h2>TodoList</h2>
                <ul>
                    {todos.map((todo) => (
                        <li key={todo.id}>
                            <p>{todo.title}: {todo.text}</p>
                            <button onClick={ () =>handleEdit(todo)}>Edit</button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Box

