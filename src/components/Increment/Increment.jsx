import {useState} from 'react'

const Increment = () => {
const [counter, setCounter] = useState(0)

const increButton = () => {
    setCounter((_counter) => {
        return _counter + 1;

    })

}

    return ( 
        <div>

        <button onClick={increButton}>incrementa</button>
            <p>Count: {counter} </p>
            
            </div>
    )
}

export default  Increment