import { useState } from "react";
function MyComponentPractice(){
const [name,setName] = useState("User");
const [isemployeed,setIsEmployeed] = useState(false);
const updatename = () =>{
  setName("Gaurav");
}
const updateemployee =() =>{
  setIsEmployeed(!isemployeed);
}
  return(<>
  <p>Name:{name}</p>
  <button onClick={updatename}>Set Name:</button>

  <p>Isemployeed:{isemployeed ? "yes" : "No"}</p>
  <button onClick={updateemployee}>Intern</button>
  </>);
}

export default MyComponentPractice