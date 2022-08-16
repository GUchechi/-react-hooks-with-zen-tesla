import { useEffect, useRef, useState } from 'react';
import './App.css';


function App() {
  const [count, setCount] = useState(0)
  const colors = ["red", "green", "blue", "yellow", "orange", "pink", "white" , 
  "black", "purple", "olive", "gray", "lime", "violet", "maroon", "cream", "tan", "teal", 
  "mustard", "navy blue", "coral", "burgundy", "lavender", "mauve", "peach", "rust", "gold", "silver", "cyan"
];
  const divRef = useRef();

  const handleDecrement = () => {
    if(count === 0) return;
    setCount(count - 1)
  }

  
  const handleIncrement = () => {
    setCount(count + 1)
  }


  const handleReset = () => {;
    setCount(0)
  }

  useEffect(() => {
    divRef.current.style.color= 
    colors[Math.floor(Math.random()*colors.length)]

    console.log("hello world")
  }, [count]);


  return (
    <div className="App">
      <div className="counter">
        <h1 ref={divRef}>Hello!!!</h1>
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
