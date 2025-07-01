import { useState } from "react";
function MyComponent(){
const [cars,setCars] = useState([]);
const [carYear, setcarYear] = useState(new Date().getFullYear());
const [carMake, setCarMake] = useState("");
const [carModel, setCarModel] = useState("");

function handleAddCar(){
  const newcar = {year: carYear,
    make: carMake,
    model: carModel};


setCars(c => [...c, newcar]);

setcarYear(new Date().getFullYear());
setCarMake(""); 
setCarModel("");
}

function handleRemoveCar(index){
setCars(cars.filter((_, i) => i !== index));
}

function handleYearChange(event){
setcarYear(event.target.value);
}

function handleMakeChange(event){
setCarMake(event.target.value);
}


function handleModelChange(event){
setCarModel(event.target.value);
}


return(<div>
<h2>List of Car Objects</h2>
<ul>
  {cars.map((car, index) => 
  <li key={index} onClick={ () => handleRemoveCar(index)}>
    {car.year}{car.make}{car.model}
  </li>)}
</ul>
<input type="number" id="addmodel" value={carYear} onChange={handleYearChange}/><br />
<input type="text" placeholder="Enter a car make" id="addmake" value={carMake} onChange={handleMakeChange}/><br />
<input type="text" placeholder="Enter car model" id ="addmodel" value={carModel} onChange={handleModelChange} /><br />
<button onClick={handleAddCar}>Add Car</button>
  </div>);
}

export default MyComponent