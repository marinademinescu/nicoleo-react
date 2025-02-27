import { useRef } from "react";

const UncontrolledInput = () => {

    const inputRef = useRef()

    const handleSubmit = (e) => {
    e.preventDefault()

    alert('Valore dell Input' + '' + inputRef.current.value)
    }


    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Nome:</label>
            <input type="text" ref={inputRef} />
            <button type="submit">Invia</button>
        </form>

    )

}

export default UncontrolledInput