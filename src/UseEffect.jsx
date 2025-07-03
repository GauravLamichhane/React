/*
useEffect(function, [dependencies])
1.useEffect(()=> {}) // rus after every re render
2.useEffect(()=> {},[])//runs only on mount
3.useEffect(()=> {}, [value]) // runs on mount + when value changes
*/

import { useEffect } from "react";
import { useState } from "react";

function MyComponent() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("green");

  useEffect(() => {
    document.title = `Count: ${count} Color: ${color}`;
  }, [count, color]);
  function addCount() {
    setCount((c) => c + 1);
  }
  function subtractCount() {
    setCount((c) => c - 1);
  }
  function changeColors() {
    setColor((c) => (c === "green" ? "red" : "green")); // if previuos color is equal to green if true then return red else green
  }
  return (
    <>
      <p style={{ color: color }}>Count:{count}</p>
      <button onClick={addCount}>Add</button>
      <button onClick={subtractCount}>Subtract</button>
      <button onClick={changeColors}>Change Color</button>
    </>
  );
}

export default MyComponent;
