import { useState } from 'react';

const Decrement = () => {
  const [counter, setCounter] = useState(0);

  const decrementButton = () => {
    setCounter((_counter) => _counter - 1);
  };

  return (
    <div>
      <button onClick={decrementButton}>Decrement</button>
      <p>Count: {counter}</p>
    </div>
  );
};

export default Decrement;
