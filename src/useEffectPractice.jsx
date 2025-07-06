import { useState, useEffect } from "react";

function MyComponent() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("green");

  function handleCount() {
    setCount((c) => c + 1);
  }

  function changeColors() {
    setColor((c) => (c === "green" ? "red" : "green"));
  }
  useEffect(() => {
    document.title = `Count: ${count} Color: ${color}`;
  }, [count, color]);
  return (
    <>
      <p style={{ color: color }}>Count:{count}</p>
      <button onClick={handleCount}>Add</button>
      <button onClick={changeColors}>Change Color</button>
    </>
  );
}

export default MyComponent;
