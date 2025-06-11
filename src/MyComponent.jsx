import { useState } from "react";

function MyComponent(){
const [name,setName] = useState("Guest");
const [age,setAge] = useState(0);
const [isemployeed, setIsEmployeed] = useState(false);
const updateName = () =>{
  setName("Gaurav");
}
const incrementAge = () =>{
  setAge(age + 1);
}
const isemployeedo =  () =>{
  setIsEmployeed(!isemployeed);
}
  return(<>
  <p>Name:{name}</p>
  <button onClick={updateName}>Set Name</button>


  <p>Age:{age}</p>
  <button onClick={incrementAge}>Increment Age</button>

  <p>Employment:{isemployeed ? "Yes" : "No"}</p>
  <button onClick={isemployeedo}>Employeed</button>
  </>);
}

export default MyComponent