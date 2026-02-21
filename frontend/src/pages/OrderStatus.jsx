import { useState, useEffect } from "react";
import axios from "axios";

function OrderStatus(){

const [orders,setOrders]=useState([]);

useEffect(()=>{

axios.get(
"http://localhost:5000/user/order/user/1"
)
.then(res=>{
 setOrders(res.data);
});

},[]);


return(

<div>

<h2>Order Status</h2>

<table border="1">

<thead>
<tr>
<th>Order ID</th>
<th>Amount</th>
<th>Status</th>
</tr>
</thead>

<tbody>

{
orders.map(o=>(
<tr key={o.id}>

<td>{o.id}</td>
<td>{o.total_amount}</td>
<td>{o.status}</td>

</tr>
))
}

</tbody>

</table>

</div>

);

}

export default OrderStatus;