//useContext() = react hook that allows you to share values between multiple levels of components without passing props through each level
import ComponentC from "./ComponentC";
function ComponentB() {
  return (
    <div className="box">
      <p>Component B</p>
      <ComponentC />
    </div>
  );
}
export default ComponentB;
