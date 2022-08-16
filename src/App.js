import { useState } from 'react';
import './App.css';


function App() {
  const [count, setCount] = useState(0)

  const handleDecrement = () => {
    setCount(count - 1)
  }

  
  const handleIncrement = () => {
    setCount(count + 1)
  }


  const handleReset = () => {
    setCount(0)
  }


  return (
    <div className="App">
      <div className="counter">
        <h2>{count}</h2>
        <div className="btnContainer">
          <button onClick={handleDecrement}>-1</button>
          <button onClick={handleIncrement}>+1</button>
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
