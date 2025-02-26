import { useState } from 'react';

const Reset = () => {
  const [counter, setCounter] = useState(0);

  const resetButton = () => {
    setCounter(0);
  };

  return (
    <div>
      <button onClick={resetButton}>Reset</button>
      <p>Count: {counter}</p>
    </div>
  );
};

export default Reset; 
