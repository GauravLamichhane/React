function Button(){
  const handleClick = (e) => e.target.textContent = "Ouch";

return(<button onDoubleClick={(e)=> handleClick(e)}>Click Me 👌</button>);
}
export default Button