//Updater Function = A function as an arguement to setState() usually
//ex. setYear(arrow function)
//setYear(y => y +1)
//

import {useState } from "react";
function Counter(){
const [count,setCount] = useState(0);//count ->stateful variable and setcount -> setter function

const increment = () =>{
  //setCount(count + 1); previously which take old value count = 0
  setCount(c =>c + 1);//Updater function uses latest value
  setCount(c =>c + 1);//it uses latest values like 0 1 2 3
  setCount(c =>c + 1);
}
const decrement = () =>{
  setCount(c => c -1);
  setCount(c => c -1);
  setCount(c => c -1);
}
const reset = () =>{
  setCount(0);
}
  return(<>
  <div>
    <p>{count}</p>
    <button onClick={increment}>Increment</button>
    <button onClick={reset}>Reset</button>
    <button onClick={decrement}>Decrement</button>
  </div>
  
  </>);
}

export default Counter;