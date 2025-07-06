//useContext() = react hook that allows you to share values between multiple levels of components without passing props through each level

import { useContext } from "react";
import { UserContext } from "./ComponentA";
import ComponentD from "./ComponentD";
function ComponentC() {
  const user = useContext(UserContext);
  return (
    <div className="box">
      <p>ComponentC</p>
      <h2>{`Hello:${user}`}</h2>
      <ComponentD />
    </div>
  );
}
export default ComponentC;
