import { useState } from 'react';

const LoginForm = () => {
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


    return (
        <div>
            <h2>InputForm</h2>
            <form >
                <div>
                    <label htmlFor="username">Username:</label>
                    <input type="text" value={username} name='username' onChange={handleInput} />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" value={password} name='password' onChange={handleInput}/>
                </div>

            </form>
        </div>
    )

}

export default LoginForm