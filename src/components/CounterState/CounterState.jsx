import {useState} from 'react'

const CounterState = () => {
const [counter, setCounter] = useState(0);
    return ( 
        <div>Count: {counter} </div>
    )
}

export default  CounterState