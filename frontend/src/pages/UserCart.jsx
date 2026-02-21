import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function UserCart(){

const navigate = useNavigate();

const userId = 1;

const [cart,setCart] = useState([]);

const [quantities,setQuantities] = useState({});


useEffect(()=>{
loadCart();
},[]);



const loadCart = async()=>{

const res = await axios.get(
`http://localhost:5000/user/cart/${userId}`
);

setCart(res.data);

let qty = {};

res.data.forEach(item=>{
qty[item.id] = 1;
});

setQuantities(qty);

};



const removeItem = async(cartId)=>{

await axios.delete(
`http://localhost:5000/user/cart/remove/${cartId}`
);

loadCart();

};



const removeAll = async()=>{

await axios.delete(
`http://localhost:5000/user/cart/remove-all/${userId}`
);

loadCart();

};



const updateQuantity=(cartId,value)=>{
setQuantities({
...quantities,
[cartId]:value
});
};



const grandTotal = cart.reduce((total,item)=>{

return total + item.price * (quantities[item.id] || 1);

},0);



return(

<div>

{/* TOP BUTTONS */}

<div style={{display:"flex",gap:"20px",padding:"20px"}}>

<button onClick={()=>navigate("/user")}>
Home
</button>

<button onClick={()=>navigate("/user/products")}>
View Product
</button>

<button onClick={()=>navigate("/user/request")}>
Request Item
</button>

<button onClick={()=>navigate("/user/status")}>
Product Status
</button>

<button onClick={()=>navigate("/")}>
Logout
</button>

</div>



<h2 style={{textAlign:"center"}}>
Shopping Cart
</h2>



{/* TABLE */}

<table border="1" cellPadding="10">

<thead>
<tr>
<th>Image</th>
<th>Name</th>
<th>Price</th>
<th>Quantity</th>
<th>Total</th>
<th>Action</th>
</tr>
</thead>


<tbody>

{cart.map(item=>{

const qty = quantities[item.id] || 1;

return(

<tr key={item.id}>

<td>{item.image}</td>

<td>{item.name}</td>

<td>₹{item.price}</td>

<td>

<select
value={qty}
onChange={(e)=>updateQuantity(item.id,e.target.value)}
>

<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
<option value="4">4</option>

</select>

</td>

<td>
₹{item.price * qty}
</td>

<td>

<button onClick={()=>removeItem(item.id)}>
Remove
</button>

</td>

</tr>

);

})}

</tbody>

</table>



{/* TOTAL */}

<h3>
Grand Total: ₹{grandTotal}
</h3>


<button onClick={removeAll}>
Delete All
</button>


<br/><br/>

<button onClick={()=>navigate("/user/checkout")}>
Proceed to Checkout
</button>


</div>

);

}

export default UserCart;