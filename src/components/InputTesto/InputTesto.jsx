import { useState } from 'react';

const InputTesto = () => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    }

    return (
        <div>
            <input type="text" value={inputValue} onChange={handleInputChange} />
            <p>Hai scritto: {inputValue} </p>
        </div>
    );
}

export default InputTesto;


