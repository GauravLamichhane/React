//useContext() = react hook that allows you to share values between multiple levels of components without passing props through each level
import { useContext } from "react";
import { UserContext } from "./ComponentA";
function ComponentD() {
  const user = useContext(UserContext);
  return (
    <div className="box">
      <p>ComponentD</p>
      <h2>{`Bye:${user}`}</h2>
    </div>
  );
}
export default ComponentD;
