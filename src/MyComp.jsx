import { useState } from "react";
function MyComp(){

  const [name,setName] = useState("");
  const [quantity,setQuantity] = useState(1);
  const [comment,setComment] = useState("");
  const [payment,setPayment] = useState("");
  const [shipping, setShipping] = useState("");

  function chanename(event){
    setName(event.target.value);
  }

  function changequantity(event){
    setQuantity(event.target.value);
  }

const handleComment = (event)=>{
  setComment(event.target.value);
}

function handlePayment(event){
  setPayment(event.target.value);
}

function handleShipping(event){
  setShipping(event.target.value);
}
  
  return(<>
  <input type="text" value={name} onChange={chanename} />
  <p >Name:{name}</p>

  <input type="number" value={quantity} onChange={changequantity} />
  <p>Quantity:{quantity}</p>

  <textarea name="" onChange={handleComment} placeholder="Enter your comment here..." ></textarea>
  <p>Comment:{comment}</p>
  <select value={payment} onChange={handlePayment} >
    <option value="payment options">Payment Options:</option>
    <option value="Esewa">Esewa</option>
    <option value="ConnectIPS">ConnectIPS</option>
    <option value="Khalti">Khalti</option>
  </select>
  <p>Payment:{payment}</p>


<label htmlFor="">
  <input type="radio" value="Pick Up"
  checked = {shipping === "Pick Up"} 
  onChange={handleShipping}/>
  Pick Up
</label>
<label htmlFor="">
  <input type="radio" value="Delivery"
  checked = {shipping === "Delivery"} 
  onChange={handleShipping}/>
  Delivery
</label>
<p>Shipping: {shipping}</p>
  </>);
}
export default MyComp