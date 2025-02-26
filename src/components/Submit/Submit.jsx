import { useState } from 'react';

const Submit= () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    const handleInput = (e) => {
        const {name, value} = e.target
        if(name === 'username') {
            setUsername(value)
        } else if (name === 'password') {
            setPassword(value)
        }


    }


    const handleSubmit = (e) => {
        e.preventDefault()

        if(username === ''  || password === '') {
            alert('Per favore, compila entrambi i campi!')
            return
        }

        alert('Login effettuato con successo!')
    }

    return (
        <div>
            <h2>InputForm</h2>
            <form onSubmit={handleSubmit} >
                <div>
                    <label htmlFor="username">Username:</label>
                    <input type="text" value={username} name='username' onChange={handleInput} />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" value={password} name='password' onChange={handleInput}/>
                </div>
                <div>
                    <button type='submit'>Login</button>
                </div>

            </form>
        </div>
    )

}

export default Submit