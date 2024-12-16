import React, {useState} from 'react';

const App = () => {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(prevState => prevState + 1)
  }
  return (
      <div>
        count {count}
        <button onClick={increment}>add</button>
      </div>
  );
};

export default App;
