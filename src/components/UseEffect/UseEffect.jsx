import { useState, useEffect } from 'react'

const UseEffect = () => {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    document.title = `Titolo della Pagina: ${counter}`
  }, [counter]) 

  return (
    <div>
      <p>Titolo della pagina: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Aggiorna</button>
    </div>
  )
}

export default UseEffect
