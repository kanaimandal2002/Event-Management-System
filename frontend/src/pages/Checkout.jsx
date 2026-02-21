import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Checkout(){

const navigate = useNavigate();

const userId = 1;

const [total,setTotal] = useState(0);

const [form,setForm] = useState({

name:"",
email:"",
number:"",
address:"",
city:"",
state:"",
pincode:"",
payment:"Cash"

});



useEffect(()=>{
loadTotal();
},[]);



const loadTotal = async()=>{

const res = await axios.get(
`http://localhost:5000/user/cart/${userId}`
);

let sum = 0;

res.data.forEach(item=>{
sum += item.price * item.quantity;
});

setTotal(sum);

};



const handleChange=(e)=>{

setForm({

...form,
[e.target.name]:e.target.value

});

};



const orderNow = async()=>{

await axios.post(
"http://localhost:5000/user/order/add",
{
user_id:userId,
total,
...form
}
);

alert("Order placed successfully");

navigate("/user/dashboard");

};



return(

<div style={{padding:"40px"}}>

<h2>Checkout</h2>


<h3>
Item Grand Total: ₹{total}
</h3>



<h3>Details</h3>



<div style={{
display:"grid",
gridTemplateColumns:"1fr 1fr",
gap:"20px",
width:"500px"
}}>


<input
name="name"
placeholder="Name"
onChange={handleChange}
/>


<input
name="number"
placeholder="Number"
onChange={handleChange}
/>


<input
name="email"
placeholder="Email"
onChange={handleChange}
/>


<select
name="payment"
onChange={handleChange}
>

<option value="Cash">Cash</option>
<option value="UPI">UPI</option>

</select>



<input
name="address"
placeholder="Address"
onChange={handleChange}
/>


<input
name="state"
placeholder="State"
onChange={handleChange}
/>


<input
name="city"
placeholder="City"
onChange={handleChange}
/>


<input
name="pincode"
placeholder="Pin Code"
onChange={handleChange}
/>


</div>



<br/><br/>

<button onClick={orderNow}>
Order Now
</button>


</div>

);

}

export default Checkout;