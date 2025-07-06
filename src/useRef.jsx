/**
 * useState() = Rerenders the component when the state value changes.
 * u
 * UseRef() = use Reference Does not cause re-renders when its value changes.
 * when you want a componenet to 'remember' some information,
 * but you don't want that information to trigegr new renders.
 *
 * 1. Acessing/Interacting with DOM elements.
 * 2.Handling Focus, Animations and transactions.
 * 3. Managing Timers and Intervals
 *
 */

import { useState, useEffect, useRef } from "react";

function MyComponent() {
  const inputref = useRef(null);
  // console.log(ref);

  useEffect(() => {
    console.log("Component Rendered");
  });

  function handleClick() {
    inputref.current.focus();
    inputref.current.style.backgroundColor = "yellow";
    // console.log(ref.current);
  }
  return (
    <>
      <button onClick={handleClick}>Click Me!</button>
      <input type="text" ref={inputref} />
    </>
  );
}

export default MyComponent;
