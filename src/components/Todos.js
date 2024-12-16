import React, {useState} from 'react';

const Todos = () => {
  const [todos, setTodos] = useState([])
  const [loader, setLoader] = useState(false)

  const loadTodos = () => {
    setLoader(true)

    setTimeout(() => {
      setTodos(['work', 'study', 'chill', 'sport'])
      setLoader(false)
    }, 1000)
  }

  return (
      <div>
        <button onClick={loadTodos}>load todos</button>
        {loader ? 'Loading todos' : todos.map((todo, idx) => {
          return <p key={idx}>{todo}</p>
        })}
      </div>
  );
};

export default Todos;
