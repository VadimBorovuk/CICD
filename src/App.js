import React, {useState} from 'react';
import Todos from "./components/Todos";

const App = () => {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(prevState => prevState + 1)
  }
  return (
      <div>
        count {count}
        <button onClick={increment}>add new data</button>

        <hr/>
        <Todos/>
      </div>
  );
};

export default App;
