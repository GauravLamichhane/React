import { useState } from "react";

function MyComponent(){
const [foods, setFoods] = useState(['Apple', 'Mango','Banana']);

function handleAddFood(){
  const newFood = document.getElementById("Foodinput").value;
  document.getElementById("Foodinput").value = "";
  setFoods(f => [...f,newFood]);
}
function handleRemoveFood(index){
setFoods(foods.filter((_, i) => i !== index));//returns a new array excluding the item at index.
}

return(<div>
<h2>List of Foods:</h2>
<ul>
  {foods.map((food, index) => 
  <li key={index} onClick={ () => handleRemoveFood(index)}>
    {food}
  </li>)}
</ul>
<input type="text" id = "Foodinput" placeholder="Enter the food name" />
<button onClick={handleAddFood}>Add Food</button>
</div>);
}

export default MyComponent