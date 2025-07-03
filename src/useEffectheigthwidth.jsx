import { useState, useEffect } from "react";

function MyComponent() {
  const [height, setHeight] = useState(window.innerHeight);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    console.log("Event listener added");
    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("event listener removed");
    };
  }, []);

  function handleResize() {
    setHeight(window.innerHeight);
    setWidth(window.innerWidth);
  }
  return (
    <>
      <p>Height:{height}px</p>
      <p>Width:{width}px</p>
    </>
  );
}
export default MyComponent;
