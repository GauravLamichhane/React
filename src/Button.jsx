function Button(){
  let count = 0;
  const handleClick = (name) => {
    if(count < 3){
      count++;
      console.log(`${name} you clicked me ${count} times.`)
    }
    else{
      console.log("Stop clicking me.");
    }
  } 

  return(<button onClick={()=>handleClick("gaurav")}>Click Me 👌</button>);
}
export default Button